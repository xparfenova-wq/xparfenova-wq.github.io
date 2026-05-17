# Сайт-визитка Антона Орешкина

Отдельный проект. Здесь живёт всё: код, документы, контент, ассеты, исследования.

## Что это
Одностраничный сайт-визитка Антона. Mobile-first (90% мобильного трафика). Humble design system. Next.js 16 + Tailwind v4 + Framer Motion. CMS Sanity (планируется) для Ксени Пиён. Бронь Cal.com (планируется).

## Текущий статус (2026-05-12)
| Этап | Статус |
|---|---|
| 0. Стек | готово |
| 1. Discovery | готово |
| 2. ТЗ v1 | готово |
| 3. Ответы на 17 открытых вопросов | ждём |
| 4. Сбор контента | не начато |
| 5+ | впереди |

## Навигация

| Папка | Что внутри |
|---|---|
| `src/` | код Next.js |
| `public/` | статические ассеты для сборки |
| `.claude/skills/frontend-design/` | дизайн-таст Humble (применяется автоматически) |
| `docs/` | ссылки на Google Doc, реестр решений, открытые вопросы |
| `content/` | копирайт-драфты, тексты по проектам, сторителлинг |
| `assets/` | фото, лого, видео, скриншоты |
| `research/` | референсы, конкуренты, дизайн-исследования |
| `CLAUDE.md` | контекст для Claude Code сессии |

## Источники правды

- **Discovery (вопросы + ответы):** https://docs.google.com/document/d/1Um69oiEeLomiXp8DQc1Ad8s_Eh7_BYxwPCL0DUqz2eE/edit
- **ТЗ v1 (полное техническое задание + открытые вопросы):** https://docs.google.com/document/d/1qkg-jV1c8nOvEbOP7WmcLl1duEDJEeGUWHlqb0DnR-Y/edit
- **Папка проекта в Google Drive:** [12_Сайт](https://drive.google.com/drive/folders/1TwefqekaGZVK92avHFDIxNpuJtStE1Je) (внутри Oreshkin Business)

## Дев и сборка

```bash
cd /Users/anton1/Claude3/projects/_shared/anton-site
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Принципы

1. Сначала фундаментальная архитектура — кода не пишем без согласованного ТЗ.
2. Каждое решение записываем в `docs/decisions.md`.
3. Контент собирается в `content/` (тексты) и `assets/` (медиа). Финал контента — через Sanity.
4. Humble design system — без компромиссов. Никакого AI-слопа.
