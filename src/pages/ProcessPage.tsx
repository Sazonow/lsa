import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProcessSteps } from "../components/ProcessSteps";
import { KeyMark } from "../components/BrandLogo";
import { Navigate, Route } from "../types";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLanguage } from "../context/LanguageContext";

export function ProcessPage({ navigate, route }: { navigate: Navigate; route: Route }) {
  const revealRef = useScrollReveal();
  const { t } = useLanguage();

  return (
    <main ref={revealRef as any} className="page-frame inner-page process-page">
      <Header tone="light" navigate={navigate} currentRoute={route} compact showHome />
      <section className="process-top page-pad">
        <h1>{t("process.title")}</h1>
        <p>{t("process.lead")}</p>
      </section>
      <ProcessSteps />
      <section className="process-key reveal reveal-up">
        <p>{t("process.key")}</p>
        <KeyMark className="process-key-vector" />
      </section>
      <Footer navigate={navigate} />
    </main>
  );
}
