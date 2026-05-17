<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# AGENTS.md — для Claude и Codex CLI в этом репозитории

Источник правды для агентов: `CLAUDE.md` в корне репо. Этот файл — короткий указатель.

## Перед стартом сессии

1. `git fetch origin && git checkout main && git pull origin main`
2. Создай рабочую ветку: `git checkout -b feat/<коротко>`
3. Прочитай `CLAUDE.md` (стиль, табу, контекст Антона)
4. Если правишь UI — `.claude/skills/frontend-design/SKILL.md`

## Что нельзя

- Push в `main` напрямую (только через PR)
- Коммитить `.env`, секреты, `.vercel/`, `node_modules/`, `.next/`
- Менять `package.json` без проверки билда
- Использовать `next dev` или `next build` без флага `--webpack` (Turbopack 16 крашится)
- Любые формулировки с длинными тире, «данный», «является», «успешный успех», «уникальная возможность»
- Упоминать: Алексей Третьяков, ИРИ, Атланты Сити, Signal TV, доли в проектах, конкретные суммы

## Что обязательно

- АССИСТ+ — заглавными русскими
- Oreshkin Media Lab — на английском
- X Forum (английский, не «Иксфорум»)
- Иван Гуз — через «з»
- Голос: сдержанный, на «вы», искренний

## Полезные команды

```bash
npx next dev --webpack          # dev сервер на :3000
npx next build --webpack        # production build
gh pr create                    # открыть PR
gh pr view --web                # открыть свой PR в браузере
```

## Workflow

См. `COLLABORATION.md` — полный регламент совместной работы Антон + Ксюша + Claude.
