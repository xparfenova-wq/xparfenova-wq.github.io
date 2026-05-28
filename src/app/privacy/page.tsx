import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Политика обработки персональных данных · Антон Орешкин",
  description:
    "Политика обработки персональных данных ИП Орешкин Антон Вадимович в соответствии с 152-ФЗ.",
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
            Политика обработки персональных данных
          </h1>

          <div className="mt-8 text-[16px] leading-[1.6] text-granite-gray space-y-5">
            <p>
              Индивидуальный предприниматель Орешкин Антон Вадимович
              (ИНН&nbsp;100123323420), именуемый далее «Оператор», осуществляет
              обработку персональных данных пользователей сайта antonoreshkin.ru
              в соответствии с Федеральным законом от 27.07.2006
              №&nbsp;152-ФЗ «О персональных данных» и настоящей Политикой.
            </p>

            <h2
              className="font-display font-semibold text-obsidian-text pt-4"
              style={{ fontSize: "18px", letterSpacing: "-0.02em" }}
            >
              1. Состав обрабатываемых персональных данных
            </h2>
            <p>
              Оператор обрабатывает следующие данные, добровольно предоставленные
              пользователем через формы сайта: фамилия и имя; адрес электронной
              почты или Telegram-никнейм; номер телефона (при указании);
              наименование учебного заведения; текст обращения.
            </p>

            <h2
              className="font-display font-semibold text-obsidian-text pt-4"
              style={{ fontSize: "18px", letterSpacing: "-0.02em" }}
            >
              2. Цели обработки
            </h2>
            <p>
              Персональные данные обрабатываются в следующих целях: ответ на
              запросы и заявки, поступившие через сайт; организация консультаций
              и деловых встреч; направление информационных рассылок — только
              при наличии отдельного согласия.
            </p>

            <h2
              className="font-display font-semibold text-obsidian-text pt-4"
              style={{ fontSize: "18px", letterSpacing: "-0.02em" }}
            >
              3. Правовые основания
            </h2>
            <p>
              Обработка осуществляется на основании: согласия субъекта
              персональных данных (ст.&nbsp;6, ч.&nbsp;1, п.&nbsp;1;
              ст.&nbsp;9 Федерального закона №&nbsp;152-ФЗ); необходимости
              исполнения договора по запросу субъекта
              (ст.&nbsp;6, ч.&nbsp;1, п.&nbsp;5); соблюдения требований
              законодательства Российской Федерации (ст.&nbsp;6, ч.&nbsp;1,
              п.&nbsp;2).
            </p>

            <h2
              className="font-display font-semibold text-obsidian-text pt-4"
              style={{ fontSize: "18px", letterSpacing: "-0.02em" }}
            >
              4. Порядок обработки и хранения
            </h2>
            <p>
              Оператор осуществляет сбор, запись, систематизацию, хранение,
              использование и уничтожение персональных данных с применением
              средств автоматизации. Данные не передаются третьим лицам без
              согласия субъекта, за исключением случаев, предусмотренных
              законодательством. Персональные данные хранятся до достижения цели
              обработки или до отзыва согласия.
            </p>

            <h2
              className="font-display font-semibold text-obsidian-text pt-4"
              style={{ fontSize: "18px", letterSpacing: "-0.02em" }}
            >
              5. Права субъекта персональных данных
            </h2>
            <p>
              Вы вправе: получить информацию об обработке ваших данных;
              потребовать их уточнения, блокирования или уничтожения;
              отозвать согласие в любой момент; обратиться в Роскомнадзор
              или суд в случае нарушения ваших прав.
            </p>
            <p>
              Для отзыва согласия или реализации иных прав направьте обращение
              через форму на сайте или в Telegram:{" "}
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

            <h2
              className="font-display font-semibold text-obsidian-text pt-4"
              style={{ fontSize: "18px", letterSpacing: "-0.02em" }}
            >
              6. Контактные данные оператора
            </h2>
            <p>
              ИП Орешкин Антон Вадимович, ИНН&nbsp;100123323420.
              Сайт:&nbsp;antonoreshkin.ru. Telegram:&nbsp;
              <a
                href="https://t.me/antonoreshkin"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 text-obsidian-text hover:text-electric-orange transition-colors"
              >
                @antonoreshkin
              </a>
              .
            </p>

            <p className="text-[14px] text-granite-gray/70 pt-4 border-t border-black/[0.06]">
              Оператор вправе вносить изменения в настоящую Политику. Новая
              редакция вступает в силу с момента её размещения на сайте.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
