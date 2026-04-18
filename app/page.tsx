import { FeaturesBento } from "@/components/landing/FeaturesBento";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";

export default function Home() {
  return (
    <>
      <a
        href="#contenido-principal"
        className="fixed left-4 top-4 z-[100] -translate-y-[150%] rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white opacity-0 shadow transition focus:translate-y-0 focus:opacity-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary"
      >
        Ir al contenido principal
      </a>
      <Header />
      <main id="contenido-principal" className="flex-1">
        <Hero />
        <FeaturesBento />
      </main>
      <Footer />
    </>
  );
}
