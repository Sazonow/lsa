import { ReactNode } from "react";
import { ShieldCheck, LockKeyhole, Home, UserRound, LucideIcon } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { KeyMark } from "../components/BrandLogo";
import { Navigate, Route } from "../types";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLanguage } from "../context/LanguageContext";

export function AboutPage({ navigate, route }: { navigate: Navigate; route: Route }) {
  const revealRef = useScrollReveal();
  const { t } = useLanguage();

  return (
    <main ref={revealRef as any} className="page-frame inner-page about-page">
      <Header tone="light" navigate={navigate} currentRoute={route} compact showHome />
      <section className="about-hero page-pad">
        <div className="about-copy">
          <h1>{t("about.title")}</h1>
          <p className="intro">{t("about.intro")}</p>
          <p>{t("about.copy")}</p>
        </div>
        <div className="team-photo-wrap reveal reveal-scale">
          <img
            src="/assets/reference-derived/about-team-reference.jpg"
            alt="Team Court Rider"
            width="712"
            height="704"
            decoding="async"
          />
          <div className="experience-badge">
            <strong>10+</strong>
            <span>{t("about.badge")}</span>
          </div>
        </div>
      </section>

      <section className="values-panel page-pad reveal reveal-up">
        <div className="panel-title">
          <h2>{t("about.values.title")}</h2>
          <span />
        </div>
        <div className="values-grid">
          <Value icon={ShieldCheck} title={t("about.values.p1.title")} delayClass="reveal-delay-1">
            {t("about.values.p1.desc")}
          </Value>
          <Value icon={LockKeyhole} title={t("about.values.p2.title")} delayClass="reveal-delay-2">
            {t("about.values.p2.desc")}
          </Value>
          <Value icon={Home} title={t("about.values.p3.title")} delayClass="reveal-delay-3">
            {t("about.values.p3.desc")}
          </Value>
          <Value icon={UserRound} title={t("about.values.p4.title")} delayClass="reveal-delay-4">
            {t("about.values.p4.desc")}
          </Value>
        </div>
      </section>

      <section className="stats-row page-pad">
        <Stat value="10+" label={t("about.stats.s1")} delayClass="reveal-delay-1" />
        <Stat value="200+" label={t("about.stats.s2")} delayClass="reveal-delay-2" />
        <Stat value="98%" label={t("about.stats.s3")} delayClass="reveal-delay-3" />
        <Stat value="5" label={t("about.stats.s4")} delayClass="reveal-delay-4" />
      </section>

      <section className="mission page-pad reveal reveal-up">
        <div>
          <h2>{t("about.mission.title")}</h2>
          <p>{t("about.mission.desc")}</p>
        </div>
        <KeyMark className="mission-key-vector" />
      </section>
      <Footer navigate={navigate} />
    </main>
  );
}

function Value({
  icon: Icon,
  title,
  children,
  delayClass,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  delayClass: string;
}) {
  return (
    <article className={`value reveal reveal-up ${delayClass}`}>
      <span className="icon-circle">
        <Icon size={24} strokeWidth={1.55} />
      </span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

function Stat({ value, label, delayClass }: { value: string; label: string; delayClass: string }) {
  return (
    <div className={`stat reveal reveal-up ${delayClass}`}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
