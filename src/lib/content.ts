export const SITE = {
  ownerName: "Антон Орешкин",
  age: 21,
  city: "Москва, родом из Петрозаводска",
  education: "МФТИ × Московская школа управления Сколково",
  tg: {
    anton: "antonoreshkin",
    xenia: "xeniapm",
  },
  bookCallUrl: "#contact",
  // Cal.com username (кириллица, можно переименовать в Settings → Account)
  calUsername: "антон-орешкин-sw75hx",
  cal: {
    base: "https://cal.com/антон-орешкин-sw75hx",
    types: [
      {
        slug: "15min",
        title: "Знакомство",
        length: "15 минут",
        description: "Короткий разговор, контекст и формат сотрудничества.",
      },
      {
        slug: "30min",
        title: "Обсудить проект",
        length: "30 минут",
        description: "Разбор задачи и понимание следующих шагов.",
      },
      {
        slug: "60min",
        title: "Глубокая встреча",
        length: "1 час",
        description: "Подробное обсуждение проекта, запроса или партнёрства.",
      },
    ],
  },
  // YouTube ролик: «Я выиграл грант 8 миллионов»
  grantVideoUrl: "https://youtu.be/nYOUr6e07vw?si=cCLtOoO1-1B6J1cY",
  // Полнометражный фильм «МФТИ — как учат гениев»
  filmFullUrl: "https://www.youtube.com/watch?v=PtQW2vVgbJ4",
  // Закреплённый пост со ссылками личных медиа
  pinnedPostUrl: "https://t.me/anton_0reshkin/3",
  // Основной сайт студии
  mediaLabExternalUrl: "https://oreshkinmedialab.ru/light",
};

export const NAV = [
  { label: "Коммерческие", href: "/#commercial" },
  { label: "Социальные", href: "/#social" },
  { label: "Медиа", href: "/#media" },
  { label: "Обо мне", href: "/#about" },
  { label: "Связаться", href: "/#contact" },
];

// Партнёры, которые упоминаются в Hero/Media как floating-карточки
export const HERO_LOGOS = [
  { name: "МФТИ", short: "МФТИ", logo: "/logos/mipt.png" },
  {
    name: "Московская школа управления Сколково",
    short: "Сколково",
    logo: "/logos/skolkovo.png",
  },
];

export type Project = {
  id: string;
  slug: string;
  category: "commercial" | "social";
  name: string;
  tag: string;
  short: string;
  long: string;
  cover: string;
  badge?: string;
};

export const PROJECTS_COMMERCIAL: Project[] = [
  {
    id: "medialab",
    slug: "medialab",
    category: "commercial",
    name: "Oreshkin Media Lab",
    tag: "Продакшн-студия",
    short: "Видео и фильмы для брендов и проектов.",
    long:
      "Снимаем форматы под задачи бизнеса и медиа. Главный кейс года, полнометражный фильм про МФТИ с предпринимателями Forbes и нобелевским лауреатом Константином Новосёловым. Премьера прошла в Долгопрудном, собрала 400 человек.",
    cover: "/photos/film-premiere.jpg",
  },
  {
    id: "it-studio",
    slug: "it-studio",
    category: "commercial",
    name: "Synapt",
    tag: "AI-разработка под задачу",
    short: "Веб, мобильные и AI-решения под конкретную задачу.",
    long:
      "Synapt собирает команду под задачу и строит продукты — от прототипа до полной разработки. Фиксированные сроки и цена до старта, сначала спецификация — потом разработка. Код остаётся у клиента. Внутри — Automy AI: Telegram-канал о нейросетях и курс по практическому применению AI для предпринимателей.",
    cover: "/photos/portrait-1.jpg",
  },
  {
    id: "hr",
    slug: "hr",
    category: "commercial",
    name: "Подбор сотрудников",
    tag: "HR-направление",
    short: "Подбираем людей — от бизнес-ассистента до операционного директора.",
    long:
      "Подбираем людей для предпринимателей: бизнес-ассистентов, операционных менеджеров, маркетологов, топ-менеджеров. Работаем с сообществом студентов МФТИ, ВШЭ, МГИМО и других ведущих вузов России — это даёт доступ к кандидатурам, которых нет на открытом рынке.",
    cover: "/photos/portrait-2.jpg",
  },
  {
    id: "mentoring",
    slug: "mentoring",
    category: "commercial",
    name: "Менторское сопровождение",
    tag: "Школьники и студенты",
    short: "Поступление в титульные вузы и старт в предпринимательстве.",
    long:
      "Работаю с двумя группами. Старшеклассникам — помогаю поступить в МФТИ и другие топовые вузы через олимпиады и ЕГЭ. Студентам — помогаю найти своё направление и запустить первый проект.",
    cover: "/photos/portrait-3.jpg",
  },
  {
    id: "vending",
    slug: "vending",
    category: "commercial",
    name: "Сеть вендинговых кофейных аппаратов",
    tag: "Петрозаводск",
    short: "Действующая сеть в родном городе.",
    long:
      "Первый офлайн-бизнес — сеть кофейных аппаратов в Петрозаводске. Работает несколько лет, процессы отлажены.",
    cover: "/photos/about-waterfall.jpg",
  },
];

