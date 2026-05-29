import { notFound } from "next/navigation";
import { ALL_PROJECTS, type Project } from "@/lib/content";
import { ProjectPage } from "@/components/page/ProjectPage";
import { ProjectContent } from "@/components/page/ProjectContent";
import type { ApplicationFormIntent } from "@/components/forms/ApplicationForm";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return ALL_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.name} · Антон Орешкин`;
  const description = project.short;
  const url = `https://antonoreshkin.ru/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title,
      description,
      url,
      siteName: "Антон Орешкин",
      locale: "ru_RU",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

type FormConfig = {
  intent: ApplicationFormIntent;
  title: string;
  subtitle?: string;
};

const FORM_BY_PROJECT: Record<string, FormConfig> = {
  medialab: {
    intent: "project",
    title: "Обсудить съёмку",
    subtitle:
      "Опишите задачу, формат и сроки. Свяжемся в течение рабочего дня.",
  },
  "it-studio": {
    intent: "consultation",
    title: "Обсудить разработку",
    subtitle:
      "Расскажите, что нужно сделать. Мы оценим задачу и предложим команду.",
  },
  hr: {
    intent: "consultation",
    title: "Найти сотрудника",
    subtitle:
      "Опишите вакансию: роль, грейд, формат работы. Подберём кандидатов из воронки и сообщества.",
  },
  mentoring: {
    intent: "application",
    title: "Заявка на менторскую программу",
    subtitle:
      "Расскажите кратко о себе и цели. Свяжемся в течение рабочего дня.",
  },
  "automy-ai": {
    intent: "application",
    title: "Записаться на курс",
    subtitle:
      "Расскажите кратко о себе и задаче. Свяжемся и расскажем про ближайший поток.",
  },
  vending: {
    intent: "partnership",
    title: "Запрос по сети аппаратов",
    subtitle:
      "Сеть продаётся. Опишите интерес, обсудим условия.",
  },
  donation: {
    intent: "partnership",
    title: "Присоединиться к проекту",
    subtitle:
      "Можно стать меценатом, войти в команду или представить свой вуз или школу.",
  },
  assist: {
    intent: "application",
    title: "Заявка в сообщество",
    subtitle:
      "Расскажите кратко о себе, вузе и интересах. Откроем доступ в сообщество.",
  },
  "forum-group": {
    intent: "application",
    title: "Заявка в Форум-группу",
    subtitle:
      "Расскажите о себе, проектах и зачем вам формат группового обмена.",
  },
  lyceum: {
    intent: "volunteer",
    title: "Поддержать инициативу",
    subtitle:
      "Можно стать меценатом премии или предложить идею для Лицея №1.",
  },
  "student-council": {
    intent: "consultation",
    title: "Расспросить про опыт",
    subtitle:
      "Если делаете школьное самоуправление и хотите идей, напишите.",
  },
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project: Project | undefined = ALL_PROJECTS.find(
    (p) => p.slug === slug
  );
  if (!project) notFound();

  const form = FORM_BY_PROJECT[slug];
  const category =
    project.category === "commercial" ? "Коммерческий проект" : "Социальный проект";

  // Возврат на главную к нужному блоку (commercial/social), а не на самый верх
  const backHref =
    project.category === "commercial" ? "/#commercial" : "/#social";

  return (
    <ProjectPage
      category={category}
      title={project.name}
      lead={project.long}
      heroImage={project.heroCover ? undefined : project.cover}
      heroCover={project.heroCover}
      heroBadge={project.badge}
      backHref={backHref}
      formIntent={form.intent}
      formTitle={form.title}
      formSubtitle={form.subtitle}
    >
      <ProjectContent slug={slug} />
    </ProjectPage>
  );
}
