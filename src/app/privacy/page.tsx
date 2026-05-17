import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных · Антон Орешкин",
  description:
    "Условия обработки персональных данных при отправке заявки через форму на сайте.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 sm:pt-28 pb-20">
        <article className="max-w-[820px] mx-auto px-5 sm:px-8 lg:px-12 py-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 pl-3 pr-4 py-2 rounded-full bg-alabaster-gray hover:bg-ghost-white transition-colors text-[13px] font-medium text-obsidian-text"
          >
            <ArrowLeft className="size-4" />
            На главную
          </Link>

          <h1
            className="mt-8 font-display font-semibold text-obsidian-text"
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
            }}
          >
            Согласие на обработку персональных данных
          </h1>

          <div className="mt-8 text-[16px] leading-[1.6] text-granite-gray space-y-5">
            <p>
              Отправляя заявку через форму на этом сайте, я даю согласие на
              обработку моих персональных данных, указанных в форме: имя,
              контакт в Telegram или email, учебное заведение, текст
              сообщения.
            </p>
            <p>
              Цель обработки: связь с заявителем, обсуждение запроса, подбор
              формата сотрудничества или участия в проектах Антона Орешкина.
            </p>
            <p>
              Срок обработки: до момента отзыва согласия или достижения цели
              обработки. Отозвать согласие можно сообщением на
              <a
                href="https://t.me/xeniapm"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 underline underline-offset-2 text-obsidian-text hover:text-electric-orange transition-colors"
              >
                @xeniapm в Telegram
              </a>
              .
            </p>
            <p>
              Данные обрабатываются в соответствии с Федеральным законом
              №152-ФЗ «О персональных данных». Передача третьим лицам без
              отдельного согласия не производится.
            </p>
            <p className="text-[14px] text-granite-gray/80">
              Версия: 14 мая 2026 года.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
