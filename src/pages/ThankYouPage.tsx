import { CheckCircle2 } from "lucide-react";
import { LinkButton } from "../components/LinkButton";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BrandMark } from "../components/BrandLogo";
import { Navigate, Route } from "../types";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLanguage } from "../context/LanguageContext";

export function ThankYouPage({ navigate, route }: { navigate: Navigate; route: Route }) {
  const revealRef = useScrollReveal();
  const { t } = useLanguage();

  return (
    <main ref={revealRef as any} className="page-frame inner-page thank-page">
      <Header tone="light" navigate={navigate} currentRoute={route} compact thank showHome />
      <section className="thank-content reveal reveal-scale">
        <div className="thank-lines" />
        <span className="thank-icon" aria-hidden="true">
          <CheckCircle2 size={36} strokeWidth={2} />
        </span>
        <h1>{t("thankyou.title")}</h1>
        <p>{t("thankyou.lead")}</p>
        <LinkButton href="/" navigate={navigate} className="btn gold">
          {t("thankyou.btn")}
        </LinkButton>
        <div className="thank-cr">
          <BrandMark />
        </div>
      </section>
      <Footer navigate={navigate} />
    </main>
  );
}

