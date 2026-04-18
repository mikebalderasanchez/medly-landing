import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — IA clínica en su hospital`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "IA para hospitales en infraestructura privada: consulta (transcripción, resumen, formulario), seguimiento con receta y voz, RAG sobre expediente y protocolos, dashboard anonimizado y stack LLM + vectores + voz.",
  openGraph: {
    title: `${SITE.name} — IA clínica en su hospital`,
    description:
      "Automatiza consulta y seguimiento sin sacar datos del hospital. Respuestas ancladas al expediente y protocolos; voz empática; tendencias anonimizadas para preventivo e inventarios.",
    locale: "es",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
