import { ReactNode, useLayoutEffect, useRef } from "react";
import {
  ArrowRight,
  Building2,
  Gavel,
  CircleDollarSign,
  BriefcaseBusiness,
  Target,
  LockKeyhole,
  CheckCircle2,
  Flower2,
  ShieldCheck,
  Home as HomeIcon,
  UserRound,
  Scale,
  Phone,
  Mail,
  Instagram,
  MapPin,
  LucideIcon,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LinkButton } from "../components/LinkButton";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { ProcessSteps } from "../components/ProcessSteps";
import { Timeline } from "../components/Timeline";
import { Navigate, Route, Practice, AppHref } from "../types";
import { useLanguage } from "../context/LanguageContext";
import { SignatureMark, SealMark, KeyMark } from "../components/BrandLogo";

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
  const pageRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();
  const practices = language === "RU" ? featuredPracticesRU : featuredPracticesUA;
  const practiceActionLabel = language === "RU" ? "Обсудить стратегию" : "Обговорити стратегію";
  const strategyRoute = language === "RU"
    ? ["Позиция", "Стратегия", "Действие", "Результат"]
    : ["Позиція", "Стратегія", "Дія", "Результат"];

  useLayoutEffect(() => {
    const root = pageRef.current;
    if (!root || typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    let mm: ReturnType<typeof gsap.matchMedia> | undefined;
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root);
      const premiumEase = "power3.out";
      const measuredEnd = (screens: number) => `+=${Math.round(window.innerHeight * screens)}`;

      mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: "(min-width: 861px)",
          isMobile: "(max-width: 860px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (mediaContext) => {
          const { isDesktop, reduceMotion } = mediaContext.conditions as {
            isDesktop: boolean;
            isMobile: boolean;
            reduceMotion: boolean;
          };

          const heroCopy = q(".home-motion-kicker, .home-motion-title, .home-motion-hero-line, .hero-subtitle, .hero-desc, .hero-actions");
          const features = q(".home-motion-feature");
          const featureIcons = q(".home-motion-feature-icon");
          const routePanel = q(".home-motion-route");
          const routeLine = q(".home-motion-route-line");
          const routeSteps = q(".home-motion-route-step");
          const practiceHeading = q(".home-practices .section-heading");
          const practiceCards = q(".home-motion-case-card");
          const verdict = q(".home-motion-verdict");
          const verdictDetails = q(".home-motion-verdict .quote-mark, .home-motion-verdict p, .home-motion-verdict .quote-signature-vector, .home-motion-verdict .quote-seal-vector");

          if (reduceMotion) {
            const motionTargets = [
              ...heroCopy,
              ...features,
              ...featureIcons,
              ...routePanel,
              ...routeLine,
              ...routeSteps,
              ...practiceHeading,
              ...practiceCards,
              ...verdict,
              ...verdictDetails,
            ];
            gsap.set(motionTargets, {
              clearProps: "all",
            });
            return;
          }

          gsap.set(".home-motion-hero .hero-media img", {
            scale: 1.045,
            xPercent: isDesktop ? 1.2 : 0,
            yPercent: -0.4,
          });

          const heroTl = gsap.timeline({ defaults: { ease: premiumEase } });
          heroTl
            .fromTo(
              ".home-motion-kicker",
              { y: 10, clipPath: "inset(0 84% 0 0)" },
              { y: 0, clipPath: "inset(0 0% 0 0)", duration: 0.9 },
              0.06
            )
            .fromTo(
              ".home-motion-title",
              { y: 20, clipPath: "inset(0 0 12% 0)" },
              { y: 0, clipPath: "inset(0 0 0% 0)", duration: 1.05, ease: "power4.out" },
              0.1
            )
            .fromTo(
              ".home-motion-hero-line span",
              { scaleX: 0, autoAlpha: 0, transformOrigin: "left center" },
              { scaleX: 1, autoAlpha: 1, duration: 0.95 },
              0.46
            )
            .fromTo(
              ".home-motion-hero-line i",
              { scale: 0.72, autoAlpha: 0 },
              { scale: 1, autoAlpha: 1, duration: 0.56 },
              0.7
            )
            .fromTo(
              ".hero-subtitle, .hero-desc, .hero-actions",
              { y: 14, clipPath: "inset(0 0 12% 0)" },
              {
                y: 0,
                clipPath: "inset(0 0 0% 0)",
                duration: 0.72,
                stagger: 0.11,
              },
              0.58
            )
            .to(
              ".home-motion-hero .hero-media img",
              { scale: 1.015, xPercent: 0, yPercent: 0, duration: 1.7, ease: "expo.out" },
              0
            );

          gsap.to(".home-motion-hero .hero-media img", {
            scale: isDesktop ? 1.085 : 1.045,
            yPercent: isDesktop ? 3.8 : 1.8,
            xPercent: isDesktop ? -1.2 : 0,
            ease: "none",
            scrollTrigger: {
              trigger: ".home-motion-hero",
              start: "top top",
              end: "bottom top",
              scrub: 1.2,
            },
          });

          gsap.to(".home-motion-hero .hero-overlay", {
            opacity: 0.92,
            ease: "none",
            scrollTrigger: {
              trigger: ".home-motion-hero",
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });

          gsap.set(featureIcons, { autoAlpha: 0, y: 10, scale: 0.86 });
          gsap.set(features, { autoAlpha: 0, y: 22, clipPath: "inset(0 0 18% 0)" });
          gsap.set(routePanel, { autoAlpha: 0, y: 24, clipPath: "inset(12% 0 12% 0 round 12px)" });
          gsap.set(routeLine, { scaleX: 0, transformOrigin: "left center" });
          gsap.set(routeSteps, { autoAlpha: 0, y: 16 });

          if (isDesktop) {
            const valuesTl = gsap.timeline({
              defaults: { ease: "power2.out" },
              scrollTrigger: {
                trigger: ".home-motion-values-stage",
                start: "top top",
                end: () => measuredEnd(1.65),
                scrub: 0.85,
                pin: true,
                anticipatePin: 1,
              },
            });

            features.forEach((feature, index) => {
              const icon = featureIcons[index];
              const at = [0, 0.2, 0.4, 0.6][index] ?? 0;
              if (icon) {
                valuesTl.to(icon, { autoAlpha: 1, y: 0, scale: 1, duration: 0.12 }, at);
              }
              valuesTl.to(feature, { autoAlpha: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 0.16 }, at + 0.04);
            });

            valuesTl.to(routePanel, { autoAlpha: 1, y: 0, clipPath: "inset(0% 0 0% 0 round 12px)", duration: 0.12 }, 0.72);

            routeSteps.forEach((step, index) => {
              const at = 0.76 + index * 0.06;
              valuesTl
                .to(routeLine, { scaleX: (index + 1) / routeSteps.length, duration: 0.07 }, at)
                .to(step, { autoAlpha: 1, y: 0, duration: 0.09 }, at + 0.02);
            });
          } else {
            features.forEach((feature, index) => {
              const icon = featureIcons[index];
              const featureTl = gsap.timeline({
                defaults: { ease: premiumEase },
                scrollTrigger: {
                  trigger: feature,
                  start: "top 86%",
                  end: "bottom 68%",
                  scrub: 0.65,
                },
              });
              if (icon) {
                featureTl.to(icon, { autoAlpha: 1, y: 0, scale: 1, duration: 0.2 }, 0);
              }
              featureTl.to(feature, { autoAlpha: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 0.34 }, 0.04);
            });

            const routeTl = gsap.timeline({
              defaults: { ease: "power2.out" },
              scrollTrigger: {
                trigger: ".home-motion-route",
                start: "top 82%",
                end: "bottom 52%",
                scrub: 0.65,
              },
            });

            routeTl.to(routePanel, { autoAlpha: 1, y: 0, clipPath: "inset(0% 0 0% 0 round 12px)", duration: 0.16 }, 0);

            routeSteps.forEach((step, index) => {
              const at = 0.12 + index * 0.22;
              routeTl
                .to(routeLine, { scaleX: (index + 1) / routeSteps.length, duration: 0.16 }, at)
                .to(step, { autoAlpha: 1, y: 0, duration: 0.18 }, at + 0.04);
            });
          }

          gsap.set(practiceCards, {
            autoAlpha: 0,
            y: isDesktop ? 58 : 28,
            scale: isDesktop ? 0.94 : 0.985,
            clipPath: "inset(18% 8% 18% 8% round 10px)",
          });
          practiceCards.forEach((card) => {
            const image = card.querySelector("img");
            if (image) {
              gsap.set(image, { scale: 1.08, yPercent: 4 });
            }
            gsap.set(card.querySelectorAll(".case-file-meta, .case-file-icon, .case-file-panel"), {
              autoAlpha: 0,
              y: 10,
            });
          });

          if (isDesktop) {
            const firstPracticeCard = practiceCards[0];
            if (firstPracticeCard) {
              const firstImage = firstPracticeCard.querySelector("img");
              gsap.set(firstPracticeCard, {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                clipPath: "inset(0% 0% 0% 0% round 10px)",
              });
              if (firstImage) {
                gsap.set(firstImage, { scale: 1, yPercent: 0 });
              }
              gsap.set(firstPracticeCard.querySelectorAll(".case-file-meta, .case-file-icon, .case-file-panel"), {
                autoAlpha: 1,
                y: 0,
              });
            }

            const practiceTl = gsap.timeline({
              defaults: { ease: "power3.out" },
              scrollTrigger: {
                trigger: ".home-practices",
                start: "top top",
                end: () => measuredEnd(2.75),
                scrub: 0.9,
                pin: true,
                anticipatePin: 1,
              },
            });

            practiceCards.forEach((card, index) => {
              if (index === 0) return;
              const at = 0.2 + (index - 1) * 0.28;
              const image = card.querySelector("img");
              practiceTl.to(
                card,
                {
                  autoAlpha: 1,
                  y: 0,
                  scale: 1,
                  clipPath: "inset(0% 0% 0% 0% round 10px)",
                  duration: 0.22,
                },
                at
              );
              if (image) {
                practiceTl.to(image, { scale: 1, yPercent: 0, duration: 0.24 }, at);
              }
              practiceTl.to(
                card.querySelectorAll(".case-file-meta, .case-file-icon, .case-file-panel"),
                { autoAlpha: 1, y: 0, duration: 0.14, stagger: 0.035 },
                at + 0.1
              );
            });
          } else {
            practiceCards.forEach((card) => {
              const image = card.querySelector("img");
              const cardTl = gsap.timeline({
                defaults: { ease: "power3.out" },
                scrollTrigger: {
                  trigger: card,
                  start: "top 88%",
                  end: "top 54%",
                  scrub: 0.65,
                },
              });
              cardTl.to(card, {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                duration: 0.34,
              }, 0);
              if (image) {
                cardTl.to(image, { scale: 1, yPercent: 0, duration: 0.34 }, 0);
              }
              cardTl.to(
                card.querySelectorAll(".case-file-meta, .case-file-icon, .case-file-panel"),
                { autoAlpha: 1, y: 0, duration: 0.2, stagger: 0.035 },
                0.16
              );
            });
          }

          gsap.set(verdict, { autoAlpha: 0, y: 30, clipPath: "inset(10% 0 10% 0)" });
          gsap.set(verdictDetails, { autoAlpha: 0, y: 14 });

          const quoteTl = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
              trigger: ".home-motion-verdict",
              start: isDesktop ? "top 72%" : "top 86%",
              end: isDesktop ? "bottom 42%" : "bottom 62%",
              scrub: 0.75,
            },
          });

          quoteTl
            .to(verdict, { autoAlpha: 1, y: 0, clipPath: "inset(0% 0 0% 0)", duration: 0.36 }, 0)
            .to(verdictDetails, { autoAlpha: 1, y: 0, duration: 0.34, stagger: 0.08 }, 0.16);

          requestAnimationFrame(() => ScrollTrigger.refresh());
        }
      );
    }, root);

    return () => {
      mm?.revert();
      ctx.revert();
    };
  }, [language]);

  return (
    <main ref={pageRef} className="page-frame home-frame">
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
          <div className="hero-kicker home-motion-kicker" aria-hidden="true">
            {language === "RU" ? "АДВОКАТСКОЕ ОБЪЕДИНЕНИЕ" : "АДВОКАТСЬКЕ ОБ'ЄДНАННЯ"}
          </div>
          <h1 className="home-motion-title">
            {t("home.hero.title")}
          </h1>
          <div className="hero-strategic-line home-motion-hero-line" aria-hidden="true">
            <span />
            <i />
          </div>
          <p className="hero-subtitle">
            {t("home.hero.lead")}
          </p>
          <p className="hero-desc">
            {t("home.hero.copy")}
          </p>
          <div className="hero-actions">
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

      <section className="home-values-stage home-motion-values-stage" aria-label={language === "RU" ? "Основания стратегии" : "Підстави стратегії"}>
        <div className="feature-strip">
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
        </div>

        <div className="home-strategy-route home-motion-route" aria-label={language === "RU" ? "Стратегический маршрут" : "Стратегічний маршрут"}>
          <div className="strategy-route-line home-motion-route-line" aria-hidden="true" />
          {strategyRoute.map((label, idx) => (
            <div key={label} className="strategy-route-step home-motion-route-step">
              <span className="strategy-route-index">{String(idx + 1).padStart(2, "0")}</span>
              <span className="strategy-route-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="practices" className="home-practices">
        <div className="section-heading inline">
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
      <LandingAbout />
      <LandingExperience />
      <LandingProcess />
      <LandingContacts navigate={navigate} />
      <Footer navigate={navigate} className="home-site-footer" />
    </main>
  );
}

function LandingAbout() {
  const { t } = useLanguage();

  return (
    <>
      <section id="about" className="about-hero page-pad home-landing-section">
        <div className="about-copy">
          <h1>{t("about.title")}</h1>
          <p className="intro">{t("about.intro")}</p>
          <p>{t("about.copy")}</p>
        </div>
        <div className="team-photo-wrap">
          <img
            src="/assets/reference-derived/about-team-reference.jpg"
            alt="Team Court Rider"
            width="712"
            height="704"
            loading="lazy"
            decoding="async"
          />
          <div className="experience-badge">
            <strong>10+</strong>
            <span>{t("about.badge")}</span>
          </div>
        </div>
      </section>

      <section className="values-panel page-pad">
        <div className="panel-title">
          <h2>{t("about.values.title")}</h2>
          <span />
        </div>
        <div className="values-grid">
          <Value icon={ShieldCheck} title={t("about.values.p1.title")}>
            {t("about.values.p1.desc")}
          </Value>
          <Value icon={LockKeyhole} title={t("about.values.p2.title")}>
            {t("about.values.p2.desc")}
          </Value>
          <Value icon={HomeIcon} title={t("about.values.p3.title")}>
            {t("about.values.p3.desc")}
          </Value>
          <Value icon={UserRound} title={t("about.values.p4.title")}>
            {t("about.values.p4.desc")}
          </Value>
        </div>
      </section>

      <section className="stats-row page-pad">
        <Stat value="10+" label={t("about.stats.s1")} />
        <Stat value="200+" label={t("about.stats.s2")} />
        <Stat value="98%" label={t("about.stats.s3")} />
        <Stat value="5" label={t("about.stats.s4")} />
      </section>

      <section className="mission page-pad">
        <div>
          <h2>{t("about.mission.title")}</h2>
          <p>{t("about.mission.desc")}</p>
        </div>
        <KeyMark className="mission-key-vector" />
      </section>
    </>
  );
}

function Value({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="value">
      <span className="icon-circle">
        <Icon size={24} strokeWidth={1.55} />
      </span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function LandingExperience() {
  const { t } = useLanguage();

  return (
    <>
      <section id="experience" className="experience-top page-pad home-landing-section">
        <div>
          <h1>{t("experience.title")}</h1>
          <p>{t("experience.lead")}</p>
        </div>
        <Scale className="watermark-scale" size={210} strokeWidth={0.55} aria-hidden="true" />
      </section>
      <Timeline />
      <section className="experience-quote">{t("experience.quote")}</section>
    </>
  );
}

function LandingProcess() {
  const { t } = useLanguage();

  return (
    <>
      <section id="process" className="process-top page-pad home-landing-section">
        <h1>{t("process.title")}</h1>
        <p>{t("process.lead")}</p>
      </section>
      <ProcessSteps />
      <section className="process-key">
        <p>{t("process.key")}</p>
        <KeyMark className="process-key-vector" />
      </section>
    </>
  );
}

function LandingContacts({ navigate }: { navigate: Navigate }) {
  const { t } = useLanguage();

  return (
    <section id="contacts" className="contacts-layout page-pad home-landing-section">
      <div className="contacts-info">
        <h1>
          {t("contacts.title").split("\n").map((line, idx) => (
            <span key={idx}>
              {line}
              {idx === 0 && <br />}
            </span>
          ))}
        </h1>
        <p>{t("contacts.lead")}</p>
        <div className="contact-list">
          <ContactLine icon={Phone} title={t("contacts.phone")} href="tel:+380671234567">
            +38 (067) 123 45 67
          </ContactLine>
          <ContactLine icon={Mail} title={t("contacts.email")} href="mailto:info@court-rider.ua">
            info@court-rider.ua
          </ContactLine>
          <ContactLine icon={Instagram} title={t("contacts.instagram")} href="https://instagram.com/court_rider_law">
            @court_rider_law
          </ContactLine>
          <ContactLine icon={MapPin} title={t("contacts.office")}>
            {t("contacts.office.address").split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                {idx === 0 && <br />}
              </span>
            ))}
          </ContactLine>
        </div>
        <span className="cr-watermark">CR</span>
      </div>
      <div className="contact-visual">
        <picture className="contact-justice-media" aria-hidden="true">
          <source srcSet="/assets/optimized/home-hero-bg-960.webp 960w, /assets/optimized/home-hero-bg.webp 1400w" type="image/webp" />
          <img src="/assets/original/home-hero-bg.png" alt="" loading="lazy" />
        </picture>
        <span className="contact-visual-arc" aria-hidden="true" />
        <span className="contact-visual-line" aria-hidden="true" />
        <ContactForm navigate={navigate} initialService="" />
      </div>
    </section>
  );
}

function ContactLine({
  icon: Icon,
  title,
  href,
  children,
}: {
  icon: LucideIcon;
  title: string;
  href?: string;
  children: ReactNode;
}) {
  return (
    <div className="contact-line">
      <span className="contact-icon" aria-hidden="true">
        <Icon size={20} strokeWidth={1.4} />
      </span>
      <div>
        <strong>{title}</strong>
        {href ? (
          <a href={href} className="contact-link">
            {children}
          </a>
        ) : (
          <span>{children}</span>
        )}
      </div>
    </div>
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
    <article className={`feature home-motion-feature ${delayClass}`}>
      <span className="feature-icon-frame home-motion-feature-icon" aria-hidden="true">
        <Icon size={34} strokeWidth={1.55} />
      </span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
