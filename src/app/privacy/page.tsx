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

            <h2 className="font-display font-semibold text-obsidian-text pt-4" style={{ fontSize: "18px", letterSpacing: "-0.02em" }}>
              1. Состав обрабатываемых персональных данных
            </h2>
            <p>
              Оператор обрабатывает следующие персональные данные, добровольно
              предоставленные пользователем через формы сайта:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>фамилия и имя;</li>
              <li>адрес электронной почты;</li>
              <li>Telegram-никнейм (при указании);</li>
              <li>номер телефона (при указании);</li>
              <li>наименование учебного заведения или организации (при указании);</li>
              <li>текст обращения.</li>
            </ul>
            <p>
              Оператор не обрабатывает специальные категории персональных данных,
              указанные в ст.&nbsp;10 Федерального закона №&nbsp;152-ФЗ.
            </p>

            <h2 className="font-display font-semibold text-obsidian-text pt-4" style={{ fontSize: "18px", letterSpacing: "-0.02em" }}>
              2. Цели и правовые основания обработки
            </h2>
            <p>
              Персональные данные обрабатываются в следующих целях:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                ответ на запросы и заявки пользователей — основание: согласие
                субъекта (ст.&nbsp;6 ч.&nbsp;1 п.&nbsp;1, ст.&nbsp;9
                Федерального закона №&nbsp;152-ФЗ), а также необходимость
                исполнения действий по запросу субъекта до заключения договора
                (ст.&nbsp;6 ч.&nbsp;1 п.&nbsp;5);
              </li>
              <li>
                организация консультаций, деловых встреч и звонков — основание:
                согласие субъекта (ст.&nbsp;6 ч.&nbsp;1 п.&nbsp;1);
              </li>
              <li>
                направление информационных рассылок — основание: отдельное
                согласие субъекта (ст.&nbsp;9 Федерального закона
                №&nbsp;152-ФЗ), предоставляемое исключительно добровольно.
              </li>
            </ul>

            <h2 className="font-display font-semibold text-obsidian-text pt-4" style={{ fontSize: "18px", letterSpacing: "-0.02em" }}>
              3. Порядок обработки и хранения
            </h2>
            <p>
              Оператор осуществляет сбор, запись, систематизацию, накопление,
              хранение, уточнение, использование, обезличивание, блокирование,
              удаление и уничтожение персональных данных с применением средств
              автоматизации.
            </p>
            <p>
              Персональные данные не передаются третьим лицам без согласия
              субъекта, за исключением случаев, прямо предусмотренных
              законодательством Российской Федерации. Оператор вправе
              привлекать сервисы-обработчики (сервисы аналитики, планирования
              встреч) на основании договоров, соответствующих требованиям
              152-ФЗ.
            </p>
            <p>
              Персональные данные хранятся в течение срока, необходимого для
              достижения целей обработки, либо до момента отзыва согласия
              субъектом, если иное не установлено законодательством.
            </p>

            <h2 className="font-display font-semibold text-obsidian-text pt-4" style={{ fontSize: "18px", letterSpacing: "-0.02em" }}>
              4. Меры по защите персональных данных
            </h2>
            <p>
              Оператор принимает необходимые правовые, организационные и
              технические меры для защиты персональных данных от
              неправомерного или случайного доступа, уничтожения, изменения,
              блокирования, копирования, распространения и иных неправомерных
              действий.
            </p>

            <h2 className="font-display font-semibold text-obsidian-text pt-4" style={{ fontSize: "18px", letterSpacing: "-0.02em" }}>
              5. Права субъекта персональных данных
            </h2>
            <p>В соответствии с Федеральным законом №&nbsp;152-ФЗ вы вправе:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>получить сведения об обработке ваших персональных данных;</li>
              <li>потребовать уточнения, блокирования или уничтожения данных;</li>
              <li>отозвать согласие на обработку персональных данных в любое время;</li>
              <li>
                обратиться с жалобой в Федеральную службу по надзору в сфере
                связи, информационных технологий и массовых коммуникаций
                (Роскомнадзор) или в суд.
              </li>
            </ul>
            <p>
              Для реализации прав, включая отзыв согласия, направьте обращение
              в Telegram:{" "}
              <a href="https://t.me/antonoreshkin" target="_blank" rel="noopener noreferrer"
                className="underline underline-offset-2 text-obsidian-text hover:text-electric-orange transition-colors">
                @antonoreshkin
              </a>{" "}
              или{" "}
              <a href="https://t.me/xeniapm" target="_blank" rel="noopener noreferrer"
                className="underline underline-offset-2 text-obsidian-text hover:text-electric-orange transition-colors">
                @xeniapm
              </a>
              . Обращение рассматривается в сроки, установленные
              ст.&nbsp;20–21 Федерального закона №&nbsp;152-ФЗ.
            </p>

            <h2 className="font-display font-semibold text-obsidian-text pt-4" style={{ fontSize: "18px", letterSpacing: "-0.02em" }}>
              6. Контактные данные оператора
            </h2>
            <p>
              Индивидуальный предприниматель Орешкин Антон Вадимович<br />
              ИНН: 100123323420<br />
              Сайт: antonoreshkin.ru<br />
              Telegram:{" "}
              <a href="https://t.me/antonoreshkin" target="_blank" rel="noopener noreferrer"
                className="underline underline-offset-2 text-obsidian-text hover:text-electric-orange transition-colors">
                @antonoreshkin
              </a>
            </p>

            <p className="text-[14px] text-granite-gray/70 pt-4 border-t border-black/[0.06]">
              Оператор вправе вносить изменения в настоящую Политику в
              одностороннем порядке. Новая редакция вступает в силу с момента
              её размещения на сайте.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
