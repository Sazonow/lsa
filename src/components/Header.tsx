import { LinkButton } from "./LinkButton";
import { BrandLogo } from "./BrandLogo";
import { Tone, Navigate, Route } from "../types";
import { useLanguage } from "../context/LanguageContext";

interface NavConfig {
  href: Route;
  key: string;
}

const navConfig: NavConfig[] = [
  { href: "/about" as Route, key: "nav.about" },
  { href: "/practices" as Route, key: "nav.practices" },
  { href: "/experience" as Route, key: "nav.experience" },
  { href: "/process" as Route, key: "nav.process" },
  { href: "/contacts" as Route, key: "nav.contacts" },
];

const innerNavConfig: NavConfig[] = [
  { href: "/" as Route, key: "nav.home" },
  ...navConfig,
];

export function Header({
  tone,
  navigate,
  currentRoute,
  compact = false,
  thank = false,
  showHome = true,
}: {
  tone: Tone;
  navigate: Navigate;
  currentRoute: Route;
  compact?: boolean;
  thank?: boolean;
  showHome?: boolean;
}) {
  const { language, setLanguage, t } = useLanguage();
  const items = showHome ? innerNavConfig : navConfig;

  return (
    <header className={`site-header ${tone} ${compact ? "compact" : ""} ${showHome ? "with-home" : ""}`}>
      <LinkButton href="/" navigate={navigate} className="brand" ariaLabel="На головну">
        <BrandLogo compact={compact} prominent={thank} />
      </LinkButton>
      <nav aria-label="Головна навігація">
        {items.map((item) => (
          <LinkButton
            key={`${item.href}-${item.key}`}
            href={item.href}
            navigate={navigate}
            className={`nav-link ${currentRoute === item.href ? "active" : ""}`}
            ariaCurrent={currentRoute === item.href ? "page" : undefined}
          >
            {t(item.key)}
          </LinkButton>
        ))}
      </nav>
      <div className="header-right">
        <div className="lang-switcher" role="group" aria-label="Выбор языка">
          <button
            type="button"
            className={`lang-btn ${language === "UA" ? "active" : ""}`}
            onClick={() => setLanguage("UA")}
          >
            UA
          </button>
          <span className="lang-divider">/</span>
          <button
            type="button"
            className={`lang-btn ${language === "RU" ? "active" : ""}`}
            onClick={() => setLanguage("RU")}
          >
            RU
          </button>
        </div>
        <LinkButton
          href="/contacts"
          navigate={navigate}
          className={`header-cta ${currentRoute === "/contacts" ? "active" : ""}`}
        >
          {t("nav.consult")}
        </LinkButton>
      </div>
    </header>
  );
}
