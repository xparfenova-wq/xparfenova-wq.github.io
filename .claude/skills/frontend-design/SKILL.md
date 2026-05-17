---
name: frontend-design
description: Дизайн-таст для anton-site. Humble — Precise White Lab. Применяется автоматически на любой UI/компонент/секцию. Источник правды — /Users/anton1/Claude3/agents/reglaments/design/visual_design_system.md.
---

# Frontend Design Skill — anton-site

**Эстетика:** Precise White Lab. Чистый белый канвас, точная функциональная типографика, единичный электрик-оранжевый акцент, лёгкие диффузные тени. Ощущение: ясность, точность, сдержанная энергия. Никакого generic AI aesthetic.

> Эта инструкция всегда в контексте при работе над UI. Не объясняй design — применяй.

---

## 1. Color Tokens (Humble)

```
--color-canvas-white:    #fafafa   /* основной фон страницы и карточек */
--color-obsidian-text:   #1c1c1c   /* заголовки и primary текст */
--color-granite-gray:    #6e6e6e   /* secondary text, nav, muted */
--color-ink-black:       #000000   /* границы, инверс UI, primary button bg */
--color-ghost-white:     #f1f1f1   /* alt card surface */
--color-alabaster-gray:  #ecebe8   /* tertiary background для блоков */
--color-electric-orange: #ff4000   /* ТОЛЬКО accent — теги, дивайдеры, focus */
```

**Электрик-оранжевый запрещено** использовать как primary button background, как fill для больших площадей, как цвет текста статей. Только outline-акценты, маленькие иконки, фокус-индикаторы, тонкие линии.

