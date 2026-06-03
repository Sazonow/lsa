import { ArrowRight, FileSignature, Gavel, Globe2, Home, Landmark, Scale, Sparkles, UsersRound } from "lucide-react";
import { LinkButton } from "../components/LinkButton";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Navigate, Route, Practice, AppHref } from "../types";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLanguage } from "../context/LanguageContext";

export const practiceListUA: Practice[] = [
  {
    title: "Corporate Law / Міжнародний бізнес",
    text: "Супроводжуємо бізнес у структурі, корпоративних угодах та змінах на глобальному рівні.",
    icon: Globe2,
  },
  {
    title: "Супровід бізнесу",
    text: "Абонентське обслуговування, договірна документація, супровід поточних операцій.",
    icon: FileSignature,
  },
  {
    title: "Судові спори",
    text: "Представництво в судах усіх інстанцій, включно зі складними господарськими та цивільними конфліктами.",
    icon: Gavel,
  },
  {
    title: "Трудове право",
    text: "Оформлення трудових відносин, конфлікти, розірвання та трудовий аудит.",
    icon: UsersRound,
  },
  {
    title: "Податкове право",
    text: "Податкове планування, захист у спорах з фіскальними та іншими контролюючими органами.",
    icon: Landmark,
  },
  {
    title: "Нерухомість та будівництво",
    text: "Правовий супровід будівництва, структурування та оформлення угод з нерухомістю.",
    icon: Home,
  },
  {
    title: "Інтелектуальна власність",
    text: "Реєстрація прав, захист авторських, торгових, патентних і цифрових марок.",
    icon: Sparkles,
  },
  {
    title: "Міжнародне право",
    text: "Супровід зовнішньоекономічної діяльності, транскордонних угод, інвестицій та арбітражу.",
    icon: Scale,
  },
];

export const practiceListRU: Practice[] = [
  {
    title: "Corporate Law / Международный бизнес",
    text: "Сопровождаем бизнес в структуре, корпоративных сделках и изменениях на глобальном уровне.",
    icon: Globe2,
  },
  {
    title: "Сопровождение бизнеса",
    text: "Абонентское обслуживание, договорная документация, сопровождение текущих операций.",
    icon: FileSignature,
  },
  {
    title: "Судебные споры",
    text: "Представительство в судах всех инстанций, включая сложные хозяйственные и гражданские конфликты.",
    icon: Gavel,
  },
  {
    title: "Трудовое право",
    text: "Оформление трудовых отношений, конфликты, увольнения и трудовой аудит.",
    icon: UsersRound,
  },
  {
    title: "Налоговое право",
    text: "Налоговое планирование, защита в спорах с фискальными и другими контролирующими органами.",
    icon: Landmark,
  },
  {
    title: "Недвижимость и строительство",
    text: "Юридическое сопровождение строительства, структурирование и оформление сделок с недвижимостью.",
    icon: Home,
  },
  {
    title: "Интеллектуальная собственность",
    text: "Регистрация прав, защита авторских, товарных знаков, патентных и цифровых марок.",
    icon: Sparkles,
  },
  {
    title: "Международное право",
    text: "Сопровождение внешнеэкономической деятельности, трансграничных сделок, инвестиций и арбитража.",
    icon: Scale,
  },
];

function buildContactHref(service?: string): AppHref {
  return service
    ? `/contacts?service=${encodeURIComponent(service)}` as AppHref
    : "/contacts";
}

export function PracticesPage({ navigate, route }: { navigate: Navigate; route: Route }) {
  const revealRef = useScrollReveal();
  const { t, language } = useLanguage();
  const list = language === "RU" ? practiceListRU : practiceListUA;

  return (
    <main ref={revealRef as any} className="page-frame inner-page practices-page">
      <Header tone="light" navigate={navigate} currentRoute={route} compact showHome />
      <section className="practices-top page-pad">
        <h1>{t("practices.title")}</h1>
        <p>{t("practices.lead")}</p>
      </section>
      <section className="practice-list page-pad">
        {list.map((item, idx) => (
          <div key={item.title} className={`reveal reveal-up reveal-delay-${(idx % 4) + 1}`}>
            <PracticeRow item={item} navigate={navigate} index={idx} actionLabel={t("practices.cta.btn")} />
          </div>
        ))}
      </section>
      <section className="practice-cta page-pad reveal reveal-up">
        <div>
          <h2>{t("practices.cta.title")}</h2>
          <p>{t("practices.cta.desc")}</p>
          <LinkButton href="/contacts" navigate={navigate} className="btn gold small">
            {t("practices.cta.btn")}
          </LinkButton>
        </div>
        <picture>
          <source
            srcSet="/assets/optimized/document-pen-original-640.webp 640w, /assets/optimized/document-pen-original.webp 1086w"
            sizes="(max-width: 760px) calc(100vw - 36px), 360px"
            type="image/webp"
          />
          <img
            src="/assets/optimized/document-pen-original.webp"
            alt=""
            width="1086"
            height="1448"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </section>
      <Footer navigate={navigate} />
    </main>
  );
}

function PracticeRow({
  item,
  navigate,
  index,
  actionLabel,
}: {
  item: Practice;
  navigate: Navigate;
  index: number;
  actionLabel: string;
}) {
  const caseNo = String(index + 1).padStart(2, "0");

  return (
    <LinkButton
      href={buildContactHref(item.title)}
      navigate={navigate}
      className="practice-row"
      ariaLabel={`${actionLabel}: ${item.title}`}
    >
      <div className="practice-row-icon">
        <item.icon size={30} strokeWidth={1.35} />
      </div>
      <div>
        <span className="practice-row-meta">
          <span>PRACTICE</span>
          <span>CASE {caseNo}</span>
        </span>
        <h2>{item.title}</h2>
        <p>{item.text}</p>
      </div>
      <span className="practice-row-action" aria-hidden="true">
        <ArrowRight size={16} />
      </span>
    </LinkButton>
  );
}
