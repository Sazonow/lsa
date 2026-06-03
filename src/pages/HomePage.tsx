import { ReactNode, useEffect } from "react";
import { ArrowRight, Building2, Gavel, CircleDollarSign, BriefcaseBusiness, Target, LockKeyhole, CheckCircle2, Flower2, LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LinkButton } from "../components/LinkButton";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Navigate, Route, Practice, AppHref } from "../types";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLanguage } from "../context/LanguageContext";
import { SignatureMark, SealMark } from "../components/BrandLogo";

export const featuredPracticesUA: Practice[] = [
  {
    title: "Корпоративне право",
    text: "Супроводжуємо бізнес у структурі, корпоративних угодах та змінах.",
    image: "/assets/cards/practice-corporate-card.jpg",
    icon: Building2,
  },
  {
    title: "Судові спори",
    text: "Представництво в судах усіх інстанцій, включно зі складними конфліктами.",
    image: "/assets/cards/practice-litigation-card.jpg",
    icon: Gavel,
  },
  {
    title: "Податкове право",
    text: "Податкове планування, спори з фіскальними органами.",
    image: "/assets/cards/practice-tax-card.jpg",
    icon: CircleDollarSign,
  },
  {
    title: "Супровід бізнесу",
    text: "Абонентське обслуговування, договірна документація.",
    image: "/assets/cards/practice-business-card.jpg",
    icon: BriefcaseBusiness,
  },
];

export const featuredPracticesRU: Practice[] = [
  {
    title: "Корпоративное право",
    text: "Сопровождаем бизнес в структуре, корпоративных сделках и изменениях.",
    image: "/assets/cards/practice-corporate-card.jpg",
    icon: Building2,
  },
  {
    title: "Судебные споры",
    text: "Представительство в судах всех инстанций, включая сложные конфликты.",
    image: "/assets/cards/practice-litigation-card.jpg",
    icon: Gavel,
  },
  {
    title: "Налоговое право",
    text: "Налоговое планирование, споры с фискальными органами.",
    image: "/assets/cards/practice-tax-card.jpg",
    icon: CircleDollarSign,
  },
  {
    title: "Сопровождение бизнеса",
    text: "Абонентское обслуживание, договорная документация.",
    image: "/assets/cards/practice-business-card.jpg",
    icon: BriefcaseBusiness,
  },
];

function buildContactHref(service?: string): AppHref {
  return service
    ? `/contacts?service=${encodeURIComponent(service)}` as AppHref
    : "/contacts";
}