**Primary CTA** — Ink Black (#000000) background + Canvas White (#fafafa) text, 100px radius (pill).
**Ghost CTA** — rgba(255,255,255,0.08) background, Ink Black text, 100px radius (для тёмных hero).

---

## 2. Typography

| Token | Family | Weights | Use |
|---|---|---|---|
| Display | Bricolage Grotesque | 600 | Hero headline (58px / line-height 0.7 / tracking -0.052em) |
| Heading-lg | Bricolage Grotesque | 600 | Section headlines (42px / 0.7 / -0.03em) |
| Heading | Bricolage Grotesque | 600 | Subsection (32px / 1.5 / -0.02em) |
| Heading-sm | Bricolage Grotesque | 500-600 | Card titles (24px / 1.2 / -0.02em) |
| Subheading | Geist | 500 | Lead paragraphs (18px / 1.4 / -0.04em) |
| Body-lg | Geist | 500 | Body (16px / 1.4 / -0.02em) |
| Body | Geist | 500 | UI labels (14px / 1.4 / -0.007em) |
| Caption | Geist | 400-500 | Captions, micro (12px / 1.4) |

**Правила:**
- Все заголовки — Bricolage Grotesque, weight 500 или 600, всегда с tight letter-spacing согласно размеру.
- Body/UI — Geist, weight 500. Bold (700+) для body — запрещено. Эмфаза через weight 600.
- Inter — fallback только.
- Никогда не использовать декоративные шрифты, никаких serif, никаких других display.

---

## 3. Spacing & Layout

- **Base scale:** 4, 6, 8, 10, 12, 14, 16, 19, 20, 24, 32, 38, 40, 42, 64, 72 px.
- **Section gap:** 64px между крупными секциями (mobile 40px).
- **Card padding:** 32px.
- **Element gap:** 10px между связанными элементами.
- **Layout:** max-width контейнер по центру, ~1200-1280px. Двух-колонные секции — текст слева, UI/иллюстрация справа.
- **Vertical rhythm:** дышать. Не лепить блоки впритык.

---

## 4. Border Radius

```
cards:        30px
images:       40px
buttons:     100px  (pill)
controls:      6px  (inputs, small)
large block:  70px  (hero callouts, big surfaces)
subtle bg:    48px  (Alabaster Gray cards)
hero callout: 60px  (translucent overlays)
```

Никаких 4-8-12 стандартных «AI tailwind» радиусов. Только эти значения.

---

## 5. Elevation (тени)

Только одна subtle diffused shadow для карточек:

```css
box-shadow:
  rgba(0,0,0,0.03) 0px 0.71px 0.71px -0.42px,
  rgba(0,0,0,0.03) 0px 1.81px 1.81px -0.83px,
  rgba(0,0,0,0.03) 0px 3.62px 3.62px -1.25px,
  rgba(0,0,0,0.03) 0px 6.87px 6.87px -1.67px,
  rgba(0,0,0,0.03) 0px 13.65px 13.65px -2.08px,
  rgba(0,0,0,0.03) 0px 30px 30px -2.5px;
```

Тяжёлые контрастные тени — запрещены. Стиль — приподнятый, не якорный.

---

## 6. Components (готовые шаблоны)

### Product Features Card
Canvas White bg, 30px radius, 32px padding, diffused shadow выше. Внутри: 24px heading + 16px body + опционально кнопка/иконка.

### Enclosed Content Block
Canvas White bg, 24px radius, 30px padding all, diffused shadow.

### Subtle Background Card
Alabaster Gray (#ecebe8) bg, 48px radius, 16px padding, **no shadow**.

### Hero Section Callout
rgba(204,204,204,0.2) bg, 60px radius, 26px padding. Поверх hero, под заголовок.

### Main Navigation Button
Ink Black bg, Canvas White text, 100px radius, Geist 600/16px, padding 16px/20px.

### Ghost Button
rgba(255,255,255,0.08) bg, Ink Black text, 100px radius.

### Navigation Link
Granite Gray text, Geist 500/14px, 6px hover radius, 10px padding.

---

## 7. Imagery & Iconography

- **Иллюстрации:** объёмные стилизованные векторы людей/абстракции, light shading, эфирное качество. На белом канвасе или внутри dark gradient.
- **Скриншоты:** клин full-UI, в мок-устройствах или как floating elevated cards с мягкой тенью.
- **Иконки:** минималистичные, outline, monochromatic. Lucide-react — да. Никаких эмодзи в роли иконок.

---

## 8. Анимация (Framer Motion — обязательно)

Все секции и интерактивные элементы — через framer-motion. Принципы:

1. **Scroll-triggered fades:** заголовки/карточки `whileInView` с `opacity 0→1` + `y 24→0`, duration 0.6s, easing `[0.22, 1, 0.36, 1]` (ease-out cubic).
2. **Staggered reveals:** для списков карточек — `staggerChildren: 0.08-0.12`.
3. **Hover transitions:** кнопки/карточки `whileHover: { y: -2, transition: 0.2 }`. Subtle, не аркадно.
4. **Page transitions:** для App Router — `motion.div` обёртка на page с `initial / animate` opacity.
5. **Marquee/ticker** для proof-lent (логотипы, цифры) — `animate: x` инфинит, `ease: linear`.
6. **Reduced motion:** уважать `prefers-reduced-motion` — fallback на opacity без translate.

Запрещено:
- Spring-bounce «играющие» анимации (никакого `type: "spring", bounce: 0.6`).
- Параллакс с rotateY/rotateX «3D-carousel».
- Однотонные fade-in на 2 секунды.

---

## 9. Do's

- Canvas White (#fafafa) — primary background всех секций (исключение — hero с тёмным градиентом).
- Bricolage Grotesque + tight tracking для всех заголовков.
- Geist 500-600 для UI/body.
- Subtle diffused shadow для всех elevated cards.
- 30px radius для карточек, 100px для кнопок.
- Orange ТОЛЬКО как акцент (теги, divider, focus ring).
- 64px section gap, 32px card padding, 10px element gap.
- Используй CSS-переменные / Tailwind-токены, не магические hex.
- Framer Motion на любой visible element above-the-fold.

## 10. Don'ts

- ❌ Heavy/high-contrast shadows.
- ❌ Новые display fonts помимо Bricolage Grotesque.
- ❌ Electric Orange как primary button bg или фон секции.
- ❌ Dark backgrounds для секций кроме hero/product showcase.
- ❌ Bold borders на карточках (используй elevation/bg).
- ❌ Произвольные radii (только токены).
- ❌ Bold body text (используй weight 500/600 для emphasis).
- ❌ Generic shadcn/tailwind aesthetic (purple, rounded-lg, generic gradient).
- ❌ Эмодзи внутри UI-блоков (только если контент-смысл, не decoration).
- ❌ Spring-bounce анимации.

---

## 11. Similar brand references

Когда сомневаешься — смотри как делают Linear, Framer, Raycast, Braintrust. Тот же воздушный белый стиль, точная типографика, минимум декора.

---

## 12. Quick prompts (для себя)

- «Hero: full-bleed background `--color-canvas-white`, центральный display headline Bricolage 58px/600/tracking -0.052em, lead Geist 18px/500, два CTA — Ink Black pill primary + Ghost secondary, под ним маркетинг-line caption (Granite Gray, Geist 12px).»
- «Project card: Canvas White, 30px radius, 32px padding, тень humble, hover y-2. Заголовок Bricolage 24px/600, описание Geist 16px/500/Granite Gray, теги — pill Alabaster Gray 16px radius / Geist 12px / orange outline только на active.»
- «Nav: sticky top, Canvas White 80% blur, Granite Gray links (Geist 14px/500/6px hover bg), primary "Связаться" Ink Black pill.»

---

## 13. Источники правды

- Полная Humble спецификация: `/Users/anton1/Claude3/agents/reglaments/design/visual_design_system.md`
- 21st.dev — каталог production-ready компонентов: https://21st.dev — копировать → адаптировать под токены выше.
- Профиль Антона: `/Users/anton1/Claude3/projects/personal/01_Профиль/Профиль_Антона_Орешкина.md`
- Контекст и проекты: `/Users/anton1/Claude3/agents/CONTEXT.md`
