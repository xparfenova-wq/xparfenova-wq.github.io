# 01. Технический аудит сайта anton-site

> Документ для Ксении Парфёновой. Снимок состояния на 2026-05-17, прицел развития 6-12 месяцев.
> Источники: HANDOFF.md, CLAUDE.md, AGENTS.md, README.md, package.json, конфиги, весь `src/`, docs/decisions.md (D-001..D-030), docs/night-session-2026-05-13.md, docs/audit-2026-05-14/MORNING_REPORT.html, .claude/skills/frontend-design/SKILL.md, agents/reglaments/design/visual_design_system.md.

---

## ЧАСТЬ A. Текущее состояние

### A.1. Технологический стек с версиями

| Слой | Технология | Версия | Где задана | Комментарий |
|---|---|---|---|---|
| Фреймворк | Next.js | 16.2.6 | package.json:15 | App Router, Server Components по умолчанию |
| Runtime | React | 19.2.4 | package.json:16-17 | React 19 server components, новый use() hook |
| Язык | TypeScript | ^5 | package.json:28 | strict mode, target ES2017 |
| CSS | Tailwind CSS | ^4 (через `@tailwindcss/postcss` ^4) | package.json:21,27 | v4 c `@theme` директивой в globals.css |
| Анимация | Framer Motion | ^12.38.0 | package.json:13 | scroll-triggered fades, `useReducedMotion` |
| Иконки | lucide-react | ^1.14.0 | package.json:14 | outline-only, lightweight |
| Утилиты CSS | clsx | ^2.1.1 | package.json:12 | через `@/lib/cn` |
| Утилиты CSS | tailwind-merge | ^3.6.0 | package.json:18 | через `@/lib/cn` |
| Линтер | ESLint | ^9 | package.json:25 | flat config через `defineConfig` |
| Линт-пресет | eslint-config-next | 16.2.6 | package.json:26 | core-web-vitals + typescript |
| Деплой CLI | vercel | ^54.0.0 | package.json:29 | локальный бинарник |
| Шрифты | Onest (display) | next/font/google | layout.tsx:2,5-10 | weights 400/500/600/700, латиница + кириллица |
| Шрифты | Geist (UI) | next/font/google | layout.tsx:2,12-17 | weights 400/500/600 |
| Хостинг | Vercel Hobby | бесплатно | `.vercel/` (auth) | домен пока `anton-site-omega.vercel.app` |
| Сборщик dev | webpack | принудительно через `--webpack` | package.json:7 + HANDOFF.md:25-32 | Turbopack 16 крашится с FATAL panic |

Notable: `package.json` content одновременно говорит `"dev": "next dev"`, а HANDOFF.md и night-session-2026-05-13.md велят запускать с флагом `--webpack`. Это рассинхрон — скрипт нужно дополнить флагом или хотя бы зафиксировать в README.

### A.2. Архитектура приложения

| Что | Где | Описание |
|---|---|---|
| Корневой layout | `src/app/layout.tsx` | `<html lang="ru">`, два next/font переменных шрифта, JSON-LD Person в `<script>`, metadataBase = `https://antonoreshkin.ru`, alternates.canonical = `/` |
| Главная | `src/app/page.tsx` | Композиция секций: Nav → Hero → About → CommercialProjects → SocialProjects → Media → Community → Contact → Footer |
| Динамика проектов | `src/app/[slug]/page.tsx` | 10 страниц по slug через `generateStaticParams`. Источник списка `ALL_PROJECTS` из `lib/content.ts`. Маппинг slug → конфиг формы в `FORM_BY_PROJECT` |
| Politika privacy | `src/app/privacy/page.tsx` | Статическая страница согласия (создана в аудите 14.05) |
| 404 | `src/app/not-found.tsx` | Кастомная страница в стилистике сайта |
| Sitemap | `src/app/sitemap.ts` | **Сейчас только корень `https://antonoreshkin.ru`** с priority 1. Не включает 10 динамических проектных страниц — это противоречит utрому отчёту, где сказано «sitemap включает все 11 страниц» |
| robots.txt | `src/app/robots.ts` | `allow: /`, ссылка на `/sitemap.xml` |
| OG-картинка | `src/app/opengraph-image.tsx` | Edge runtime, динамическая 1200×630 PNG, грузит Onest 500/600 с Google Fonts через fetch на каждый запрос |
| favicon | `src/app/favicon.ico` | Стандартный |

**Маршруты при сборке:** `/`, `/[slug]` (10 шт), `/privacy`, `/_not-found`, `/sitemap.xml`, `/robots.txt`, `/opengraph-image`. Итого 16 routes.

**Шрифты через `next/font`:**
- `Onest` → CSS-переменная `--font-bricolage` (имя осталось от ранней версии с Bricolage Grotesque)
- `Geist` → `--font-geist`
- Inter удалён в аудите 14.05 как неиспользуемый

В `globals.css:20-21` переменные шрифтов мапятся на `--font-display` и `--font-sans` для Tailwind v4.

### A.3. Секции главной страницы