export function HomePage({ navigate, route }: { navigate: Navigate; route: Route }) {
  const revealRef = useScrollReveal();
  const { t, language } = useLanguage();
  const practices = language === "RU" ? featuredPracticesRU : featuredPracticesUA;
  const practiceActionLabel = language === "RU" ? "Обсудить стратегию" : "Обговорити стратегію";
  const strategyRoute = language === "RU"
    ? ["Позиция", "Стратегия", "Действие", "Результат"]
    : ["Позиція", "Стратегія", "Дія", "Результат"];

  useEffect(() => {
    const root = revealRef.current;
    if (!root || typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const premiumEase = "power3.out";

      gsap.fromTo(
        ".home-motion-hero .hero-media img",
        { scale: 1.055, xPercent: 1.2, yPercent: -0.5 },
        { scale: 1.025, xPercent: 0, yPercent: 0, duration: 2.25, ease: "expo.out" }
      );

      gsap.fromTo(
        ".home-motion-hero-line span",
        { scaleX: 0, opacity: 0, transformOrigin: "left center" },
        { scaleX: 1, opacity: 1, duration: 1.15, ease: premiumEase, delay: 0.15 }
      );

      gsap.fromTo(
        ".home-motion-hero-line i",
        { scale: 0.72, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.75, ease: premiumEase, delay: 0.55 }
      );

      gsap.fromTo(
        ".home-motion-feature-node",
        { y: 8, opacity: 0, scale: 0.78 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.78,
          ease: premiumEase,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".feature-strip",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".home-motion-route-line",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.05,
          ease: premiumEase,
          scrollTrigger: {
            trigger: ".home-motion-route",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".home-motion-route-step",
        { y: 14, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          immediateRender: false,
          duration: 0.9,
          ease: premiumEase,
          stagger: 0.14,
          scrollTrigger: {
            trigger: ".home-motion-route",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".home-motion-case-card",
        { y: 24, opacity: 0, scale: 0.985 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          immediateRender: false,
          duration: 0.9,
          ease: premiumEase,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".home-practices",
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".home-motion-verdict",
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          immediateRender: false,
          duration: 1,
          ease: premiumEase,
          scrollTrigger: {
            trigger: ".home-motion-verdict",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".home-motion-verdict .quote-mark, .home-motion-verdict p, .home-motion-verdict .quote-signature-vector, .home-motion-verdict .quote-seal-vector",
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          immediateRender: false,
          duration: 0.85,
          ease: premiumEase,
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".home-motion-verdict",
            start: "top 82%",
            once: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, root);

    return () => {
      ctx.revert();
    };
  }, [language, revealRef]);

  return (
    <main ref={revealRef as any} className="page-frame home-frame">
      <section className="hero-section home-motion-hero">
        <div className="hero-media" aria-hidden="true">
          <picture>
            <source srcSet="/assets/optimized/home-hero-bg-960.webp 960w, /assets/optimized/home-hero-bg.webp 1400w" type="image/webp" />
            <img src="/assets/original/home-hero-bg.png" alt="" loading="eager" decoding="async" />
          </picture>
          <div className="hero-overlay" />
        </div>
        
        <Header tone="dark" navigate={navigate} currentRoute={route} showHome />

        <div className="hero-content">
          <h1 className="reveal reveal-up">
            {t("home.hero.title")}
          </h1>
          <div className="hero-strategic-line home-motion-hero-line reveal reveal-up reveal-delay-1" aria-hidden="true">
            <span />
            <i />
          </div>
          <p className="hero-subtitle reveal reveal-up reveal-delay-1">
            {t("home.hero.lead")}
          </p>
          <p className="hero-desc reveal reveal-up reveal-delay-2">
            {t("home.hero.copy")}
          </p>
          <div className="hero-actions reveal reveal-up reveal-delay-3">
            <LinkButton href="/contacts" navigate={navigate} className="btn solid-gold">
              {t("home.hero.consult")}
            </LinkButton>
            <LinkButton href="/practices" navigate={navigate} className="btn outline light">
              {t("home.hero.practices")}
            </LinkButton>
          </div>
        </div>
        <div className="hero-strategic-continuation" aria-hidden="true" />

        <div className="hero-curve" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,60 C400,120 1000,0 1440,60 L1440,120 L0,120 Z" fill="#f9f7f4" />
          </svg>
        </div>
      </section>

      <section className="feature-strip">
        <div className="values-strategic-line" aria-hidden="true">
          <span className="home-motion-feature-node" />
          <span className="home-motion-feature-node" />
          <span className="home-motion-feature-node" />
          <span className="home-motion-feature-node" />
        </div>
        <Feature icon={Target} title={t("home.feature1.title")} delayClass="reveal-delay-1">
          {t("home.feature1.desc")}
        </Feature>
        <Feature icon={LockKeyhole} title={t("home.feature2.title")} delayClass="reveal-delay-2">
          {t("home.feature2.desc")}
        </Feature>
        <Feature icon={CheckCircle2} title={t("home.feature3.title")} delayClass="reveal-delay-3">
          {t("home.feature3.desc")}
        </Feature>
        <Feature icon={Flower2} title={t("home.feature4.title")} delayClass="reveal-delay-4">
          {t("home.feature4.desc")}
        </Feature>
      </section>

      <section className="home-strategy-route home-motion-route reveal reveal-up" aria-label={language === "RU" ? "Стратегический маршрут" : "Стратегічний маршрут"}>
        <div className="strategy-route-line home-motion-route-line" aria-hidden="true" />
        {strategyRoute.map((label, idx) => (
          <div key={label} className="strategy-route-step home-motion-route-step">
            <span className="strategy-route-index">{String(idx + 1).padStart(2, "0")}</span>
            <span className="strategy-route-label">{label}</span>
          </div>
        ))}
      </section>

      <section className="home-practices">
        <div className="section-heading inline reveal reveal-up">
          <h2>{t("home.practices.title")}</h2>
          <LinkButton href="/practices" navigate={navigate} className="view-all">
            {t("home.practices.view_all")} <ArrowRight size={17} />
          </LinkButton>
        </div>
        <div className="practice-card-grid">
          {practices.map((card, idx) => (
            <div key={card.title}>
              <HomePracticeCard card={card} navigate={navigate} index={idx} actionLabel={practiceActionLabel} />
            </div>
          ))}
        </div>
      </section>

      <section className="quote-band home-motion-verdict">
        <div className="quote-mark">“</div>
        <p>
          {language === "RU" ? (
            <>
              Мы не просто консультируем.
              <br />
              Мы берем на себя ответственность
              <br />и доводим дела до результата.
            </>
          ) : (
            <>
              Ми не просто консультуємо.
              <br />
              Ми беремо на себе відповідальність
              <br />і доводимо справи до результату.
            </>
          )}
        </p>
        <SignatureMark className="quote-signature-vector" />
        <SealMark className="quote-seal-vector" />
      </section>
      <Footer navigate={navigate} className="home-site-footer" />
    </main>
  );
}

function HomePracticeCard({
  card,
  navigate,
  index,
  actionLabel,
}: {
  card: Practice;
  navigate: Navigate;
  index: number;
  actionLabel: string;
}) {
  const Icon = card.icon;
  const caseNo = String(index + 1).padStart(2, "0");

  return (
    <LinkButton
      href={buildContactHref(card.title)}
      navigate={navigate}
      className="image-card asset-card practice-card-link case-file-card home-motion-case-card"
      ariaLabel={`${actionLabel}: ${card.title}`}
    >
      <picture>
        <img
          src={card.image}
          alt=""
          width="1086"
          height="650"
          loading="eager"
          decoding="async"
        />
      </picture>
      <span className="image-card-shade" aria-hidden="true" />
      <span className="case-file-glint" aria-hidden="true" />
      <span className="case-file-meta">
        <span>PRACTICE FILE</span>
        <span>CASE {caseNo}</span>
      </span>
      <span className="case-file-icon" aria-hidden="true">
        <Icon size={18} strokeWidth={1.45} />
      </span>
      <span className="image-card-content case-file-panel">
        <span className="image-card-title">{card.title}</span>
        <span className="case-file-description">{card.text}</span>
        <span className="case-file-action">
          <span>{actionLabel}</span>
          <span className="round-arrow" aria-hidden="true">
            <ArrowRight size={17} strokeWidth={1.8} />
          </span>
        </span>
      </span>
    </LinkButton>
  );
}

function Feature({
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
    <article className={`feature reveal reveal-up ${delayClass}`}>
      <Icon size={34} strokeWidth={1.55} />
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
