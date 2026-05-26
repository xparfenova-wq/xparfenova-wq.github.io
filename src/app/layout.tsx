import type { Metadata } from "next";
import { Onest, Geist } from "next/font/google";
import "./globals.css";

const display = Onest({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://antonoreshkin.ru"),
  alternates: { canonical: "/" },
  title: "Антон Орешкин — проекты в IT, образовании и медиа",
  description:
    "Студент МФТИ × Сколково, 21 год. Synapt, Automy AI, АССИСТ+, менторская программа, Oreshkin Media Lab.",
  keywords: [
    "Антон Орешкин",
    "Synapt",
    "Oreshkin Media Lab",
    "МФТИ",
    "Сколково",
    "AI",
    "наставническая программа",
    "АССИСТ+",
    "Automy AI",
  ],
  openGraph: {
    title: "Антон Орешкин — проекты в IT, образовании и медиа",
    description:
      "Synapt, Automy AI, АССИСТ+, менторская программа, Oreshkin Media Lab.",
    url: "https://antonoreshkin.ru",
    siteName: "Антон Орешкин",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Антон Орешкин — проекты в IT, образовании и медиа",
    description:
      "Synapt, Automy AI, АССИСТ+, менторская программа, Oreshkin Media Lab.",
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Антон Орешкин",
  url: "https://antonoreshkin.ru",
  image: "https://antonoreshkin.ru/photos/hero-portrait-1600.jpg",
  jobTitle: "Строю проекты в IT, образовании и медиа",
  alumniOf: [
    { "@type": "Organization", name: "МФТИ" },
    {
      "@type": "Organization",
      name: "Московская школа управления Сколково",
    },
  ],
  sameAs: [
    "https://t.me/anton_0reshkin",
    "https://www.youtube.com/@antonoreshkin",
    "https://vk.com/anton.oreshkin",
    "https://www.instagram.com/anton_oreshkin/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${display.variable} ${geist.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-canvas-white text-obsidian-text">
        <script type="application/ld+json">
          {JSON.stringify(personJsonLd)}
        </script>
        {children}
      </body>
    </html>
  );
}
