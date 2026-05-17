import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="text-[12px] uppercase tracking-[0.22em] text-electric-orange-text font-medium mb-6">
        Страница не найдена
      </div>
      <h1
        className="font-display font-semibold text-obsidian-text mb-4"
        style={{
          fontSize: "clamp(40px, 8vw, 84px)",
          lineHeight: 0.95,
          letterSpacing: "-0.045em",
        }}
      >
        404
      </h1>
      <p className="text-granite-gray max-w-[440px] mb-8">
        Этот адрес не существует. Возможно, ссылка устарела или вы попали сюда случайно.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-5 py-3.5 rounded-full bg-ink-black text-canvas-white text-[15px] font-medium hover:bg-obsidian-text transition-colors"
      >
        Вернуться на главную
      </Link>
    </main>
  );
}
