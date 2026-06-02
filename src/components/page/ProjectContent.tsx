"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, Users, Briefcase, Award, Lightbulb, MessageSquare, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCallToAction } from "@/components/page/ProjectCallToAction";
import { ProjectFeatures } from "@/components/page/ProjectFeatures";
import { SITE } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
      {eyebrow && (
        <Reveal>
          <div className="text-[12px] uppercase tracking-[0.22em] text-electric-orange-text font-medium mb-4">
            {eyebrow}
          </div>
        </Reveal>
      )}
      {title && (
        <Reveal delay={0.05}>
          <h2
            className="font-display font-semibold text-obsidian-text mb-7"
            style={{
              fontSize: "clamp(26px, 3.4vw, 38px)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </h2>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <div className="text-[16px] sm:text-[17px] leading-[1.6] text-granite-gray space-y-5">
          {children}
        </div>
      </Reveal>
    </section>
  );
}

type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

function FeaturesBlock({ items }: { items: FeatureItem[] }) {
  return (
    <div className="max-w-[1080px] mx-auto px-5 sm:px-8 lg:px-12 pb-8 sm:pb-12">
      <ProjectFeatures items={items} desktopColumns={items.length >= 3 ? 3 : 2} />
    </div>
  );
}

export function ProjectContent({ slug }: { slug: string }) {
  switch (slug) {
    case "medialab":
      return (
        <>
          <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-12 pt-2 pb-0">
            <div className="relative w-full aspect-video rounded-[28px] overflow-hidden">
              <Image
                src="/photos/medialab-team.png"
                alt="Oreshkin Media Lab"
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover object-top"
              />
            </div>
          </div>
          <Section eyebrow="Что делаем" title="Полный цикл видео-продакшна">
            <p>
              Снимаем в любых форматах — от презентационных и имиджевых роликов
              до прямых трансляций, корпоративных фильмов и документалистики.
              Полностью сопровождаем проект в рамках утверждённого бюджета</p>
            <p>
              Каждый проект собираем под задачу: операторы, монтаж,
              цветокоррекция, звук, графика. Беремся за работу даже без чёткого
              ТЗ — помогаем сформулировать идею, структуру и стратегию</p>
            <p>
              Работаем с частными заказчиками, образовательными учреждениями,
              государственными структурами и крупным бизнесом. Среди кейсов —
              Julius Meinl, Ростех, Московский спорт</p>
          </Section>

          <FeaturesBlock
            items={[
              {
                title: "Документальные фильмы",
                description:
                  "Главный кейс 2025 года: фильм про МФТИ с предпринимателями Forbes и нобелевским лауреатом",
                icon: Sparkles,
              },
              {
                title: "Корпоративное видео",
                description:
                  "Имиджевые ролики, интервью, промо, прямые трансляции, репортажи с ивентов",
                icon: Briefcase,
              },
              {
                title: "Контент для медиа",
                description:
                  "Подкасты, продуктовые и рекламные ролики, форматы для соцсетей под задачи продвижения",
                icon: MessageSquare,
              },
            ]}
          />

          <Section eyebrow="Кейс года" title="Фильм про МФТИ">
            <p>
              Полнометражный фильм о том, как физтеховское образование
              формирует предпринимателей. В кадре: Константин Новосёлов
              (нобелевский
              лауреат), Михаил Кучмент (Hoff), Игорь Рыбаков (Технониколь,
              Forbes), Дмитрий Ливанов (ректор МФТИ), Виктор Кузнецов, Дмитрий
              Леванов, Алексей Половинкин, Татьяна Савельева, Полина Бабаева,
              Иван Гуз, Валентин Волков, компания XPANCEO</p>
            <p>
              Премьера прошла в Долгопрудном, технопарк МФТИ, 400 зрителей. Я
              лично организовал мероприятие, программу и приглашения</p>
          </Section>

          <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-12 pb-16">
            <ProjectCallToAction
              title="Хотите посмотреть портфолио?"
              description="На сайте Oreshkin Media Lab — все форматы и примеры работ"
              buttonLabel="Открыть сайт студии"
              buttonHref={SITE.mediaLabExternalUrl}
              external
            />
          </div>
        </>
      );

    case "it-studio":
      return (
        <>
          <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-12 pt-2 pb-0">
            <div className="relative w-full aspect-video rounded-[28px] overflow-hidden">
              <Image
                src="/photos/synapt-team.png"
                alt="Команда Synapt"
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
            </div>
          </div>
          <Section eyebrow="Что делаем" title="AI/IT разработка для бизнеса">
            <p>
              Synapt собирает команду под конкретную задачу: продуктовый
              менеджер, разработчики, дизайнер, тестировщик. От прототипа до
              полной разработки. Отдельно сильны в продуктах с нейросетями</p>
            <p>
              Принцип работы: сначала платная спецификация с фиксированными
              сроками и ценой, потом разработка. Не берёмся за задачу без
              понятного результата. Код и документация остаются у клиента</p>
          </Section>

          <FeaturesBlock
            items={[
              {
                title: "AI-агенты",
                description:
                  "Цифровые ассистенты, менеджеры по продажам 24/7, служба поддержки без участия человека, умный онбординг",
                icon: Sparkles,
              },
              {
                title: "AI-платформы",
                description:
                  "SaaS-продукты под ключ, Telegram Mini Apps, корпоративные системы с интеграцией в ERP и CRM",
                icon: Briefcase,
              },
              {
                title: "AI-аналитика",
                description:
                  "Анализ диалогов и звонков, предиктивные модели, real-time дашборды, скоринг качества",
                icon: MessageSquare,
              },
            ]}
          />

        </>
      );

    case "automy-ai":
      return (
        <>
          <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-12 pt-2 pb-0">
            <div className="relative w-full aspect-video rounded-[28px] overflow-hidden">
              <Image
                src="/photos/automy-team.png"
                alt="Команда Automy AI"
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
            </div>
          </div>
          <Section eyebrow="Что это" title="Практика применения нейросетей">
            <p>
              Automy AI — курс по применению AI в ежедневной работе. Практические
              занятия от нашей команды по применению нейросетей в работе и личной
              эффективности. Для предпринимателей, для тех, кто принимает решения
              и для всех, кто хочет быть актуальным и востребованным специалистом</p>
            <p>
              Также ведём Telegram-канал — о том, как нейросети меняют работу
              команд и предпринимателей. Делимся новостями AI-мира, разбираем
              конкретные сценарии применения, инструменты и результаты в цифрах</p>
          </Section>

          <FeaturesBlock
            items={[
              {
                title: "Курс по AI",
                description:
                  "Практические занятия по применению нейросетей в работе команды и личной эффективности",
                icon: Sparkles,
              },
              {
                title: "Telegram-канал",
                description:
                  "Регулярные материалы: новые модели, кейсы применения, инструменты. Без воды",
                icon: MessageSquare,
              },
              {
                title: "Для предпринимателей",
                description:
                  "Не для разработчиков — для тех, кто принимает решения и хочет понять, что AI даёт бизнесу",
                icon: Briefcase,
              },
            ]}
          />
        </>
      );

    case "hr":
      return (
        <>
          <Section eyebrow="Что делаем" title="Подбираем специалистов для предпринимателей">
            <p>
              Закрываем вакансии от бизнес-ассистентов до руководителей уровня
              C-level. Маркетологи, операционные менеджеры, продакт-менеджеры,
              финансисты, специалисты по найму</p>
            <p>
              Работаем не только с открытым рынком. У нас есть собственная
              воронка кандидатов и доступ к перспективной молодёжи через
              сообщество. Это даёт скорость, которой обычно нет у внешних
              рекрутеров</p>
          </Section>

          <FeaturesBlock
            items={[
              {
                title: "Бизнес-ассистенты",
                description:
                  "Профессиональные ассистенты для предпринимателей: планирование, календарь, операционная поддержка",
                icon: Users,
              },
              {
                title: "Операционные роли",
                description:
                  "Менеджеры по продукту, маркетологи, операционные руководители",
                icon: Briefcase,
              },
              {
                title: "C-level",
                description:
                  "CEO, COO, CTO, CFO. Глубокая проработка профиля и кейс-интервью",
                icon: Award,
              },
            ]}
          />

          <div className="bg-alabaster-gray py-12 sm:py-16">
            <div className="max-w-[820px] mx-auto px-5 sm:px-8 lg:px-12">
              <Reveal>
                <div className="text-[12px] uppercase tracking-[0.22em] text-electric-orange-text font-medium mb-3">
                  Наше преимущество
                </div>
                <h3
                  className="font-display font-semibold text-obsidian-text mb-4"
                  style={{ fontSize: "22px", letterSpacing: "-0.02em", lineHeight: 1.25 }}
                >
                  Доступ к сообществу молодёжи титульных вузов России
                </h3>
                <p className="text-[15px] leading-[1.6] text-granite-gray mb-4">
                  Веду сообщество АССИСТ+ — более 2 500 студентов МФТИ, ВШЭ,
                  МГИМО, СПбГУ и других ведущих вузов. Когда нужен
                  перспективный специалист, обращаемся напрямую к этой аудитории</p>
                <Link
                  href="/assist"
                  className="inline-flex items-center text-[14px] font-medium text-obsidian-text underline underline-offset-4 decoration-electric-orange/40 hover:decoration-electric-orange transition-colors"
                >
                  Подробнее о сообществе АССИСТ+ →
                </Link>
              </Reveal>
            </div>
          </div>
        </>
      );

    case "mentoring":
      return (
        <>
          <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-12 pt-2 pb-0">
            <div className="relative w-full aspect-video rounded-[28px] overflow-hidden">
              <Image
                src="/photos/assist-team.jpg"
                alt="Менторское сопровождение"
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
            </div>
          </div>
          <Section eyebrow="Что делаем" title="Сопровождаем рост, не учим жить">
            <p>
              Менторская программа для школьников и студентов. Не курс с
              записями, а индивидуальное сопровождение под цель ученика</p>
            <p>
              Два направления: помощь старшеклассникам поступить в МФТИ и
              другие топовые вузы через олимпиады и ЕГЭ, и помощь студентам
              найти направление и запустить первый проект</p>
          </Section>

          <FeaturesBlock
            items={[
              {
                title: "Для старшеклассников",
                description:
                  "Стратегия поступления, подготовка к ЕГЭ, олимпиады, портфолио, выбор вуза",
                icon: Award,
              },
              {
                title: "Для студентов",
                description:
                  "Поиск направления, первый проект, развитие компетенций, нетворкинг",
                icon: Lightbulb,
              },
              {
                title: "Куратор Олеся Сычева",
                description:
                  "Ведёт программу, проводит входные звонки, координирует встречи с менторами",
                icon: Users,
              },
            ]}
          />

          <Section eyebrow="Кому подходит" title="Конкретные ученики">
            <p>
              Школьник 10–11 класса, который хочет в МФТИ, ВШЭ, МГУ, Сколково
              или другой топовый вуз и понимает, что одних только школьных
              знаний мало</p>
            <p>
              Студент 1–3 курса, который не знает, в какую сторону идти, и
              хочет к концу года иметь свой проект, первых клиентов или
              предложение от команды</p>
          </Section>
        </>
      );

    case "vending":
      return (
        <>
          <Section eyebrow="Что это" title="Сеть кофейных автоматов в Петрозаводске">
            <p>
              Мой первый офлайн-бизнес. Сеть кофейных аппаратов в Петрозаводске
              — работает несколько лет, процессы отлажены</p>
            <p>
              Сеть продаётся. Ищу покупателя, которому интересен готовый
              офлайн-бизнес с понятной экономикой в Петрозаводске</p>
            <p>
              Аппараты установлены, обслуживание налажено, клиенты есть.
              Локация — Петрозаводск, Карелия. Передаю с операционными
              процессами, поставщиками и помогаю с адаптацией</p>
          </Section>

          <FeaturesBlock
            items={[
              {
                title: "Действующая сеть",
                description:
                  "Аппараты установлены, обслуживание налажено, клиенты есть",
                icon: Briefcase,
              },
              {
                title: "Локация",
                description:
                  "Петрозаводск, Карелия. Город с понятной аудиторией и логистикой",
                icon: Users,
              },
              {
                title: "Готова к передаче",
                description:
                  "Передаю с операционными процессами и поставщиками. Помогу с переходом",
                icon: Award,
              },
            ]}
          />
        </>
      );

    case "donation":
      return (
        <>
          <Section eyebrow="Идея" title="Способ сказать спасибо преподавателю">
            <p>
              Преподаватели топовых вузов часто получают зарплату, которая не
              соответствует тому, сколько они дают студентам. Из-за этого
              сильные преподаватели уходят, а образование теряет людей</p>
            <p>
              Платформа позволяет выпускникам напрямую поддерживать тех, кто их
              учил. Это не благотворительность вслепую: вы выбираете
              конкретного преподавателя и переводите подписочный донат.
              Преподаватель видит, кто его поддерживает</p>
          </Section>

          <FeaturesBlock
            items={[
              {
                title: "Прозрачность",
                description:
                  "Выпускник видит, какую сумму получает преподаватель. Преподаватель видит, от кого",
                icon: Sparkles,
              },
              {
                title: "Подписка, не разовый платёж",
                description:
                  "Регулярная поддержка надёжнее, чем одна крупная сумма раз в год",
                icon: Briefcase,
              },
              {
                title: "Запуск на МФТИ",
                description:
                  "Первый запуск на сообществе выпускников МФТИ. Дальше масштабируем",
                icon: Award,
              },
            ]}
          />

          <Section eyebrow="Команда" title="С кем делаем проект">
            <p>
              Виктор Кузнецов — идеолог и выпускник МФТИ. Алексей Штерн —
              стратегия и сообщество. Виктория Яськова — операционные процессы</p>
            <p>
              Проект сейчас в стадии разработки. Подключайтесь к команде,
              становитесь меценатом или сообщите о вузе и преподавателе,
              которого хотели бы поддержать</p>
          </Section>
        </>
      );

    case "assist":
      return (
        <>
          <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-12 pt-2 pb-0">
            <div className="relative w-full aspect-video rounded-[28px] overflow-hidden">
              <Image
                src="/photos/assist-team.jpg"
                alt="АССИСТ+"
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
            </div>
          </div>
          <Section eyebrow="Что это" title="Сообщество молодёжи титульных вузов">
            <p>
              АССИСТ+ — сообщество студентов МФТИ, ВШЭ, МГИМО, СПбГУ и других
              ведущих вузов России. Сейчас более 2 500 человек</p>
            <p>
              Встречаемся, помогаем освоить навыки работы с ИИ, делимся и
              обмениваемся экспертизой, помогаем ребятам устраиваться,
              расти в карьере и делать свои проекты. АССИСТ+ — место, где
              студенты и предприниматели находят друг друга</p>
          </Section>

          <FeaturesBlock
            items={[
              {
                title: "Встречи и обмен",
                description:
                  "Регулярные встречи офлайн в Москве и онлайн. Делимся опытом, ресурсами, контактами",
                icon: Users,
              },
              {
                title: "Обучение AI",
                description:
                  "Практика работы с нейросетями для студенческих проектов и личной эффективности",
                icon: Sparkles,
              },
              {
                title: "Карьера и проекты",
                description:
                  "Помогаем находить стажировки и первую работу у проверенных предпринимателей",
                icon: Briefcase,
              },
            ]}
          />

          <Section eyebrow="Как попасть" title="Кого ждём">
            <p>
              Студентов вузов, которые готовы делиться и хотят прийти к
              большему в этой жизни. Кто ищет своё направление, хочет
              вкладываться в проекты, общаться и учиться быстрее обычного</p>
            <p>
              Заполните анкету, мы посмотрим и пригласим в Telegram-сообщество,
              расскажем про ближайшие встречи</p>
          </Section>
        </>
      );

    case "forum-group":
      return (
        <>
          <Section eyebrow="Что это" title="Формат, где растут быстрее">
            <p>
              Форум-группа — формат, где собирается несколько студентов, у
              которых слова редко расходятся с делами. Регулярные встречи, обмен
              прогрессом, опытом и ошибками</p>
            <p>
              Это работает потому, что рядом такие же определившиеся люди.
              Не «дружим и ничего не делаем», а подталкиваем друг друга,
              держим обещания, делимся ресурсами</p>
          </Section>

          <FeaturesBlock
            items={[
              {
                title: "Малая группа",
                description:
                  "До 10 человек в составе. Каждый знает каждого, никто не теряется",
                icon: Users,
              },
              {
                title: "Регулярный ритм",
                description:
                  "Каждый месяц общая встреча, в перерыве групповые сессии",
                icon: Briefcase,
              },
              {
                title: "Закрытый чат",
                description:
                  "Доступ к участникам, нетворкингу, общим ресурсам и ивентам",
                icon: MessageSquare,
              },
            ]}
          />
        </>
      );

    case "lyceum":
      return (
        <>
          <Section eyebrow="Лицей №1, Петрозаводск" title="Возвращаюсь домой и поддерживаю своих">
            <p>
              Учился в Лицее №1 в Петрозаводске и стал его лучшим лицеистом.
              Возвращаюсь сюда, общаюсь с учениками, поддерживаю выпускников и
              учителей</p>
            <p>
              Учредил премию «100 лицеистов года» — поддерживаем 100 лучших
              учеников разных параллелей. На выпускном вручил 100 плюшевых
              капибар</p>
          </Section>

          <FeaturesBlock
            items={[
              {
                title: "Премия «100 лицеистов года»",
                description:
                  "Поддержка лучших учеников лицея от меня лично и от выпускников",
                icon: Award,
              },
              {
                title: "Встречи со школьниками",
                description:
                  "Возвращаюсь, провожу встречи с классами, делюсь опытом",
                icon: Users,
              },
              {
                title: "Показ фильма про МФТИ",
                description:
                  "Привёз фильм про МФТИ в родной лицей. 100+ человек на показе",
                icon: Sparkles,
              },
            ]}
          />
        </>
      );

    case "student-council":
      return (
        <>
          <Section eyebrow="Школьный опыт" title="Построил совет старшеклассников в Карелии">
            <p>
              Ещё в Лицее №1 создал и возглавил совет старшеклассников. Мы
              делали школьную жизнь живее: организовывали мероприятия,
              поддерживали младшие классы, защищали интересы старших</p>
            <p>
              Этот опыт научил собирать людей вокруг идеи, делегировать,
              добиваться решений через администрацию. Сейчас помогаю советам
              в других школах</p>
          </Section>

          <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-12 pb-16">
            <ProjectCallToAction
              title="Подробнее во ВКонтакте"
              description="Большой пост про работу совета, фотографии, формат мероприятий и команды"
              buttonLabel="Открыть пост"
              buttonHref="https://vk.ru/wall255030750_342"
              external
            />
          </div>
        </>
      );

    default:
      return null;
  }
}
