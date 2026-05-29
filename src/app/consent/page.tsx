import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Согласие на получение информационных рассылок · Антон Орешкин",
  description:
    "Согласие на получение информационных рассылок от ИП Орешкин Антон Вадимович.",
  alternates: { canonical: "/consent" },
  robots: { index: false, follow: false },
};

export default function ConsentPage() {
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
            Согласие на получение информационных рассылок
          </h1>

          <div className="mt-8 text-[16px] leading-[1.6] text-granite-gray space-y-5">
            <p>
              Настоящее согласие предоставляется Индивидуальному предпринимателю
              Орешкин Антон Вадимович (ИНН&nbsp;100123323420), именуемому далее
              «Оператор», и регулируется Федеральным законом от 27.07.2006
              №&nbsp;152-ФЗ «О персональных данных» и Федеральным законом
              от 13.03.2006 №&nbsp;38-ФЗ «О рекламе».
            </p>

            <h2
              className="font-display font-semibold text-obsidian-text pt-4"
              style={{ fontSize: "18px", letterSpacing: "-0.02em" }}
            >
              1. Состав персональных данных
            </h2>
            <p>
              Субъект даёт согласие на обработку следующих персональных данных:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>фамилия и имя;</li>
              <li>адрес электронной почты;</li>
              <li>Telegram-никнейм (при указании).</li>
            </ul>

            <h2
              className="font-display font-semibold text-obsidian-text pt-4"
              style={{ fontSize: "18px", letterSpacing: "-0.02em" }}
            >
              2. Цель обработки
            </h2>
            <p>
              Направление информационных рассылок: уведомления о новых
              публикациях, мероприятиях, образовательных программах, продуктах
              и услугах Оператора. Рассылки осуществляются через каналы,
              указанные субъектом (электронная почта, Telegram).
            </p>

            <h2
              className="font-display font-semibold text-obsidian-text pt-4"
              style={{ fontSize: "18px", letterSpacing: "-0.02em" }}
            >
              3. Способы обработки
            </h2>
            <p>
              Сбор, запись, систематизация, накопление, хранение, использование,
              обезличивание и уничтожение персональных данных с применением
              средств автоматизации.
            </p>

            <h2
              className="font-display font-semibold text-obsidian-text pt-4"
              style={{ fontSize: "18px", letterSpacing: "-0.02em" }}
            >
              4. Срок действия согласия
            </h2>
            <p>
              Согласие действует с момента его предоставления и до момента
              отзыва субъектом персональных данных.
            </p>

            <h2
              className="font-display font-semibold text-obsidian-text pt-4"
              style={{ fontSize: "18px", letterSpacing: "-0.02em" }}
            >
              5. Порядок отзыва согласия
            </h2>
            <p>
              Субъект вправе в любое время отозвать настоящее согласие,
              направив обращение Оператору в Telegram:{" "}
              <a
                href="https://t.me/antonoreshkin"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 text-obsidian-text hover:text-electric-orange transition-colors"
              >
                @antonoreshkin
              </a>{" "}
              или{" "}
              <a
                href="https://t.me/xeniapm"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 text-obsidian-text hover:text-electric-orange transition-colors"
              >
                @xeniapm
              </a>
              .
            </p>
            <p>
              Отзыв согласия не влияет на правомерность обработки персональных
              данных, осуществлённой до его отзыва. После получения отзыва
              Оператор прекращает обработку персональных данных в целях
              рассылок и уничтожает их в течение 30 дней, если иное не
              предусмотрено законодательством.
            </p>

            <h2
              className="font-display font-semibold text-obsidian-text pt-4"
              style={{ fontSize: "18px", letterSpacing: "-0.02em" }}
            >
              6. Добровольность согласия
            </h2>
            <p>
              Предоставление согласия на получение рассылок является
              добровольным и не является условием обработки персональных данных
              в иных целях, в том числе в целях ответа на запрос пользователя
              (ст.&nbsp;9 ч.&nbsp;3 Федерального закона №&nbsp;152-ФЗ).
            </p>

            <h2
              className="font-display font-semibold text-obsidian-text pt-4"
              style={{ fontSize: "18px", letterSpacing: "-0.02em" }}
            >
              7. Контактные данные оператора
            </h2>
            <p>
              Индивидуальный предприниматель Орешкин Антон Вадимович<br />
              ИНН: 100123323420<br />
              Сайт: antonoreshkin.ru<br />
              Telegram:{" "}
              <a
                href="https://t.me/antonoreshkin"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 text-obsidian-text hover:text-electric-orange transition-colors"
              >
                @antonoreshkin
              </a>
            </p>

            <p className="text-[14px] text-granite-gray/70 pt-4 border-t border-black/[0.06]">
              Полная{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-2 text-obsidian-text hover:text-electric-orange transition-colors"
              >
                Политика обработки персональных данных
              </Link>{" "}
              доступна по ссылке.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