export const PROJECTS_SOCIAL: Project[] = [
  {
    id: "donation",
    slug: "donation",
    category: "social",
    name: "Донат-платформа выпускников МФТИ",
    tag: "С Виктором Кузнецовым",
    short: "Платформа, где выпускники напрямую поддерживают преподавателей.",
    long:
      "Платформа в разработке. Идея: дать выпускникам МФТИ способ напрямую поддержать своего преподавателя регулярным пожертвованием — адресно, прозрачно, по подписке. Донор сам выбирает, кому помочь, и видит, что деньги дошли.",
    cover: "/photos/donation-kuznetsov.jpg",
  },
  {
    id: "assist",
    slug: "assist",
    category: "social",
    name: "АССИСТ+",
    tag: "Сообщество молодёжи",
    short: "Сообщество студентов МФТИ, ВШЭ, МГИМО, СПбГУ и других ведущих вузов России.",
    long:
      "Сообщество студентов ведущих вузов России. Встречаемся, помогаем освоить навыки работы с ИИ, помогаем ребятам устраиваться к предпринимателям. АССИСТ+ — не агентство. Место, где студенты и предприниматели находят друг друга.",
    cover: "/photos/assist-plus.jpg",
  },
  {
    id: "forum-group",
    slug: "forum-group",
    category: "social",
    name: "Форум-группа",
    tag: "Студенческий круг",
    short: "Небольшая группа, где встречаются, делятся прогрессом и не дают друг другу останавливаться.",
    long:
      "Небольшое сообщество: собираемся, делимся прогрессом, ошибками, опытом. Помогает расти быстрее — потому что рядом такие же, кто уже знает, чего хочет. Для студентов, которым одной учёбы мало.",
    cover: "/photos/forum-group-2025.jpg",
  },
  {
    id: "lyceum",
    slug: "lyceum",
    category: "social",
    name: "Поддержка премии «100 лицеистов года»",
    tag: "Лицей №1, Карелия",
    short: "Меценатская премия в родной школе.",
    long:
      "Возвращаюсь домой и поддерживаю выпускников родного Лицея №1 в Петрозаводске. Учредил премию «100 лицеистов года» и подарил 100 плюшевых капибар лучшим ученикам. Сам в своё время стал лучшим лицеистом этой школы.",
    cover: "/photos/lyceum-mecenat.jpg",
  },
  {
    id: "student-council",
    slug: "student-council",
    category: "social",
    name: "Совет старшеклассников",
    tag: "Опыт из школы",
    short: "Построил школьное самоуправление в Карелии.",
    long:
      "В лицее в Карелии создал и возглавил совет старшеклассников. Мы организовывали мероприятия, поддерживали младшие классы, делали школьную жизнь живее. Подробности и фотографии в посте ВКонтакте.",
    cover: "/photos/film-karelia-lyceum.jpg",
  },
];

export const ALL_PROJECTS = [...PROJECTS_COMMERCIAL, ...PROJECTS_SOCIAL];

export type FilmGuest = {
  name: string;
  role?: string;
  photo?: string;
};

