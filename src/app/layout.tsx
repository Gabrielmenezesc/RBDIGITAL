import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RB Digital | Sites, Marketing, Tecnologia e Soluções Digitais",
  description:
    "RB Digital: criação de sites, marketing digital, automação, chatbot para WhatsApp, design, vídeos, planilhas, apresentações e soluções digitais personalizadas.",
  keywords: [
    "RB Digital",
    "Rede Brasília Digital",
    "criação de sites",
    "marketing digital",
    "automação",
    "chatbot WhatsApp",
    "design",
    "soluções digitais",
    "Brasília",
    "Goiás",
    "Valparaíso de Goiás",
  ],
  authors: [{ name: "RB Digital - Rede Brasilia News LTDA" }],
  creator: "RB Digital",
  publisher: "Rede Brasilia News LTDA",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "RB Digital",
    title: "RB Digital | Sites, Marketing, Tecnologia e Soluções Digitais",
    description:
      "Transformamos ideias, negócios e projetos em experiências digitais. Sites, marketing, automação, design e soluções digitais personalizadas.",
    url: "https://gabrielmenezesc.github.io/RBDIGITAL",
  },
  twitter: {
    card: "summary_large_image",
    title: "RB Digital | Da sua ideia para o digital",
    description:
      "Sites, marketing digital, automação, chatbot para WhatsApp, design, vídeos e soluções digitais personalizadas.",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://gabrielmenezesc.github.io/RBDIGITAL"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RB Digital",
    legalName: "Rede Brasilia News LTDA",
    url: "https://gabrielmenezesc.github.io/RBDIGITAL",
    description:
      "Transformamos ideias, negócios e projetos em experiências digitais.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua 3, S/N, Quadra 03, Casa 09, Parque Rio Branco",
      addressLocality: "Valparaíso de Goiás",
      addressRegion: "GO",
      postalCode: "72870-055",
      addressCountry: "BR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-38-99162-1135",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
    taxID: "43.209.040/0001-50",
    sameAs: [],
  };

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#071A3A" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="RB Digital" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.ico`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
