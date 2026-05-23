import { ReactNode } from "react";
import { ArrowRight, Building2, Gavel, CircleDollarSign, BriefcaseBusiness, Target, LockKeyhole, CheckCircle2, Flower2, LucideIcon } from "lucide-react";
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
    imageWebp: "/assets/optimized/practice-corporate-clean.webp",
    imageWebpSmall: "/assets/optimized/practice-corporate-clean-640.webp",
    icon: Building2,
  },
  {
    title: "Судові спори",
    text: "Представництво в судах усіх інстанцій, включно зі складними конфліктами.",
    image: "/assets/cards/practice-litigation-card.jpg",
    imageWebp: "/assets/optimized/practice-litigation-clean.webp",
    imageWebpSmall: "/assets/optimized/practice-litigation-clean-640.webp",
    icon: Gavel,
  },
  {
    title: "Податкове право",
    text: "Податкове планування, спори з фіскальними органами.",
    image: "/assets/cards/practice-tax-card.jpg",
    imageWebp: "/assets/optimized/practice-tax-clean.webp",
    imageWebpSmall: "/assets/optimized/practice-tax-clean-640.webp",
    icon: CircleDollarSign,
  },
  {
    title: "Супровід бізнесу",
    text: "Абонентське обслуговування, договірна документація.",
    image: "/assets/cards/practice-business-card.jpg",
    imageWebp: "/assets/optimized/practice-business-clean.webp",
    imageWebpSmall: "/assets/optimized/practice-business-clean-640.webp",
    icon: BriefcaseBusiness,
  },
];

export const featuredPracticesRU: Practice[] = [
  {
    title: "Корпоративное право",
    text: "Сопровождаем бизнес в структуре, корпоративных сделках и изменениях.",
    image: "/assets/cards/practice-corporate-card.jpg",
    imageWebp: "/assets/optimized/practice-corporate-clean.webp",
    imageWebpSmall: "/assets/optimized/practice-corporate-clean-640.webp",
    icon: Building2,
  },
  {
    title: "Судебные споры",
    text: "Представительство в судах всех инстанций, включая сложные конфликты.",
    image: "/assets/cards/practice-litigation-card.jpg",
    imageWebp: "/assets/optimized/practice-litigation-clean.webp",
    imageWebpSmall: "/assets/optimized/practice-litigation-clean-640.webp",
    icon: Gavel,
  },
  {
    title: "Налоговое право",
    text: "Налоговое планирование, споры с фискальными органами.",
    image: "/assets/cards/practice-tax-card.jpg",
    imageWebp: "/assets/optimized/practice-tax-clean.webp",
    imageWebpSmall: "/assets/optimized/practice-tax-clean-640.webp",
    icon: CircleDollarSign,
  },
  {
    title: "Сопровождение бизнеса",
    text: "Абонентское обслуживание, договорная документация.",
    image: "/assets/cards/practice-business-card.jpg",
    imageWebp: "/assets/optimized/practice-business-clean.webp",
    imageWebpSmall: "/assets/optimized/practice-business-clean-640.webp",
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

  return (
    <main ref={revealRef as any} className="page-frame home-frame">
      <section className="hero-section">
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
          <div className="hero-strategic-line reveal reveal-up reveal-delay-1" aria-hidden="true">
            <span />
            <i />
          </div>
          <p className="hero-subtitle reveal reveal-up reveal-delay-1">
            Право. Стратегія. Результат.
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
          <span />
          <span />
          <span />
          <span />
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

      <section className="home-practices">
        <div className="section-heading inline reveal reveal-up">
          <h2>{t("home.practices.title")}</h2>
          <LinkButton href="/practices" navigate={navigate} className="view-all">
            {t("home.practices.view_all")} <ArrowRight size={17} />
          </LinkButton>
        </div>
        <div className="practice-card-grid">
          {practices.map((card, idx) => (
            <div key={card.title} className={`reveal reveal-scale reveal-delay-${idx + 1}`}>
              <HomePracticeCard card={card} navigate={navigate} />
            </div>
          ))}
        </div>
      </section>

      <section className="quote-band reveal reveal-up">
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

function HomePracticeCard({ card, navigate }: { card: Practice; navigate: Navigate }) {
  return (
    <LinkButton
      href={buildContactHref(card.title)}
      navigate={navigate}
      className="image-card asset-card practice-card-link"
      ariaLabel={`Discuss practice: ${card.title}`}
    >
      <picture>
        {card.imageWebp && (
          <source
            srcSet={`${card.imageWebpSmall ?? card.imageWebp} 640w, ${card.imageWebp} 1086w`}
            sizes="(max-width: 760px) calc(100vw - 44px), 200px"
            type="image/webp"
          />
        )}
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
      <span className="image-card-content">
        <span className="image-card-title">{card.title}</span>
        <span className="round-arrow" aria-hidden="true">
          <ArrowRight size={17} strokeWidth={1.8} />
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
