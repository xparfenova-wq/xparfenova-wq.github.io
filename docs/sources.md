# Источники правды

## Google Drive — папка проекта
**12_Сайт** (внутри Oreshkin Business)
ID: `1TwefqekaGZVK92avHFDIxNpuJtStE1Je`
URL: https://drive.google.com/drive/folders/1TwefqekaGZVK92avHFDIxNpuJtStE1Je

### Подпапки
| Папка | ID | Назначение |
|---|---|---|
| 01_Документы | `1LckBzzJ17YXunlSKrtslAqYHnvpcFAnh` | Discovery, ТЗ, протоколы |
| 02_Контент | `1iQiOjv1BgcSpsS8rw6BTK7IXO40ko8em` | Тексты, копирайт-драфты |
| 03_Фото | `1Ir5lw7r5qjIxsn_N8pGXrBVhfwoTsdiY` | Фотографии Антона |
| 04_Лого | `1Y3yh1mkGm_kwNNNkKHhx78-DNcwD_BW1` | Логотипы партнёров и проектов |
| 05_Видео | `1md40BduEg3myxD3le87PpFPV05m3ypRr` | Тизеры, фильмы, рилсы |
| 06_Скриншоты | `1d1pdHd4KZ-ec4C-l9yeoPxIz46fWm9a9` | UI-скрины из dev-сессий |

## Документы

### Discovery & План v1
**ID:** `1Um69oiEeLomiXp8DQc1Ad8s_Eh7_BYxwPCL0DUqz2eE`
**URL:** https://docs.google.com/document/d/1Um69oiEeLomiXp8DQc1Ad8s_Eh7_BYxwPCL0DUqz2eE/edit
**Статус:** заполнен ответами Антона 2026-05-12.

### ТЗ v1
**ID:** `1qkg-jV1c8nOvEbOP7WmcLl1duEDJEeGUWHlqb0DnR-Y`
**URL:** https://docs.google.com/document/d/1qkg-jV1c8nOvEbOP7WmcLl1duEDJEeGUWHlqb0DnR-Y/edit
**Статус:** черновик v1, ждём ответов на 17 открытых вопросов (раздел 15).

## Локальные источники

- `agents/reglaments/design/visual_design_system.md` — Humble дизайн-система (источник правды для UI)
- `.claude/skills/frontend-design/SKILL.md` — компактный дизайн-таст для Claude Code
- `agents/CONTEXT.md` — полный контекст Антона
- `projects/personal/01_Профиль/Профиль_Антона_Орешкина.md` — личный профиль

## Принцип работы с источниками

- Любые новые материалы (фото, лого, видео, тексты) → сначала в Google Drive под нужную подпапку, затем уже скачиваем в `assets/` локально.
- Тексты пишем сразу в `content/` или в Google Doc (вопрос Антону в открытых вопросах).
- Решения по архитектуре и дизайну фиксируем в `docs/decisions.md` с датой и контекстом.
