# HANDOFF · Сайт-визитка Антона

Документ для передачи в новую Claude-сессию. Здесь всё, что нужно знать, чтобы продолжить работу.

## Где живёт проект

- **Код:** `/Users/anton1/Claude3/projects/_shared/anton-site/`
- **Prod:** https://anton-site-omega.vercel.app
- **Vercel:** аккаунт antonoreshkinptz@gmail.com, проект `anton-site`, авторизация уже сделана (`.vercel/`)
- **Google Drive:** [12_Сайт](https://drive.google.com/drive/folders/1TwefqekaGZVK92avHFDIxNpuJtStE1Je) внутри Oreshkin Business
- **Memory:** `~/.claude/projects/-Users-anton1-Claude3/memory/project_anton_site.md`

## Документы сессии (Google Drive 12_Сайт/01_Документы)

1. Discovery — вопросы и первые ответы Антона
2. ТЗ v1, ТЗ v2 — техническое задание с правками
3. Roadmap v1 — план автономной сборки
4. Утренний brief 2026-05-13 — итоги ночной сессии прототипа
5. Вопросы итерации 2 + План доработки итерация 2

## Технический стек

- Next.js 16 (App Router) + TypeScript + Tailwind v4 + Framer Motion 12 + Lucide React
- Сборщик: webpack (Turbopack 16 крашится FATAL panic, использовать `--webpack`)
- Шрифты: Onest (display), Geist (UI), Inter (fallback) — все с кириллицей через `next/font/google`
- Хостинг: Vercel Hobby (бесплатно)
- Команды:
  ```bash
  npx next dev --webpack       # dev на :3000
  npx next build --webpack     # production build
  ./node_modules/.bin/vercel --prod --yes  # deploy
  ```

## Структура проекта

```
anton-site/
├── HANDOFF.md                      ← этот файл, читать первым
├── CLAUDE.md                       ← гид для Claude-сессий
├── docs/
│   ├── sources.md                  ← все ID Google Drive и доков
│   ├── decisions.md                ← D-001..D-030 архитектурные решения
│   ├── open-questions.md           ← статусы вопросов
│   └── night-session-2026-05-13.md ← лог ночной сборки
├── src/
│   ├── app/
│   │   ├── page.tsx                ← главная (Hero + About + Projects + Media + Community + Contact)
│   │   ├── [slug]/page.tsx         ← динамика для 10 проектов
│   │   ├── layout.tsx              ← root + Onest/Geist/Inter
│   │   ├── globals.css             ← Humble токены через @theme
│   │   ├── opengraph-image.tsx     ← OG генерация
│   │   ├── robots.ts / sitemap.ts / not-found.tsx
│   ├── components/
│   │   ├── sections/               ← 8 секций главной
│   │   ├── page/                   ← ProjectPage + Features + Gallery + CTA + ProjectContent
│   │   ├── forms/ApplicationForm.tsx ← форма с чекбоксами политики
│   │   ├── motion/Reveal.tsx
│   │   └── ui/{Button,Card}.tsx
│   └── lib/{cn.ts,content.ts}      ← вся контент-карта в content.ts
├── public/photos/                  ← все фото
└── assets/screenshots/             ← скриншоты раундов
```

## Контент-карта (content.ts)

Один файл, все строки сайта:
- `SITE` — общие константы
- `NAV` — навигация
- `PROJECTS_COMMERCIAL` (5) — Oreshkin Media Lab, IT-Studio, HR, Менторство, Вендинг
- `PROJECTS_SOCIAL` (5) — Donation, ASSIST+, Forum-group, Lyceum, Student Council
- `FILM_GUESTS` — гости фильма МФТИ
- `MEDIA_CHANNELS` — YouTube/Telegram/Подкаст
- `COMMUNITY` — AGORA, X Forum, Прорыв
- `PARTNERS_FLOATING` — Т-Банк, Сколково, МФТИ
- `PARTNER_HIGHLIGHT` — Физтех Союз
- `FOOTER_PERSONAL_MEDIA` / `FOOTER_PROJECTS`
- `STORY_SHORT` — текст «Обо мне»

Детальный контент каждой проектной страницы — в `src/components/page/ProjectContent.tsx` через `switch(slug)`.

## Утверждённые ключевые решения

- **Стек:** Next.js 16 + webpack + Tailwind v4 + Framer Motion
- **Архитектура:** multipage (главная + 10 проектных страниц), а не одностраничник
- **Дизайн:** Humble (Canvas White, Obsidian, Electric Orange, Onest/Geist)
- **Mobile-first:** 90% трафика с телефона
- **CMS:** Sanity Cloud в планах (нужна почта Ксении)
- **Бронь:** Cal.com бесплатный, типы встреч 15/30/60 без названий
- **Аналитика:** Яндекс.Метрика
- **Домен:** antonoreshkin.ru, регистрируем через Reg.ru
- **Telegram-бот для ошибок:** отдельный чат у Антона, в этой сессии не делаем

## Стиль и табу

- АССИСТ+ всегда заглавными русскими
- Oreshkin Media Lab — на английском
- X Forum (English, не Иксфорум)
- Менторство (не наставничество)
- Ксения, в двух «и» (не «Ксени», не «Ксеня»)
- Слово «инфобизнес» — нигде
- Длинные тире — нигде
- Tone: сдержанный, на «вы», искренний, душевный
- НЕ упоминать: Третьякова, ИРИ, Атлантов, Signal TV, доли, конкретные суммы партнёров
- АССИСТ+ как HR — нет. HR это отдельный коммерческий проект, АССИСТ+ это сообщество (социальное)
- AGORA — только «принимал участие в запуске международного делового клуба»
- Прорыв — «приглашённый гость на слётах»

## Контакты на сайте

- Antoine: `@antonoreshkin`
- Ксения: `@xeniapm` (ассистент, отвечает быстрее)

## Финал статус v2.3 (после аудита 14.05.2026)

✅ Аудит проведён 4-агентной командой (brand + copywriter + tech-lead + photo-search)
✅ 17 текстовых правок применены (длинные тире, «ты»→«вы», понтовые цифры, голос)
✅ Замена 5 обложек на более релевантные (HR, IT-Studio, mentoring, vending, student-council)
✅ Технический пакет P0: мёртвые ссылки, дубль id, OG cyrillic, sitemap, canonical, JSON-LD Person
✅ A11y пакет P1: focus-visible, reduced-motion, Esc для меню, aria-* атрибуты
✅ Создана страница `/privacy` для чекбокса согласия
✅ Bundle: убран Inter (минус один шрифт), `next.config.ts` с AVIF/WebP
✅ Hero на mobile: фото сверху, текст под ним
✅ Контраст electric-orange-text #d63500 для eyebrow-меток (WCAG AA)
✅ Два деплоя на прод (circle 1 + circle 2), оба проверены через curl
✅ Утренний отчёт: `docs/audit-2026-05-14/MORNING_REPORT.html` — 6 открытых вопросов для Антона
✅ Скриншоты 3 раунда (desktop+mobile): `assets/screenshots/audit-2026-05-14/round{1,2,3}/`

## Финал статус v2.2

✅ 10 проектных страниц `/medialab /it-studio /hr /mentoring /vending /donation /assist /forum-group /lyceum /student-council`
✅ Главная с порядком Hero → About → Commercial → Social → Media → Community → Contact
✅ Top Bar: Коммерческие → Социальные → Медиа → Обо мне → Связаться + Запланировать звонок
✅ Кнопка «К проектам» на проектной странице ведёт на якорь `/#commercial` или `/#social` (тот блок, откуда ушёл)
✅ Hero: фото Антон Сколково, кнопки в столбик, лого МФТИ+Сколково в floating-карте с pulse
✅ About: фото с водопадом Кивач (исправлено повёрнутое), метрики 21/3 курс/8 млн/10K+ внизу
✅ Media: новый текст «более 10 000 человек следят», партнёры Т-Банк/Сколково/МФТИ в floating
✅ Donation: фото с Виктором Кузнецовым (прислано Антоном)
✅ Forum-group: фото с годового слёта 24.12.2025
✅ Contact: точка убрана, Ксения «ассистент, отвечает быстрее»
✅ Shimmer-анимация для названия Oreshkin Media Lab
✅ Логотип Autonomy AI на IT-Studio cover
✅ Production build verified
✅ Vercel deploy

## Открытые правки (для следующей сессии)

### Контент (нужно от Антона)
1. **Реальные ссылки в чекбоксе политики** — Яндекс.Диск URL с политикой и согласием
2. **Логотип АССИСТ+** — пока используется фото-постер, заменить на лого
3. **IT-Studio cover** — сейчас лого Autonomy AI, нужно отдельное фото для IT-направления
4. **Совет старшеклассников** — фото из VK поста https://vk.ru/wall255030750_342 (там Антон с ~50 людьми)
5. **Сеть вендинга** — фото с реальными кофейными аппаратами (Антон сам у аппарата) — в Telegram есть, нужно найти
6. **100 капибар** — фото с премии в Лицее (Антон обещал найти)
7. **Меньше старшеклассники со школьного выступления** — фото Антона на школьном выступлении
8. **Tизер фильма МФТИ** — YouTube/Vimeo URL для кнопки «Смотреть тизер»
9. **Все участники фильма МФТИ** — раскрыть по умолчанию (не expand), добавить фото каждого
10. **AGORA, X Forum, Прорыв** — реальные логотипы и ссылки на сайты/посты
11. **Физтех Союз** — фото из их сайта для блока партнёрства

### Технические
12. **Регистрация antonoreshkin.ru** через Reg.ru
13. **Cal.com** аккаунт + типы 15/30/60 + embed на /#contact
14. **Sanity CMS** + приглашение Ксении (нужна почта Ксении)
15. **Яндекс.Метрика** счётчик + counter ID
16. **Telegram-бот** для «Сообщить об ошибке» (Антон создаст сам)
17. **Полная реализация анимации солнечного блика** на лого Oreshkin Media Lab (с настоящего сайта)

### UI/UX
18. **Раскрыть всех гостей фильма** на главной с фото каждого, без кнопки «Все участники»
19. **Аватарки YouTube/Telegram/Подкаст** в карточках Media
20. **Логотипы AGORA/X Forum/Прорыв** в социальном капитале
21. **Карточка Физтех Союза** с реальным фото из их сайта

## Как добавить новый проект

1. В `src/lib/content.ts` добавить запись в `PROJECTS_COMMERCIAL` или `PROJECTS_SOCIAL`:
   ```ts
   { id, slug, category, name, tag, short, long, cover, badge? }
   ```
2. В `src/app/[slug]/page.tsx` → объект `FORM_BY_PROJECT` добавить запись по slug
3. В `src/components/page/ProjectContent.tsx` → новый `case` в switch с детальным контентом
4. Положить cover-фото в `public/photos/`
5. Build → deploy (всё автоматически: главная подхватит карточку, страница `/<slug>` создастся)

## Как поднять dev и проверить

```bash
cd /Users/anton1/Claude3/projects/_shared/anton-site
PORT=3010 npx next dev --webpack
# http://localhost:3010
```

## Как задеплоить

```bash
cd /Users/anton1/Claude3/projects/_shared/anton-site
npx next build --webpack
./node_modules/.bin/vercel --prod --yes
```

URL автоматически останется тот же: https://anton-site-omega.vercel.app

## Что НЕ трогать

- `node_modules/`, `.next/`
- `public/photos/*` без подтверждения (это финальные фото)
- `package.json` без необходимости
- `.vercel/` (там auth и project ID)

## Запрещено в проекте

- Раскладывать секреты в код
- Удалять Vercel project
- Удалять Yandex Disk структуру
- Менять `anton-site-omega.vercel.app` без согласования (это публичная ссылка)