| # | Файл | Состояние | Краткое описание |
|---|---|---|---|
| 1 | `src/components/sections/Nav.tsx` | готово | sticky, blur 85% при скролле, мобильное меню с aria-expanded, Esc-закрытие, монограмма с обложкой |
| 2 | `src/components/sections/Hero.tsx` | готово, ждёт чистого портрета | имя + caption + 5 CTA-кнопок (4 якоря + Cal.com), фото 4:5 с floating-картой логотипов МФТИ + Сколково |
| 3 | `src/components/sections/About.tsx` | готово | фото водопад Кивач + сторителлинг STORY_SHORT + 3 метрики (21/3 курс/8 млн ₽) |
| 4 | `src/components/sections/ProjectsOverview.tsx` | готово, 5+5 карточек | два экспорта: CommercialProjects (id=#commercial), SocialProjects (id=#social, фон ghost-white) |
| 5 | `src/components/sections/Media.tsx` | готово, без аватарок YouTube/Telegram/подкаст | 3 канала + film-poster блок (тёмный, 11 гостей с GuestAvatar) + блок премьеры (3 метрики + 4 фото) |
| 6 | `src/components/sections/Community.tsx` | placeholder для AGORA/X Forum/Прорыв | 3 круга с буквами A/X/П + карточка Физтех Союза с буквой Ф |
| 7 | `src/components/sections/Contact.tsx` | работает, Cal.com URL временный | тёмный rounded-[48px] блок, 3 типа встреч Cal.com (15/30/60), 2 Telegram-кнопки |
| 8 | `src/components/sections/Footer.tsx` | готово | 4 колонки: бренд / Личные медиа / Проекты / Связаться + копирайт |

### A.4. Проектные страницы (10 шт через `[slug]/page.tsx`)

| slug | Категория | Состояние контента | Форма (intent) | Cover |
|---|---|---|---|---|
| medialab | commercial | полный контент в ProjectContent.tsx:69-135 | project «Обсудить съёмку» | film-premiere.jpg |
| it-studio | commercial | полный контент 136-206 | consultation «Обсудить разработку» | portrait-1.jpg (требует фото команды) |
| hr | commercial | полный контент 207-276 | consultation «Найти сотрудника» | portrait-2.jpg (требует фото переговоров) |
| mentoring | commercial | полный контент 277-329 | application «Заявка на менторскую программу» | portrait-3.jpg (требует фото консультации) |
| vending | commercial | полный контент 330-370, badge «Продаётся» | partnership «Запрос по сети аппаратов» | about-waterfall.jpg (placeholder, требует фото аппарата) |
| donation | social | полный контент 371-425 | partnership «Присоединиться к проекту» | donation-kuznetsov.jpg |
| assist | social | полный контент 426-478 | application «Заявка в сообщество» | assist-plus.jpg |
| forum-group | social | полный контент 479-519 | application «Заявка в Форум-группу» | forum-group-2025.jpg |
| lyceum | social | полный контент 520-560 | volunteer «Поддержать инициативу» | lyceum-mecenat.jpg |
| student-council | social | полный контент 561-592 | consultation «Расспросить про опыт» | film-karelia-lyceum.jpg |

Все 10 страниц рендерятся через общий `ProjectPage` (`src/components/page/ProjectPage.tsx`): hero c breadcrumb и заголовком, основной контент через `ProjectContent` со switch по slug, опциональный secondary-блок, в конце — `ApplicationForm`.

### A.5. Контент-карта (`src/lib/content.ts`, 313 строк, 17 экспортов)

| Экспорт | Тип | Назначение |
|---|---|---|
| `SITE` | object | ownerName, age=21, city, education, tg.anton/xenia, bookCallUrl, calUsername, cal.base + cal.types[15/30/60], grantVideoUrl, filmFullUrl, pinnedPostUrl, mediaLabExternalUrl |
| `NAV` | array[5] | label+href пары для меню |
| `HERO_LOGOS` | array[2] | МФТИ + Сколково с путём логотипа |
| `Project` | type | id/slug/category/name/tag/short/long/cover/badge |
| `PROJECTS_COMMERCIAL` | array[5] | medialab, it-studio, hr, mentoring, vending |
| `PROJECTS_SOCIAL` | array[5] | donation, assist, forum-group, lyceum, student-council |
| `ALL_PROJECTS` | array[10] | конкатенация двух массивов |
| `FilmGuest` | type | name/role/photo |
| `FILM_GUESTS` | object | all[10] + company «XPANCEO» + premiere{audience, place, organized, details[]} |
| `PREMIERE_GALLERY` | array[4] | src+alt пары для галереи премьеры |
| `MEDIA_CHANNELS` | array[3] | YouTube/Telegram/Подкаст с kind/name/handle/subs/href |
| `STORY_SHORT` | object | title + body (про Карелию/МФТИ/грант) |
| `COMMUNITY` | array[3] | AGORA, X Forum, Бизнес-клуб «Прорыв» с role |
| `PARTNERS_FLOATING` | array[2] | Т-Банк, Сколково с logo |
| `PARTNER_HIGHLIGHT` | object | Физтех Союз с url |
| `FOOTER_PERSONAL_MEDIA` | array[5] | YouTube/TG/Instagram/VK/подкаст с href |
| `FOOTER_PROJECTS` | array[4] | проекты для футера |

Все строки сайта живут в одном файле. Это плюс для миграции в CMS (один маппинг) и минус для DX программиста (591 строка в одном файле, но содержимое не код, а данные).

### A.6. Принятые решения D-001..D-030

| ID | Кратко | Дата |
|---|---|---|
| D-001 | Стек Next.js 16 + TS + Tailwind v4 + Framer Motion 12 | 2026-05-12 |
| D-002 | Дизайн-система Humble — Precise White Lab | 2026-05-12 |
| D-003 | Одностраничник с длинной прокруткой и якорями (позже стал multipage 11 страниц) | 2026-05-12 |
| D-004 | Порядок секций Hero → проекты-обзор → сторителлинг → медиа → детали → партнёры → контакт | 2026-05-12 |
| D-005 | Две категории проектов: Коммерческие + Социальные | 2026-05-12 |
| D-006 | Mobile-first от 375px | 2026-05-12 |
| D-007 | CMS Sanity (предварительно, ждал ТЗ) | 2026-05-12 |
| D-008 | Бронь встреч через Cal.com (предварительно) | 2026-05-12 |
| D-009 | Хостинг Vercel Hobby | 2026-05-12 |
| D-010 | Аналитика Яндекс.Метрика | 2026-05-12 |
| D-011 | Локация проекта в `~/Claude3/projects/_shared/anton-site/` | 2026-05-12 |
| D-012 | Структура Google Drive 12_Сайт с 6 подпапками | 2026-05-12 |
| D-013 | Telegram-контакты `@antonoreshkin` + `@xeniapm` | 2026-05-13 |
| D-014 | Cal.com бесплатный план | 2026-05-13 |
| D-015 | Sanity Cloud бесплатный план до 3 редакторов | 2026-05-13 |
| D-016 | Домен — сначала спросить Сашу Агафонова, потом регистратор | 2026-05-13 |
| D-017 | Слово «курс» снова разрешено | 2026-05-13 |
| D-018 | Vending = «Сеть вендинговых кофейных аппаратов в Петрозаводске» | 2026-05-13 |
| D-019 | Гости фильма МФТИ — 9 человек (первая версия) | 2026-05-13 |
| D-020 | Монограмма «АО» + подпись «Антон Орешкин» | 2026-05-13 |
| D-021 | «Сообщить об ошибке» через Telegram-бот, токен в env | 2026-05-13 |
| D-022 | Footer = Личные медиа + Проекты | 2026-05-13 |
| D-023 | Промежуточные демо через mp4-кружки в Telegram | 2026-05-13 |
| D-024 | Сначала Антон, потом Ксения. Никиту не подключаем | 2026-05-13 |
| D-025 | Англо-версия через ~30 дней после старта | 2026-05-13 |
| D-026 | Основной домен `antonoreshkin.ru`, опционально `oreshkin.me` зеркало | 2026-05-13 |
| D-027 | Гости фильма МФТИ — финал 11 человек + XPANCEO | 2026-05-13 |
| D-028 | Фото-стратегия: прототип на placeholder → фото-бриф → Антон присылает | 2026-05-13 |
| D-029 | Cal.com настраиваю сам, fallback Calendly Basic | 2026-05-13 |
| D-030 | Максимальная автономность. Я веду всё, Антон даёт фидбек | 2026-05-13 |

### A.7. Что критично не трогать (тех-долг и подводные камни)

| Узкое место | Где описано | Что делать |
|---|---|---|
| Turbopack 16 крашится с FATAL panic | HANDOFF.md:25-32, night-session-2026-05-13.md:48-50 | Запускать только `next dev --webpack` и `next build --webpack`. Ждать Next 16.3 |
| CSS-переменная шрифта называется `--font-bricolage`, а шрифт Onest | layout.tsx:6 | Не переименовывать без полного grep по `var(--font-bricolage)` и `--font-display` |
| Cal.com URL содержит кириллицу `антон-орешкин-sw75hx` | content.ts:13 | Это валидный IDN URL, но в JSX надо проверить encodeURI перед отправкой |
| Sanity ещё не подключён, тексты захардкожены в content.ts | night-session-2026-05-13.md:120 | Перенос на Sanity потребует миграции массивов в схемы (см. B.1) |
| Vercel project ID и auth-токен лежат в `.vercel/` | HANDOFF.md:209 | Не коммитить, не удалять. Привязан к аккаунту antonoreshkinptz@gmail.com |
| Дубль id «contact» уже исправлен (форма стала `#application`) | MORNING_REPORT.html:146 | Не повторять ошибку при добавлении новых форм |
| Sitemap фактически содержит только корень | sitemap.ts:1-12 | В аудит 14.05 написано «все 11 страниц», но в коде их нет — это P0-расхождение (см. C.2) |
| `console.log` в форме `ApplicationForm.tsx:145` | ApplicationForm.tsx:130-147 | Форма ничего не отправляет, только пишет в консоль и показывает «Спасибо». До прода нужен бэкенд (см. B.7) |
| OG-картинка тянет шрифт с Google Fonts на каждый запрос | opengraph-image.tsx:8-22 | Edge runtime холодный старт ~500мс. После прод-нагрузки рассмотреть локальный шрифт-файл в `assets/` |

### A.8. Что подключено технически

| Категория | Что есть | Где |
|---|---|---|
| SEO base | metadataBase + canonical + title/description + keywords + Twitter + OG | layout.tsx:19-52, [slug]/page.tsx:15-40 |
| SEO structured | JSON-LD Person с alumniOf МФТИ+Сколково, sameAs соцсети | layout.tsx:54-90 |
| SEO crawl | robots.ts с allow:/ и sitemap-ссылкой | robots.ts |
| SEO discovery | sitemap.ts (только корень — расхождение!) | sitemap.ts |
| SEO Open Graph | Edge runtime генератор OG 1200×630 с Onest 500/600 | opengraph-image.tsx |
| Шрифты | next/font/google c subsets=[latin, latin-ext, cyrillic], display=swap | layout.tsx:5-17 |
| Accessibility | focus-visible (orange outline 2px), `prefers-reduced-motion`, Esc-закрытие мобильного меню, aria-expanded, aria-controls, aria-label | globals.css:108-131, Nav.tsx:20-27,82-95, Reveal.tsx:31-37 |
| Image optimization | next.config.ts: formats=[avif, webp], poweredByHeader=false, compress=true | next.config.ts:1-9 |
| Image responsive | `<Image fill sizes="...">` во всех секциях | Hero/About/Media/Cards |
| Privacy | `/privacy` страница, чекбокс с required в форме | ApplicationForm.tsx:254-270, app/privacy/page.tsx |
| Form UX | Field component с required-маркером, sr-only checkbox, Reveal-анимация, состояние submitted | ApplicationForm.tsx |
| Animation | Framer Motion с `useReducedMotion` guard, scroll-triggered fades, staggered reveals | Reveal.tsx, sections/* |
| Smooth scroll | `scroll-behavior: smooth` (только при `focus-within`, уважает reduced-motion), `scroll-padding-top: 80px` | globals.css:82-90 |
| Custom 404 | `not-found.tsx` в стиле сайта | app/not-found.tsx |

### A.9. Что НЕ подключено (стандартный фронт-2026)

| Категория | Что отсутствует | Импакт |
|---|---|---|
| CMS | Sanity не подключён, тексты в content.ts | Ксения не может править контент без программиста |
| i18n | Нет ни next-intl, ни next-i18next, нет route prefix `/en/` | Англо-версия (D-025) откладывается до отдельной задачи |
| Analytics | Нет Яндекс.Метрики, нет Vercel Analytics, нет Web Vitals API | Не видим конверсии, не видим источники, не видим производительность у реальных пользователей |
| Error tracking | Нет Sentry, нет LogRocket, нет Vercel Speed Insights | Ошибки в проде остаются невидимыми |
| Form backend | `console.log`-заглушка, нет API route, нет Telegram-бота для пересылки | Заявки никуда не уходят |
| Cal.com integration | URL захардкожен в content.ts, нет real embed | Кнопка ведёт на сайт Cal.com внешним переходом |
| Tests | Нет unit (Vitest/Jest), нет e2e (Playwright), нет visual regression | Регрессии при правках Ксения сама обнаружит только глазами |
| CI/CD | Нет GitHub Actions, нет Lighthouse CI, нет preview-deployments per PR (Vercel делает только на main push) | Проверка только локально |
| Storybook | Нет каталога компонентов | Ксения не сможет визуально понять, какие компоненты есть |
| Security headers | Нет CSP, нет HSTS, нет X-Frame-Options, нет Permissions-Policy | Только дефолты Vercel |
| Dependabot/Renovate | Не настроен | Зависимости устаревают молча |
| Monitoring uptime | Нет UptimeRobot / BetterStack | Падение Vercel мы узнаем от Антона |
| A/B testing | Нет инфраструктуры | Гипотезы про CTA непроверяемы |
| Search Console | Не подключён | Не видим, по каким запросам приходят |
| Yandex Webmaster | Не подключён | Не видим индексацию Яндексом |

---

## ЧАСТЬ B. План развития на 6-12 месяцев

### B.1. CMS-интеграция Sanity

**Цель:** Ксения наполняет и правит контент без программиста.

**Схемы Sanity (минимум 6):**

| Схема | Поля | Маппинг на content.ts |
|---|---|---|
| `siteSettings` | ownerName, age, city, education, tg.anton, tg.xenia, calBase, calTypes[], grantVideoUrl, filmFullUrl, pinnedPostUrl, mediaLabExternalUrl | замещает `SITE` |
| `project` | id, slug, category (select: commercial/social), name, tag, short, long, cover (image), badge (optional), order (number), formIntent, formTitle, formSubtitle | замещает `PROJECTS_COMMERCIAL` + `PROJECTS_SOCIAL` + `FORM_BY_PROJECT` |
| `projectPage` | project (reference), eyebrow, title, sections (array of portable-text blocks + feature-blocks + gallery-blocks) | замещает switch в `ProjectContent.tsx` |
| `filmGuest` | name, role, photo (image), order | замещает `FILM_GUESTS.all` |
| `mediaChannel` | kind, name, handle, subs, href, icon | замещает `MEDIA_CHANNELS` |
| `partner` | name, role, logo, url, kind (floating/highlight/community), order | замещает `PARTNERS_FLOATING` + `PARTNER_HIGHLIGHT` + `COMMUNITY` |
| `story` | title, body (portable text) | замещает `STORY_SHORT` |
| `navLink` | label, href, order | замещает `NAV` |
| `footerLink` | label, href, group (personalMedia/projects/contact), order | замещает `FOOTER_*` |

**Шаги интеграции (5 PR, ~3 дня программиста):**

1. `npx sanity@latest init` → studio в `/studio/` (отдельная subroute или отдельный репо)
2. Описать схемы (TypeScript Sanity v3 schema files)
3. Сделать миграционный скрипт `scripts/seed-from-content.ts`, который читает текущий `content.ts` и заливает данные в Sanity через `@sanity/client`
4. Заменить импорты из `@/lib/content` на server-side fetch через GROQ + добавить `revalidate: 60` или ISR
5. Подключить Draft Mode и Preview через Next.js Draft Mode API + Sanity Presentation tool

**Preview/Draft mode:**
- В Sanity Studio добавить Presentation tool с `previewUrl = /api/draft`
- API route `/api/draft/route.ts` ставит draftMode cookie и редиректит на /[slug]
- На странице проверяем `draftMode().isEnabled` и переключаем GROQ-запрос на `previewDrafts`

**Доступ:**
- Free plan: 3 пользователя, 10K документов, 100K API requests/мес. Хватит.
- Пригласить Ксению с ролью Editor по email
- Антон — Administrator

**Webhook:**
- Sanity вебхук → Vercel `/api/revalidate` с секретом → `revalidatePath('/')` + `revalidatePath('/[slug]', 'layout')`
- Альтернатива: tag-based с `revalidateTag` для гранулярного обновления

### B.2. Англо-версия (i18n)

| Подход | Плюсы | Минусы | Рекомендация |
|---|---|---|---|
| `next-intl` v3 | Native Next.js 16 App Router, type-safe, server-component first, малый bundle | Нужно структурировать `/[locale]/page.tsx` | **Да** |
| `next-i18next` | Знакомо разработчикам | Не оптимизирован под App Router, deprecated в favor of next-intl | Нет |
| Sanity i18n (Internationalized Array plugin) | Один источник, переключение поля per locale | Требует переписать схемы | Использовать вместе с next-intl |

**Маршрутизация:**
- Структура `src/app/[locale]/...` где locale = `ru` (дефолт) | `en`
- middleware на корне для определения локали (Accept-Language → cookie → URL)
- canonical URL разные для `ru` и `en`
- `hreflang` теги в `<head>` через `alternates.languages` в `generateMetadata`

**Что переводить:**
- Все строки из content.ts (через Sanity — отдельное поле для каждой локали)
- microcopy в компонентах (вынести в messages/ru.json + messages/en.json через next-intl)
- Метаданные `title`/`description` (через `generateMetadata` per locale)

**Gotchas:**
- Cal.com URL `антон-орешкин-sw75hx` — кириллический slug плохо читается на en-версии. Создать второй Cal.com username `anton-oreshkin` и подменять по локали.
- Дата в JSON-LD — оставить ISO, не переводить.
- OG-картинка — отдельная версия `opengraph-image.tsx` для `/en/`. Через App Router это просто `src/app/[locale]/opengraph-image.tsx` с условиями.

### B.3. SEO-зрелость

| Что | Текущее | Целевое | Действие |
|---|---|---|---|
| JSON-LD Person | есть (`alumniOf`, `sameAs`) | расширить полями `worksFor`, `award`, `email`, `birthDate`, `nationality` | Edit layout.tsx:54-90 |
| JSON-LD Organization | нет | Добавить отдельные узлы для `Oreshkin Media Lab`, `Автономии AI`, `АССИСТ+` | Новый файл `src/lib/jsonld.ts` |
| JSON-LD CreativeWork | нет | Для каждой проектной страницы — `Project` или `Service` с `provider` | В `[slug]/page.tsx` через `<script type="application/ld+json">` |
| title/description | один шаблон | per-page через `generateMetadata` | Уже частично есть, дописать для `/privacy` |
| canonical | есть | оставить, добавить для `/[locale]/...` после i18n | — |
| hreflang | нет | `alternates.languages` для ru+en | После B.2 |
| OG/Twitter cards | один шаблон | per-page динамический OG: в `[slug]/opengraph-image.tsx` | Скопировать opengraph-image.tsx внутрь `[slug]/` |
| sitemap.xml | только корень | Все 11 страниц + `/privacy` + lastmod из Sanity `_updatedAt` | Переписать `sitemap.ts` через `await client.fetch()` |
| robots.txt | allow all | дописать `disallow: /api/`, `disallow: /studio/` после Sanity | Edit `robots.ts` |
| Yandex Webmaster | нет | Подтвердить домен, отправить sitemap, настроить уведомления | После регистрации `antonoreshkin.ru` |
| Google Search Console | нет | То же самое, plus core web vitals report | После запуска прода |
| Bing Webmaster | опционально | Если en-версия станет приоритетом | Через 30+ дней |

### B.4. Performance

**Цели Lighthouse (на мобильнике Moto G4 3G):**

| Метрика | Целевое | Критическое |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | < 4s |
| CLS (Cumulative Layout Shift) | < 0.1 | < 0.25 |
| INP (Interaction to Next Paint) | < 200ms | < 500ms |
| FCP (First Contentful Paint) | < 1.8s | < 3s |
| TBT (Total Blocking Time) | < 200ms | < 600ms |

**Image policies:**
- Все `<Image>` уже с `fill` и `sizes` — оставить
- Hero portrait сейчас `priority` (хорошо) и `sizes="(max-width: 1024px) 100vw, 50vw"`
- Все остальные использовать lazy (default) — уже так
- Подключить `placeholder="blur"` для крупных hero и обложек проектов — нужны blurDataURL (либо `getPlaiceholder`, либо Sanity автоматически)

**Что мониторить чем:**

| Инструмент | Что измеряет | Цена | Рекомендация |
|---|---|---|---|
| Vercel Speed Insights | Real User Monitoring Web Vitals | Hobby: 10K events/мес бесплатно | **Да, сразу** |
| Vercel Web Analytics | Просмотры, страны, источники | Hobby: 2.5K events/мес | **Да** |
| Lighthouse CI | Bench-режим перед деплоем | бесплатно (через GitHub Actions) | Через 30 дней (после B.13) |
| Яндекс.Метрика | RUM, heatmap, сессии | бесплатно | **Да, по D-010** |
| Web Vitals API (своя реализация) | Кастомные ивенты + отправка в Метрику | бесплатно | Опционально |

### B.5. Error tracking

| Инструмент | Плюсы | Минусы | Цена |
|---|---|---|---|
| Sentry | Лучший stack trace, source maps, performance | Дорого после free tier, перегружено фичами | Free: 5K errors/мес. Team: $26/мес |
| LogRocket | Видео-replay сессий | Privacy concerns (GDPR), дорого | Free: 1K sessions/мес. Pro: $99/мес |
| Vercel Speed Insights | Только performance, не error reporting | Не ловит JS errors | Free для Hobby |
| Highlight.io | Open-source альтернатива LogRocket | Молодой, меньше интеграций | Free: 500 sessions/мес |
| Datadog RUM | Энтерпрайз-уровень | Сложная настройка, дорого | Не нужно |

**Рекомендация:** Sentry free tier на старте. Алерты:
- Любая ошибка с rate > 0.5% сессий — Telegram-уведомление Антону
- p95 INP > 500ms на главной — еженедельная сводка Антону+Ксении
- 500-ошибки на API routes (после B.7) — мгновенно в Telegram

### B.6. Аналитика — Яндекс.Метрика

**Установка:**
- Получить counter ID (Антон создаёт на metrika.yandex.ru)
- Добавить counter в `<head>` через next/script с `strategy="afterInteractive"`
- Включить webvisor (записи сессий)
- Включить карту скроллинга и кликов

**События:**

| Событие | Триггер | Куда из кода |
|---|---|---|
| `booking_click` | клик по Cal.com (любой тип 15/30/60) | Contact.tsx + Hero.tsx CTA |
| `booking_15`/`30`/`60` | Клик по конкретной длительности | Contact.tsx с param |
| `telegram_click_anton` / `telegram_click_xenia` | Клик по @antonoreshkin / @xeniapm | Contact.tsx, Footer.tsx |
| `form_open` | первый focus в любое поле формы | ApplicationForm.tsx |
| `form_submit` | успешный submit с privacyAccepted | ApplicationForm.tsx:145 |
| `project_view` | переход на /[slug] | [slug]/page.tsx через `useEffect` |
| `project_card_click` | клик по карточке на главной | ProjectsOverview.tsx ProjectCard |
| `scroll_depth_50` / `75` / `100` | через IntersectionObserver на footer | Footer.tsx |
| `media_click` | клик по YouTube/TG/подкаст карточкам | Media.tsx |

**Цели и конверсии:**

| Цель | Тип | Что считаем |
|---|---|---|
| Бронь | составная: `booking_click` → клик в Cal.com iframe | Микро-конверсия |
| Заявка | `form_submit` | Главная конверсия |
| Telegram | `telegram_click_*` | Запасная конверсия |

**UTM-схема:**
- `utm_source=telegram&utm_medium=channel&utm_campaign=post_<id>` — посты Антона
- `utm_source=telegram&utm_medium=ksenia&utm_campaign=<event>` — Ксения личные сообщения
- `utm_source=instagram&utm_medium=bio` — bio-link
- `utm_source=youtube&utm_medium=video_desc&utm_campaign=<video_id>` — описания видео

### B.7. Forms — бэкенд для ApplicationForm

**Сейчас:** `ApplicationForm.tsx:130-147` пишет в `console.log` и показывает «Спасибо». Антон не получает заявку.

**Варианты:**

| Стек | Плюсы | Минусы | Рекомендация |
|---|---|---|---|
| Vercel Functions + Telegram Bot API | Бесплатно, мгновенно, Антону в Telegram | Нужен бот, токен в env | **Да** |
| Formspree | 50 submissions/мес бесплатно | После лимита платить | Альтернатива на старте |
| Resend (email) | API для писем | Антон проверяет почту реже Telegram | Дополнительно |
| Vercel Functions → Google Sheets | Структурированная база | Сложнее настроить | Для архива заявок |
| Vercel Functions → Notion | Ксения видит в Notion | Notion API rate limit | Альтернатива |

**Рекомендуемая архитектура:**

1. Vercel Function `/api/application/route.ts`:
   ```
   POST /api/application
   body: ApplicationFormData
   - validate with Zod
   - rate limit (Vercel KV: 5 requests/IP/час)
   - anti-spam (Turnstile token validation)
   - send to Telegram bot (chat_id = Антон + Ксения)
   - append row to Google Sheet через service account
   ```

2. Telegram-бот (отдельный, не Буковица):
   - Создать через @BotFather → токен в Vercel env `TELEGRAM_FORM_BOT_TOKEN`
   - chat_id Антона — узнать через @userinfobot
   - Шаблон сообщения: name + contact + intent + message + ссылка на источник (какая страница)

3. Anti-spam:
   - Cloudflare Turnstile (бесплатно, лучше hCaptcha)
   - Альтернатива: honeypot field + time-based check (форма открыта < 3 сек = бот)

4. Валидация:
   - Frontend: Zod схема в ApplicationForm.tsx
   - Backend: та же Zod схема на сервере
   - Контактное поле: regex `@\w+` или email

### B.8. Cal.com интеграция

**Текущее:** `SITE.cal.base = "https://cal.com/антон-орешкин-sw75hx"` — внешняя ссылка.

**Варианты embed:**

| Способ | Плюсы | Минусы |
|---|---|---|
| Cal.com inline embed (iframe) | Бесшовно, бронь внутри сайта | iframe лагает на мобильнике, не очень доверчиво для пользователя |
| Cal.com popup (modal) | Лучший UX | Те же iframe-проблемы |
| Cal.com floating button | Виден всегда | Может раздражать |
| Прямая ссылка | Понятно | Уход с сайта |

**Рекомендация:** popup на Cal.com `@calcom/embed-react` v1.5+. Установка:
```
npm install @calcom/embed-react
```
В Contact.tsx — обернуть кнопки в `Cal.PopupTrigger` или вызывать `Cal()` явно.

**UTM прокидывание:**
- Cal.com поддерживает prefill через URL params: `?email=&name=&notes=`
- Также `utm_source`, `utm_campaign` сохраняются в metadata booking

**Синхронизация с календарём Антона:**
- Cal.com → Google Calendar (Антон даёт OAuth) или Apple Calendar
- 15-минутный буфер между встречами
- Доступность Mon-Fri 10-19 MSK (Антон уточнит)

**Типы встреч (15/30/60):**
- Создать в Settings → Event Types
- Slug должны совпадать с `SITE.cal.types[].slug`
- Локация — Zoom (автогенерация ссылки) или Google Meet

**Prefill полей:**
- В Contact.tsx добавить ссылки вида `cal.base/15min?name=&notes=`
- После B.6 — прокидывать UTM из текущего URL

### B.9. Yandex Disk политика конфиденциальности

**Текущее:** `/privacy` страница создана в аудите 14.05.

**Что нужно:**

| Документ | Где жить | Где линковать |
|---|---|---|
| Политика обработки персональных данных (152-ФЗ) | `/privacy` | чекбокс в ApplicationForm + footer |
| Согласие на рекламную рассылку | `/privacy#marketing` | второй чекбокс формы |
| Cookie policy | `/cookies` (новая страница) | баннер cookie + footer |
| Пользовательское соглашение | `/terms` (опционально) | footer |

**152-ФЗ обязательные блоки:**
1. Оператор (Антон Орешкин, физлицо или ИП — нужно решить)
2. Цели обработки (приём заявок, обратная связь)
3. Перечень ПД (имя, контакт, сообщение, IP-адрес через Метрику)
4. Правовые основания (согласие субъекта по ст.6 ч.1 п.1 152-ФЗ)
5. Срок обработки и условия прекращения
6. Контактный email для запросов на удаление

**Где конкретно хранить:**
- Если на Яндекс.Диске — публичная ссылка на PDF + iframe или просто iframe на свою страницу. Но лучше — внутри сайта на `/privacy` (быстрее, индексируется)
- Подписать электронной подписью (опционально)
- Зарегистрировать оператора ПД в Роскомнадзоре (при работе с >100 субъектов в год)

### B.10. Mobile testing

| Инструмент | Цель | Цена | Рекомендация |
|---|---|---|---|
| Chrome DevTools Device Mode | Быстрая проверка | бесплатно | Для быстрых итераций |
| Playwright + headed | E2E сценарии на проде | бесплатно | **Да** |
| BrowserStack | Реальные устройства iOS/Android | $39/мес | Для финальной проверки перед запуском |
| LambdaTest | То же | $25/мес | Альтернатива BrowserStack |
| Реальный iPhone Антона | Доверие | бесплатно | Обязательно перед прод-деплоем |

**Сценарии для теста:**

1. Hero на iPhone SE (375x667): фото видно, текст не залезает на фото, CTA-кнопки кликабельны без масштабирования
2. Mobile menu открывается, Esc закрывает, клик по якорю закрывает и скроллит
3. Hover-эффекты на карточках не ломаются на touch
4. Скролл якорями `#commercial` / `#social` / `#media` / `#about` / `#contact`
5. Форма заявки: клавиатура не перекрывает поле, autocomplete работает, submit показывает «Спасибо»
6. Cal.com popup открывается, не лагает, можно забронировать
7. Картинки lazy-load: open Network throttle 3G, видим placeholder затем плавная загрузка
8. /[slug] страницы: hero не обрезает заголовок, secondary-блок виден, breadcrumb читается

### B.11. Accessibility WCAG 2.2 AA

**Уже сделано (аудит 14.05):**
- focus-visible orange outline 2px (globals.css:122-131)
- `prefers-reduced-motion` (globals.css:108-115, Reveal.tsx:31-37)
- Esc закрывает мобильное меню
- aria-expanded, aria-controls, aria-label на меню
- Контраст eyebrow-меток #d63500 (WCAG AA, 5.2:1)
- alt-атрибуты на изображениях

**Что доделать:**

| Проблема | Где | Действие |
|---|---|---|
| Skip-to-content link | layout.tsx | Добавить `<a href="#main" class="sr-only focus:not-sr-only">Перейти к контенту</a>` |
| `<main id="main">` для skip-link | page.tsx | Добавить id="main" на `<main>` |
| Контраст текста на тёмном фоне Contact | Contact.tsx text-canvas-white/60 | Проверить через axe — `white/60` = ~rgb(150,150,150) на чёрном — около 4.5:1, на грани |
| Контраст granite-gray (#6e6e6e) на canvas-white (#fafafa) | везде | 4.5:1, ок |
| Screen reader (VoiceOver iPhone) | Все секции | Прогнать сценарий: открытие, навигация, форма, отправка |
| Keyboard navigation | Hero CTA buttons | Проверить Tab-order, Enter активирует |
| Form errors | ApplicationForm.tsx | Сейчас только HTML5 validation. Добавить aria-invalid + aria-describedby + сообщения об ошибках |
| `role` атрибуты | Sections | Каждой секции `<section aria-labelledby="...">` с указанием заголовка |
| Lang attribute switch | После i18n | `<html lang={locale}>` динамически |

**Инструменты:**
- `@axe-core/playwright` в CI (см. B.13)
- Lighthouse Accessibility tab > 95
- Реальный VoiceOver на iPhone Антона
- Контраст: `npm install -g pa11y` для CLI-проверки

### B.12. Security

| Что | Где сделать | Приоритет |
|---|---|---|
| CSP (Content Security Policy) | `next.config.ts` через `headers()` | P1 |
| HSTS (Strict-Transport-Security) | Vercel автоматически + кастомное `max-age=63072000` | P1 |
| X-Frame-Options: DENY | `headers()` в next.config | P2 (CSP frame-ancestors лучше) |
| Permissions-Policy | `headers()` в next.config | P2 |
| Referrer-Policy: strict-origin-when-cross-origin | `headers()` | P2 |
| Vercel env vars (secrets) | Никогда не коммитить, использовать `vercel env add` | P0 (правило) |
| Dependabot | `.github/dependabot.yml` | P1 |
| Renovate (альтернатива) | `renovate.json` | P1 |
| GitHub branch protection | Settings → Branches → main | P1 |
| Code review required | то же | P1 |
| Secret scanning | GitHub Settings → Code security | P0 |

**CSP пример (стартовый):**
```
default-src 'self';
script-src 'self' 'unsafe-inline' https://mc.yandex.ru https://cal.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
img-src 'self' data: https: blob:;
font-src 'self' https://fonts.gstatic.com;
connect-src 'self' https://mc.yandex.ru https://api.telegram.org;
frame-src https://cal.com https://embed.cal.com;
```

### B.13. CI/CD

**Цель:** preview-деплой на каждый PR + блокирующие чек-листы перед main.

**GitHub Actions pipeline:**

| Шаг | Что делает |
|---|---|
| `install` | npm ci с кешем |
| `lint` | `npm run lint` (eslint) |
| `typecheck` | `npx tsc --noEmit` |
| `build` | `npx next build --webpack` |
| `lighthouse-ci` | `@lhci/cli` против preview deploy |
| `axe-a11y` | `@axe-core/playwright` против preview |
| `playwright-e2e` | основные сценарии |
| `visual-regression` | Playwright screenshots + Percy или Chromatic |

**Vercel preview-deploy:**
- Уже работает на каждый push, но не на каждый PR (если main только)
- Включить: Project Settings → Git → Production branch = main, Preview branch = all
- Каждый PR получает свой URL вида `anton-site-omega-pr-<n>.vercel.app`

**Production gate:**
- Settings → Git → Require Vercel deployment to succeed = ON
- В GitHub: Settings → Branches → main → Require status checks: lint, typecheck, build, lighthouse

**Visual regression:**
- Playwright + `@playwright/test` snapshots в `__screenshots__/`
- При diff > 0.5% — failed PR
- Альтернатива: Percy.io ($150/мес) или Chromatic (бесплатно для open source)

### B.14. Тесты

| Уровень | Инструмент | Что покрываем | Цена времени |
|---|---|---|---|
| Unit | Vitest | `src/lib/cn.ts`, `src/lib/content.ts` валидация, утилиты | 1 день |
| Component | React Testing Library + Vitest | ApplicationForm логика валидации, mobile menu open/close | 2 дня |
| Integration | Playwright | бронь Cal.com → редирект, отправка формы → success page, навигация по якорям | 2 дня |
| E2E smoke | Playwright | главная + 10 проектных + privacy + 404 рендерятся без ошибок | 1 день |
| Visual | Playwright snapshots | desktop 1440 + mobile 375 для каждой страницы | 1 день |

**Минимум на старте (1 неделя):**
1. Vitest setup
2. ApplicationForm unit-тест (валидация полей, чекбокс)
3. Playwright smoke по всем 11 страницам (HTTP 200, заголовок есть, не пустая)
4. Playwright visual regression главной mobile+desktop

### B.15. Storybook или альтернатива

**Нужно ли:**
- Для Ксении (контент-редактор) — нет, она работает в Sanity Studio
- Для будущих программистов — да, чтобы быстро понимать систему компонентов

**Альтернативы:**

| Инструмент | Плюсы | Минусы |
|---|---|---|
| Storybook 8 | Стандарт индустрии, autodocs | Тяжёлый, +50MB зависимостей |
| Histoire (Vue, но есть React) | Лёгкий | Малое сообщество React |
| Ladle (от Uber) | Лёгкий, Vite | Меньше фич |
| MDX-страница в `/docs` сайта (`src/app/_internal/components/`) | Просто, не отдельная инфра | Самописное |

**Рекомендация:** Storybook 8 + Chromatic для visual regression. Установить на 90+ день, когда программистов будет 2+.

### B.16. Поддомены и доменная стратегия

| Домен | Назначение | Где зарегистрировать |
|---|---|---|
| `antonoreshkin.ru` | Основной (D-026) | Reg.ru ~200 ₽/год |
| `oreshkin.me` | Зеркало (опционально) | Namecheap ~$12/год |
| `en.antonoreshkin.ru` ИЛИ `/en/` | Англо-версия (D-025) | **Лучше `/en/`** для SEO consolidation |
| `blog.antonoreshkin.ru` | Если появится блог | Тот же DNS |
| `studio.antonoreshkin.ru` | Sanity Studio (опционально) | Тот же DNS |

**Почему `/en/` лучше `en.`:**
- Sub-path: один Vercel project, общий sitemap, общий backlink profile
- Sub-domain: отдельный SEO authority, сложнее настраивать hreflang

**Редиректы:**
- `oreshkin.me` → 301 → `antonoreshkin.ru` (Vercel Domain Settings)
- `www.antonoreshkin.ru` → 301 → `antonoreshkin.ru`

### B.17. Email на домене

**Цель:** `mail@antonoreshkin.ru` для:
- Связь от партнёров (помимо Telegram)
- Отправитель в формах (если перейдём на Resend для email-нотификаций)
- Privacy contact email

**Варианты:**

| Сервис | Цена | Плюсы | Минусы |
|---|---|---|---|
| Яндекс 360 для бизнеса | бесплатно до 3 пользователей | Российская юрисдикция, надёжно | Нужен ИП/юрлицо? Уточнить |
| Google Workspace | $7/мес/пользователь | Удобство, интеграция с Calendar | Не российская юрисдикция |
| Mail.ru для бизнеса | бесплатно | РФ | Меньше доверия |
| Email forwarding (Cloudflare Email Routing) | бесплатно | mail@antonoreshkin.ru → личный gmail | Только пересылка, не отправка |

**Рекомендация на старте:** Cloudflare Email Routing — бесплатно, mail@ и kseniia@ forwarding на личные ящики. Через 90 дней — Яндекс 360 если будет много партнёрской переписки.

### B.18. Telegram-бот «Сообщить об ошибке»

**Состояние:** D-021 решение принято, бот не создан.

**Архитектура:**
1. @BotFather → новый бот `@anton_oreshkin_feedback_bot`
2. Токен → Vercel env `TELEGRAM_FEEDBACK_BOT_TOKEN`
3. Vercel Function `/api/feedback/route.ts`:
   - Принимает POST `{ url, message, userAgent }` 
   - Отправляет в Telegram через bot API → chat_id Антона (и опционально Ксении)
4. Кнопка «Сообщить об ошибке» в Footer.tsx ведёт на модалку с textarea + кнопкой Submit (а не на `#contact` как сейчас)
5. Включить spam-rate-limit (5 reports/IP/час через Vercel KV)

**Если Ксения хочет смотреть отчёты:**
- Бот пишет в группу «Антон + Ксения» (создать в Telegram, добавить бот как админ)
- Или: вебхук в Notion/Sheets

### B.19. Контент-pipeline для нового проекта

**Текущий ручной процесс (HANDOFF.md:175-184):**
1. Запись в `content.ts` в `PROJECTS_COMMERCIAL` или `PROJECTS_SOCIAL`
2. Запись в `FORM_BY_PROJECT` в `[slug]/page.tsx`
3. Новый `case` в switch в `ProjectContent.tsx`
4. Cover-фото в `public/photos/`
5. Build + deploy

**С Sanity (B.1) Ксения делает:**
1. Sanity Studio → New `project` → заполнить поля + загрузить cover
2. New `projectPage` → выбрать project + написать portable text + добавить feature-blocks
3. Опубликовать (или сохранить как draft и проверить через preview)
4. Webhook автоматически revalidate Next.js

**Программист нужен только если:**
- Меняется компонентная структура (новый тип блока в projectPage)
- Новая категория кроме commercial/social
- Изменение формы (новые поля, новый intent)

### B.20. Версионирование

| Что | Где | Как |
|---|---|---|
| Semantic Versioning | package.json `version` | major.minor.patch |
| Git tags | git tag `v1.2.3` | На production release |
| GitHub Releases | gh release create | С changelog markdown |
| Changelog | `CHANGELOG.md` | Keep a Changelog format |
| Sanity content history | Sanity Studio history tab | Автоматически |

**Рекомендация:**
- На каждый production deploy — tag + release
- Conventional Commits для git messages → автогенерация changelog через `release-please`

### B.21. Резервное копирование

| Источник | Как бэкапится | Single Point of Failure |
|---|---|---|
| Код | GitHub (origin/main) | Аккаунт antonoreshkinptz@gmail.com |
| Vercel project config | Vercel UI export нет, нужно фиксировать в `vercel.json` в репо | Аккаунт antonoreshkinptz@gmail.com |
| Sanity content | Sanity автоматически снапшотит, экспорт через `sanity dataset export` | Sanity account |
| Фото | `public/photos/` в репо + Google Drive 12_Сайт | Антон Google account |
| Логотипы партнёров | `public/logos/` в репо | То же |
| OG-картинка | Динамическая, регенерируется | Не нужно |
| ENV vars | Vercel UI + лично у Антона в 1Password/Bitwarden | Vercel account |

**SPOF-риски:**
1. Аккаунт antonoreshkinptz@gmail.com потерян → потеря Vercel + GitHub + Google Drive
2. Sanity отключён → весь контент исчезает (если не делать `sanity dataset export` каждый месяц)
3. Reg.ru банкротство → потеря домена

**Митигация:**
- 2FA на всех аккаунтах
- Backup email — Ксения как admin на Vercel/Sanity
- Cron-job через GitHub Actions: раз в неделю `sanity dataset export production > backups/<date>.tar.gz` → коммит в private репо `anton-site-backups`

---

## ЧАСТЬ C. Открытые вопросы и риски

### C.1. 6 открытых вопросов из MORNING_REPORT 14.05

| # | Вопрос | Кто решает | Влияние |
|---|---|---|---|
| 1 | Submit button — оставить с required-атрибутом или вернуть disabled до галочки? | Антон | UX, низкое |
| 2 | Цифры в Hero/Media — оставить 9000+/2500+/1000+ или убрать? | Антон | Brand voice, среднее |
| 3 | «Курс» в Autonomy AI — оставить или «обучение работе с нейросетями»? | Антон | Tone, низкое |
| 4 | «Продавливать решения через администрацию» — оставить или смягчить? | Антон | Tone, низкое |
| 5 | Метрики в About — три или четыре? | Антон | Дизайн, низкое |
| 6 | AGORA-карточка — оставить или убрать из «Социального капитала»? | Антон | Brand, среднее |

### C.2. 21 правка из HANDOFF — классификация P0/P1/P2

**Контентные правки (нужно от Антона):**

| # | Что | Приоритет | Блокер для |
|---|---|---|---|
| 1 | Реальные ссылки в чекбоксе политики (Яндекс.Диск URL) | P1 | Запуск формы |
| 2 | Логотип АССИСТ+ | P2 | Бренд-консистентность |
| 3 | IT-Studio cover (своё фото, не Autonomy AI лого) | P2 | Бренд |
| 4 | Совет старшеклассников — фото из VK поста | P2 | Контент |
| 5 | Сеть вендинга — фото с реальным аппаратом | P1 | Vending заявки |
| 6 | 100 капибар — фото с премии | P2 | Lyceum |
| 7 | Школьное выступление — фото | P2 | Student council |
| 8 | Тизер фильма МФТИ — YouTube URL | P1 | Media block |
| 9 | Все участники фильма МФТИ — раскрыть, фото каждого | P2 | UI/UX |
| 10 | AGORA / X Forum / Прорыв — реальные логотипы и ссылки | P2 | Community section |
| 11 | Физтех Союз — фото из их сайта | P2 | Partner block |

**Технические правки (программист):**

| # | Что | Приоритет | Сложность |
|---|---|---|---|
| 12 | Регистрация antonoreshkin.ru через Reg.ru | P0 | 1 час |
| 13 | Cal.com аккаунт + типы 15/30/60 + embed | P0 | 4 часа |
| 14 | Sanity CMS + приглашение Ксени (нужна почта) | P0 | 2-3 дня |
| 15 | Яндекс.Метрика counter ID | P0 | 2 часа |
| 16 | Telegram-бот для «Сообщить об ошибке» | P1 | 4 часа |
| 17 | Полная анимация солнечного блика на лого OML | P2 | 1 день |

**UI/UX:**

| # | Что | Приоритет |
|---|---|---|
| 18 | Раскрыть всех гостей фильма с фото | P2 |
| 19 | Аватарки YouTube/Telegram/подкаст | P2 |
| 20 | Логотипы AGORA/X Forum/Прорыв | P2 (зависит от #10) |
| 21 | Карточка Физтех Союза с фото | P2 (зависит от #11) |

**Дополнительный P0 (обнаружен при аудите):**

- **sitemap.ts:** только корень, не включает 10 проектных страниц. В аудите 14.05 написано «sitemap включает все 11 страниц» — это не подтверждается кодом. Нужен фикс:
  ```ts
  import { ALL_PROJECTS } from "@/lib/content";
  export default function sitemap() {
    const base = "https://antonoreshkin.ru";
    return [
      { url: base, lastModified: new Date(), priority: 1 },
      ...ALL_PROJECTS.map(p => ({ url: `${base}/${p.slug}`, lastModified: new Date(), priority: 0.8 })),
      { url: `${base}/privacy`, lastModified: new Date(), priority: 0.3 },
    ];
  }
  ```

- **`package.json` dev/build команды** не имеют `--webpack` флага, при этом HANDOFF и night-session требуют его. При локальном `npm run dev` запустится Turbopack и крашнется. Нужно:
  ```json
  "dev": "next dev --webpack",
  "build": "next build --webpack"
  ```

- **`ApplicationForm.tsx:145`** — `console.log` вместо реальной отправки. Форма работает как UI-демо.

### C.3. Технические долги

| Долг | Источник | Что делать | Когда |
|---|---|---|---|
| Turbopack крашится с FATAL panic | Next 16.2.6 | Ждать Next 16.3+ или 17, ловить changelog | Q3 2026 |
| CSS-переменная `--font-bricolage` называется по старому шрифту | Историческое (Bricolage → Onest) | Глобальный rename в `globals.css` + `layout.tsx` + любые места использования | При следующей значимой правке стилей |
| Inter был удалён, но fallback в CSS-переменной всё ещё ui-sans-serif (ОК) | globals.css:20-21 | Не трогать |
| `ApplicationForm` без бэкенда | До B.7 | Приоритет P0 после регистрации домена |
| Cal.com URL кириллический slug | content.ts:13 | Создать вторую запись для en-локали |
| Sanity не подключён, контент в коде | До B.1 | После запуска ru-версии в проде |
| Нет тестов вообще | До B.14 | После B.1 (CMS), смысла раньше нет |
| Нет error tracking | До B.5 | На запуске прода |
| `[slug]/page.tsx FORM_BY_PROJECT` дублирует данные с content.ts | Архитектура | После B.1: вынести в Sanity `project.formIntent/formTitle/formSubtitle` |
| 10 case-блоков в `ProjectContent.tsx` (591 строка) | Архитектура | После B.1: переписать на portable text из Sanity |

### C.4. Совместимость зависимостей при апдейтах

| Пакет | Текущая | Следующий мажор | Риск апдейта |
|---|---|---|---|
| next | 16.2.6 | 17 (когда выйдет, ~Q4 2026) | High — может сломать App Router |
| react | 19.2.4 | 20 (Q2-Q3 2027) | High — server components evolving |
| tailwindcss | ^4 | 5 | Med — @theme synthax может меняться |
| framer-motion | ^12.38.0 | 13 | Med — useReducedMotion API стабильно |
| lucide-react | ^1.14.0 | — | Low — иконки стабильны |
| typescript | ^5 | 6 | Low |
| eslint | ^9 | 10 | Low |
| @tailwindcss/postcss | ^4 | 5 | Med — должен идти в паре с tailwindcss |

**Стратегия апдейтов:**
- Patch (1.0.x → 1.0.y) — автоматически через Renovate, merge сразу
- Minor (1.0 → 1.1) — Renovate раз в неделю, ручной merge с проверкой preview
- Major — раз в квартал, в отдельной ветке + полный регресс через тесты (после B.14)

### C.5. Что Ксения сможет / не сможет без программиста

**Сможет:**

| Задача | Как |
|---|---|
| Изменить любой текст | Sanity Studio (после B.1) |
| Заменить фото | Sanity Studio (после B.1) |
| Добавить нового гостя фильма | Sanity Studio (после B.1) |
| Изменить порядок проектов | Sanity Studio order-поле (после B.1) |
| Скрыть/показать проект | Sanity Studio published toggle (после B.1) |
| Изменить контакты | Sanity Studio siteSettings (после B.1) |
| Посмотреть статистику посещений | Яндекс.Метрика (после B.6) |
| Получить заявки | Telegram (после B.7) |
| Видеть ошибки | Sentry (после B.5, если дадим доступ) |

**НЕ сможет (нужен программист):**

| Задача | Причина |
|---|---|
| Добавить новую секцию на главную | Структурные изменения в page.tsx |
| Изменить дизайн (цвета, шрифты) | globals.css + Tailwind tokens |
| Создать новый тип проекта (не commercial/social) | Sanity schema + UI |
| Подключить новую CMS / другой backend | Архитектура |
| Англо-версия | i18n routing (B.2) |
| Cal.com изменить типы встреч | Cal.com Settings + content.ts (или Sanity siteSettings) — после B.1 Ксения сможет |
| Поменять домен | DNS + Vercel + SEO миграция |
| Перенести Telegram-бот на другой аккаунт | env vars + bot rotation |

**Делегировать программисту/Claude:**
- Весь Part B пунктов B.1-B.14
- Любые правки в `src/` (кроме content.ts до Sanity)
- DevOps (CI/CD, env vars, security headers)
- Миграции (Sanity, i18n)

---

## Executive Summary (краткое резюме)

Сайт-визитка Антона Орешкина к 17.05.2026 — production-ready прототип на Next.js 16.2.6 + React 19 + Tailwind v4 + Framer Motion 12, развёрнут на Vercel Hobby по адресу `anton-site-omega.vercel.app`. Архитектура — main page + 10 динамических проектных страниц через `[slug]/page.tsx`, вся контент-карта в одном файле `src/lib/content.ts` (313 строк, 17 экспортов). Дизайн-система Humble (Canvas White + Electric Orange + Onest/Geist) применена консистентно, есть базовый SEO (canonical, OG, JSON-LD Person, Twitter cards), accessibility-минимум (focus-visible, reduced-motion, aria-attrs, Esc-закрытие меню) и кастомная OG-картинка на Edge runtime.

При этом сайт **не готов к боевому запуску** без P0-доработок: форма заявки `ApplicationForm.tsx:145` пишет в `console.log` вместо реальной отправки; sitemap содержит только корень, а не 11 страниц (расхождение с MORNING_REPORT); `package.json` запускает Turbopack без флага `--webpack`, что приводит к FATAL panic; кнопка Cal.com ведёт на временный URL; Яндекс.Метрика и Telegram-бот ошибок не подключены; CMS Sanity не интегрирована, поэтому Ксения не может править контент без программиста. Кроме того, отсутствуют error tracking, тесты, CI/CD, dependabot, security headers — стандартный набор фронта-2026.

План развития на 6-12 месяцев разбит на 21 категорию (Part B). Первоочередные задачи: миграция content.ts → Sanity (6 схем, 3 дня), бэкенд формы через Vercel Functions + Telegram Bot API, Cal.com popup-embed, Яндекс.Метрика с 9 событиями и UTM-схемой, sitemap-фикс. Через 30 дней — англо-версия через next-intl с маршрутами `/en/`, Sentry, Vercel Speed Insights. Через 90 дней — Storybook, тесты (Vitest + Playwright + visual regression), GitHub Actions с Lighthouse CI. Через 180 дней — domain consolidation (`antonoreshkin.ru` основной + `oreshkin.me` редирект), email на домене через Cloudflare Email Routing, Yandex Webmaster + Google Search Console.

### ТОП-10 действий приоритета P0

1. **Зарегистрировать `antonoreshkin.ru`** через Reg.ru (200 ₽/год), привязать к Vercel, настроить редирект с www, дождаться SSL.
2. **Починить sitemap.ts** — включить все 10 проектных страниц + `/privacy` через `ALL_PROJECTS.map(...)`, добавить lastModified.
3. **Прописать `--webpack` флаг** в `package.json` scripts `dev` и `build`, чтобы не было крашей при `npm run dev` у любого нового разработчика.
4. **Бэкенд формы:** Vercel Function `/api/application/route.ts` + Telegram-бот через @BotFather + token в env, шлёт заявку Антону и Ксении.
5. **Cal.com интеграция:** установить `@calcom/embed-react`, заменить 3 типа встреч на popup-embed, прокинуть UTM из текущего URL.
6. **Яндекс.Метрика:** Антон создаёт счётчик, программист добавляет код через `next/script` strategy=afterInteractive, настраивает 9 событий и 3 цели.
7. **Sanity CMS:** инициализация studio, 9 схем (siteSettings, project, projectPage, filmGuest, mediaChannel, partner, story, navLink, footerLink), миграционный скрипт из content.ts, draft mode через Next.js Draft Mode API, webhook revalidation.
8. **Sentry error tracking:** регистрация free tier, `@sentry/nextjs` install, source maps в CI, алерт в Telegram при error rate > 0.5%.
9. **Vercel Speed Insights + Web Analytics:** включить в Vercel UI (бесплатно для Hobby), добавить `<SpeedInsights />` и `<Analytics />` в layout.tsx.
10. **Security headers в `next.config.ts`:** добавить CSP, HSTS, Referrer-Policy, X-Content-Type-Options, Permissions-Policy через `headers()` функцию, включить Dependabot в `.github/dependabot.yml`.

Эти 10 действий выполнимы за 5-7 рабочих дней программиста и закрывают критические gaps между прототипом и боевым сайтом.
