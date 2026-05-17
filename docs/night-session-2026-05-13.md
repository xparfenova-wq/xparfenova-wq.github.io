# Ночная сессия — 2026-05-13

Окно: 00:00 → ~04:00 МСК. Прототип сайта из 11 секций с реальным контентом и фото из Telegram-выгрузки. 5 раундов итеративной доработки через Playwright-аудит.

---

## Сводка для утра

**Status:** ✅ Прототип готов, dev-сервер работает, production build проходит.

**Локация:** `/Users/anton1/Claude3/projects/_shared/anton-site/`
**Dev URL:** http://localhost:3010 (нужно поднять: `cd projects/_shared/anton-site && npx next dev --webpack`)

**Production-ready endpoints:**
- `/` — главная (статическая)
- `/opengraph-image` — динамическая OG для шеринга в TG/Twitter
- `/robots.txt`, `/sitemap.xml`
- `/_not-found` — кастомная 404

**Что собрано (11 секций):**
1. Nav (sticky, монограмма АО, primary CTA «Забронировать звонок»)
2. Hero (имя + 21 год + МФТИ × Сколково + 3 CTA + 4 метрики + большое фото)
3. ProjectsOverview (2 категории: 6 коммерческих + 3 социальных, 9 карточек)
4. About (sticky-фото показа фильма в Лицее №1 + сторителлинг 5 пунктов)
5. Media (3 канала + большой блок фильма МФТИ с 4 highlighted гостями)
6. CommercialDetails (6 проектов alternating layout)
7. SocialDetails (3 проекта на фоне ghost-white)
8. Community (соц. капитал + 4 партнёрства)
9. Contact (тёмный hero-блок с 3 CTA, orange radial gradient)
10. Footer (4 колонки: бренд / личные медиа / проекты / контакты)

**Финальные эталонные скриншоты:** в `assets/screenshots/night-2026-05-13/`

---

## Что нужно от Антона утром

1. **Открыть dev-сервер и пройтись по странице** (mobile + desktop).
2. **Скинуть финальные фото** в Google Drive `12_Сайт/03_Фото`. Сейчас на сайте placeholder из Telegram-выгрузки.
3. **Утвердить домен** `antonoreshkin.ru` (или предложить альтернативу).
4. **Дать почту Ксени** для Sanity invite (когда подключим CMS).

---

## Технические решения

| Что | Решение | Почему |
|---|---|---|
| Display-шрифт | Onest (вместо Bricolage) | Bricolage не поддерживает кириллицу |
| Bundler | webpack (`--webpack`) | Turbopack 16 крашится с panic |
| Стек | Next.js 16 + Tailwind v4 + Framer Motion 12 | По ТЗ v2 |
| Анимации | `whileInView` + easing `[0.22,1,0.36,1]` | Humble cubic |
| Mobile-first | от 375px → 1440 | По ТЗ |
| Production build | ✓ 6.9s, static prerender | Готово к деплою |

---

## Round 0 — подготовка ресурсов ✅

- 1146 фото из Telegram-выгрузки + 119 из Yandex curated.
- Отобрано 11 тематических + 5 портретов в `public/photos/`:
  - film-novoselov / film-kuchment / film-livanov / film-rybakov / film-premiere / film-karelia-lyceum / film-posters
  - podcast-cover / assist-plus / forum-proryv / kuznetsov-meeting
  - portrait-1..5 (Yandex curated)

## Round 1 — полная сборка прототипа ✅

Реализовано: 11 секций, content.ts с типами, 9 компонентов в `src/components/sections/`, обновлён `src/app/page.tsx`.

## Round 2 — Playwright-аудит ✅

Mobile (375) + Desktop (1440) скриншоты. Найдено:
1. Много длинных тире (нарушение feedback_style)
2. Hero portrait — командное фото вместо чистого портрета
3. Подкаст карточка без визуальной массы

## Round 3 — фиксы по аудиту ✅

- Убраны все длинные тире (12 замен в content.ts + компонентах + layout.tsx)
- Подкаст subs: «ежемесячные выпуски»
- Title и description без тире

## Round 4 — полировка ✅

- Hero: разделил на «Антон Орешкин» / «21 год. Студент МФТИ × Сколково.» / описание
- ProjectsOverview heading: «Шесть коммерческих и три социальных проекта. У каждого своя миссия.»
- About: добавлено описание под заголовок
- Один новый em-dash случайно появился, исправлен на двоеточие

## Round 5 — финальные штрихи ✅

- Hero: subtle orange radial glow в правом верхнем углу (через blur+opacity 0.08)
- `scroll-behavior: smooth` + `scroll-padding-top: 80px` для якорной навигации
- Production build verified

## Round 6 — production-readiness ✅

Добавлены:
- `src/app/not-found.tsx` — кастомная 404 страница в стиле сайта
- `src/app/robots.ts` — robots.txt с allow all
- `src/app/sitemap.ts` — sitemap.xml с главной страницей
- `src/app/opengraph-image.tsx` — динамическая OG-картинка 1200×630 через Next.js Edge runtime
- `src/app/layout.tsx` — расширенные metadata (OG + Twitter + robots + metadataBase)

Все endpoints верифицированы:
- HTTP 200 для главной
- /robots.txt — корректный
- /sitemap.xml — валидный XML
- /opengraph-image — PNG 91KB
- /nonexistent → 404 страница

Финальный production build:
- 6 routes (/, /_not-found, /opengraph-image dynamic, /robots.txt, /sitemap.xml)
- TypeScript ✓
- Compiled in 2.8s

---

## Известные ограничения (отложено на утро)

1. **Cal.com embed** — пока кнопка «Забронировать звонок» ведёт на якорь `#booking`. Реальный Cal.com не подключён (нужен аккаунт Антона).
2. **Telegram-бот для «Сообщить об ошибке»** — кнопка в footer есть, бот не создан (нужен @BotFather через Антона).
3. **Cron / metrika** — Яндекс.Метрика не подключена (нужен counter ID).
4. **Sanity CMS** — пока все тексты захардкожены в `src/lib/content.ts`. CMS подключим позже (нужно решение по почте Ксени).
5. **Hero portrait** — фото командной встречи, не чистый портрет. Заменим когда Антон пришлёт.
6. **Тизер фильма МФТИ** — кнопка «Смотреть тизер» в Media есть, реальный плеер не подключён (нужна YouTube/Vimeo ссылка).
7. **YouTube/Instagram/ВК ссылки** — в footer показываются, но href="#". Нужны актуальные URL.

Все эти пункты — точки для следующей итерации с Антоном.

---

## Структура проекта

```
src/
├── app/
│   ├── layout.tsx          # Onest + Geist + Inter
│   ├── page.tsx            # композиция секций
│   └── globals.css         # Humble токены + scroll-smooth
├── components/
│   ├── motion/Reveal.tsx
│   ├── sections/
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectsOverview.tsx
│   │   ├── About.tsx
│   │   ├── Media.tsx
│   │   ├── ProjectDetails.tsx (Commercial + Social)
│   │   ├── Community.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Card.tsx
├── lib/
│   ├── cn.ts
│   └── content.ts          # вся текстовая и фото-карта
public/
└── photos/                  # 16 фото
```

## Файлы изменённые в ночь

Все правки:
- `src/lib/content.ts` (новый)
- `src/components/sections/*.tsx` (9 новых)
- `src/app/page.tsx` (полностью переписан)
- `src/app/layout.tsx` (Bricolage → Onest)
- `src/app/globals.css` (scroll-smooth)
- `public/photos/*` (16 фото)
