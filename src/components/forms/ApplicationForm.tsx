"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export type ApplicationFormIntent =
  | "project"
  | "consultation"
  | "application"
  | "partnership"
  | "volunteer";

type ApplicationFormProps = {
  title: string;
  subtitle?: string;
  intent: ApplicationFormIntent;
  submitLabel?: string;
  className?: string;
};

type FormState = {
  name: string;
  contact: string;
  message: string;
  institution: string;
  privacyAccepted: boolean;
  marketingAccepted: boolean;
};

const INITIAL: FormState = {
  name: "",
  contact: "",
  message: "",
  institution: "",
  privacyAccepted: false,
  marketingAccepted: false,
};

const inputBase =
  "w-full rounded-2xl border border-black/[0.08] bg-canvas-white px-4 py-3.5 text-[15px] text-obsidian-text placeholder:text-granite-gray/70 transition-shadow outline-none focus:border-electric-orange/60 focus:ring-2 focus:ring-electric-orange/30";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="font-sans text-[14px] font-medium text-obsidian-text">
        {label}
        {required ? <span className="text-electric-orange"> *</span> : null}
      </span>
      {children}
    </label>
  );
}

function Checkbox({
  id,
  checked,
  onChange,
  required,
  children,
}: {
  id: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={id}
      className="flex items-start gap-3 cursor-pointer select-none group"
    >
      <span className="relative inline-flex items-center justify-center shrink-0 mt-0.5">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          required={required}
          onChange={(event) => onChange(event.target.checked)}
          className="peer sr-only"
        />
        <span
          aria-hidden
          className={cn(
            "inline-flex items-center justify-center w-5 h-5 rounded-full border transition-colors",
            checked
              ? "bg-ink-black border-ink-black"
              : "bg-canvas-white border-black/20 group-hover:border-black/40",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-electric-orange/50 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-canvas-white"
          )}
        >
          {checked ? <Check className="size-3 text-canvas-white" strokeWidth={3} /> : null}
        </span>
      </span>
      <span className="text-[13px] leading-snug text-granite-gray">
        {children}
        {required ? <span className="text-electric-orange"> *</span> : null}
      </span>
    </label>
  );
}

export function ApplicationForm({
  title,
  subtitle,
  intent,
  submitLabel = "Отправить заявку",
  className,
}: ApplicationFormProps) {
  const [state, setState] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const showInstitutionField = intent === "application";

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!state.privacyAccepted) return;

    const payload = {
      intent,
      name: state.name.trim(),
      contact: state.contact.trim(),
      message: state.message.trim(),
      institution: showInstitutionField ? state.institution.trim() : undefined,
      privacyAccepted: state.privacyAccepted,
      marketingAccepted: state.marketingAccepted,
      submittedAt: new Date().toISOString(),
    };

    console.log("[ApplicationForm] submitted", payload);
    setSubmitted(true);
  }

  return (
    <section
      id="application"
      className={cn(
        "max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-24",
        className
      )}
    >
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-granite-gray font-medium mb-5">
            Заявка
          </div>
          <h2
            className="font-display font-semibold text-obsidian-text"
            style={{
              fontSize: "clamp(30px, 4.6vw, 52px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </h2>
          {subtitle ? (
            <p
              className="mt-5 text-granite-gray max-w-[460px]"
              style={{
                fontSize: "clamp(15px, 1.3vw, 17px)",
                lineHeight: 1.5,
              }}
            >
              {subtitle}
            </p>
          ) : null}
        </Reveal>

        <Reveal delay={0.08}>
          <div className="bg-canvas-white rounded-[30px] p-6 sm:p-8 shadow-humble border border-black/[0.04]">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-10">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 mb-5">
                  <Check className="size-7" strokeWidth={2.5} />
                </span>
                <h3 className="font-display font-semibold text-obsidian-text text-[22px] mb-2">
                  Спасибо, мы получили заявку
                </h3>
                <p className="text-[14px] text-granite-gray max-w-[360px]">
                  Свяжемся с вами в течение одного-двух рабочих дней. Если запрос срочный, напишите в Telegram.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <Field label="Имя" htmlFor="application-name" required>
                  <input
                    id="application-name"
                    type="text"
                    required
                    value={state.name}
                    onChange={(event) => update("name", event.target.value)}
                    placeholder="Как к вам обращаться"
                    className={inputBase}
                  />
                </Field>

                <Field
                  label="Telegram-ник или email"
                  htmlFor="application-contact"
                  required
                >
                  <input
                    id="application-contact"
                    type="text"
                    required
                    value={state.contact}
                    onChange={(event) => update("contact", event.target.value)}
                    placeholder="@username или name@example.com"
                    className={inputBase}
                  />
                </Field>

                {showInstitutionField ? (
                  <Field label="Учебное заведение" htmlFor="application-institution">
                    <input
                      id="application-institution"
                      type="text"
                      value={state.institution}
                      onChange={(event) => update("institution", event.target.value)}
                      placeholder="Школа, вуз, программа"
                      className={inputBase}
                    />
                  </Field>
                ) : null}

                <Field label="Опишите запрос" htmlFor="application-message" required>
                  <textarea
                    id="application-message"
                    required
                    rows={5}
                    value={state.message}
                    onChange={(event) => update("message", event.target.value)}
                    placeholder="Коротко: задача, контекст, ожидаемый результат"
                    className={cn(inputBase, "resize-y min-h-[120px]")}
                  />
                </Field>

                <div className="flex flex-col gap-3 pt-2">
                  <Checkbox
                    id="application-privacy"
                    checked={state.privacyAccepted}
                    onChange={(value) => update("privacyAccepted", value)}
                    required
                  >
                    Я даю согласие на{" "}
                    <a
                      href="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 text-obsidian-text hover:text-electric-orange transition-colors"
                    >
                      обработку персональных данных
                    </a>{" "}
                    в целях ответа на мой запрос
                  </Checkbox>
                  <Checkbox
                    id="application-marketing"
                    checked={state.marketingAccepted}
                    onChange={(value) => update("marketingAccepted", value)}
                  >
                    Соглашаюсь получать{" "}
                    <a
                      href="/consent"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 text-obsidian-text hover:text-electric-orange transition-colors"
                    >
                      информационные рассылки
                    </a>{" "}
                    от Антона Орешкина
                  </Checkbox>
                </div>

                <button
                  type="submit"
                  className="mt-3 inline-flex items-center justify-center px-6 py-4 rounded-full bg-ink-black text-canvas-white text-[15px] font-medium hover:bg-obsidian-text transition-colors"
                >
                  {submitLabel}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
