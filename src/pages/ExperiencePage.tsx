import { Scale } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Timeline } from "../components/Timeline";
import { Navigate, Route } from "../types";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLanguage } from "../context/LanguageContext";

export function ExperiencePage({ navigate, route }: { navigate: Navigate; route: Route }) {
  const revealRef = useScrollReveal();
  const { t } = useLanguage();

  return (
    <main ref={revealRef as any} className="page-frame inner-page experience-page">
      <Header tone="light" navigate={navigate} currentRoute={route} compact showHome />
      <section className="experience-top page-pad">
        <div>
          <h1>{t("experience.title")}</h1>
          <p>{t("experience.lead")}</p>
        </div>
        <Scale className="watermark-scale" size={210} strokeWidth={0.55} aria-hidden="true" />
      </section>
      <Timeline />
      <section className="experience-quote reveal reveal-up">
        {t("experience.quote")}
      </section>
      <Footer navigate={navigate} />
    </main>
  );
}