export const FILM_GUESTS: {
  all: FilmGuest[];
  company: string;
  premiere: {
    audience: string;
    place: string;
    organized: string;
    details: string[];
  };
} = {
  all: [
    { name: "Константин Новосёлов", role: "Нобелевский лауреат", photo: "/photos/film-novoselov.jpg" },
    { name: "Михаил Кучмент", role: "Сооснователь Hoff", photo: "/photos/film-kuchment.jpg" },
    { name: "Игорь Рыбаков", role: "Forbes, Технониколь", photo: "/photos/film-rybakov.jpg" },
    { name: "Дмитрий Ливанов", role: "Ректор МФТИ", photo: "/photos/film-livanov.jpg" },
    { name: "Виктор Кузнецов", role: "Выпускник МФТИ" },
    { name: "Алексей Половинкин", role: "Выпускник МФТИ" },
    { name: "Татьяна Савельева", role: "Выпускница МФТИ" },
    { name: "Полина Бабаева", role: "Выпускница МФТИ" },
    { name: "Иван Гуз", role: "Выпускник МФТИ" },
    { name: "Валентин Волков", role: "Компания XPANCEO" },
  ],
  company: "XPANCEO",
  premiere: {
    audience: "400 человек",
    place: "Долгопрудный, технопарк МФТИ",
    organized: "Антон лично организовал премьеру",
    details: [
      "Панельная дискуссия с участниками фильма",
      "Съёмочная группа телевидения",
      "Стенды компаний и нетворкинг",
    ],
  },
};

export const PREMIERE_GALLERY = [
  { src: "/photos/film-premiere.jpg", alt: "Премьера фильма про МФТИ, зрители в зале" },
  { src: "/photos/portrait-1.jpg", alt: "Антон Орешкин на сцене премьеры" },
  { src: "/photos/portrait-2.jpg", alt: "Антон на премьере фильма" },
  { src: "/photos/film-karelia-lyceum.jpg", alt: "Показ фильма про МФТИ" },
];

export const MEDIA_CHANNELS = [
  {
    kind: "youtube",
    name: "YouTube",
    handle: "Антон Орешкин",
    subs: "9 000+",
    href: "https://www.youtube.com/@antonoreshkin",
  },
  {
    kind: "telegram",
    name: "Telegram «Жизнь и мысли Орешкина»",
    handle: "@anton_0reshkin",
    subs: "2 500+",
    href: "https://t.me/anton_0reshkin",
  },
  {
    kind: "podcast",
    name: "Подкаст",
    handle: "YouTube · Apple Podcasts · Яндекс.Музыка",
    subs: "1 000+",
    href: "https://www.youtube.com/@antonoreshkin",
  },
];

export const STORY_SHORT = {
  title: "Из Карелии в Москву",
  body:
    "Родился и вырос в Петрозаводске. Окончил Лицей №1 как лучший лицеист. ЕГЭ на 302 балла с олимпиадами, победитель перечневой олимпиады по математике. Выиграл 100% грант на обучение в МФТИ × Сколково, один из 20 на всю Россию, 8 миллионов рублей. Сейчас в Москве, делаю проекты в медиа, IT и образовании.",
};

export const COMMUNITY = [
  {
    name: "AGORA",
    role: "Принимал участие в запуске международного делового клуба",
  },
  {
    name: "X Forum",
    role: "Запустил личный мастер-майнд предпринимателей",
  },
  {
    name: "Бизнес-клуб «Прорыв»",
    role: "Был приглашённым гостем на слётах",
  },
];

export const PARTNERS_FLOATING = [
  { name: "Т-Банк", note: "Партнёр", logo: "/logos/tbank.png" },
  { name: "Онлайн-школа Сколково", note: "Партнёр", logo: "/logos/skolkovo.png" },
];

export const PARTNER_HIGHLIGHT = {
  name: "Физтех Союз",
  role: "Ассоциированный партнёр",
  url: "https://fiztechunion.ru",
};

export const FOOTER_PERSONAL_MEDIA = [
  { name: "YouTube", href: "https://www.youtube.com/@antonoreshkin" },
  { name: "Telegram «Жизнь и мысли Орешкина»", href: "https://t.me/anton_0reshkin" },
  { name: "Instagram", href: "https://www.instagram.com/anton_oreshkin/" },
  { name: "ВКонтакте", href: "https://vk.com/anton.oreshkin" },
  { name: "Подкаст", href: "https://www.youtube.com/@antonoreshkin" },
];

export const FOOTER_PROJECTS = [
  { name: "Oreshkin Media Lab", href: "/medialab" },
  { name: "Synapt", href: "/it-studio" },
  { name: "Подбор сотрудников", href: "/hr" },
  { name: "Менторское сопровождение", href: "/mentoring" },
];
