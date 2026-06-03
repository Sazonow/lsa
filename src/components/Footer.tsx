import { BrandLogo } from "./BrandLogo";
import { LinkButton } from "./LinkButton";
import { AppHref, Navigate } from "../types";
import { useLanguage } from "../context/LanguageContext";

export function Footer({
  navigate,
  className = "",
}: {
  navigate: Navigate;
  className?: string;
}) {
  const { language, t } = useLanguage();
  const practiceLinks = language === "RU"
    ? ["Корпоративное право", "Судебные споры", "Налоговое право", "Сопровождение бизнеса"]
    : ["Корпоративне право", "Судові спори", "Податкове право", "Супровід бізнесу"];
  const companyLinks = [
    { href: "/about" as const, label: t("nav.about") },
    { href: "/experience" as const, label: t("nav.experience") },
    { href: "/process" as const, label: t("nav.process") },
    { href: "/contacts" as const, label: t("nav.contacts") },
  ];

  return (
    <footer className={`site-footer ${className}`} id="privacy-note">
      <div className="footer-brand">
        <BrandLogo compact />
        <p>{t("footer.tagline")}</p>
        <span>{t("footer.rights")}</span>
      </div>
      <div className="footer-col">
        <strong>{t("nav.practices")}</strong>
        {practiceLinks.map((label) => (
          <LinkButton
            key={label}
            href={`/contacts?service=${encodeURIComponent(label)}` as AppHref}
            navigate={navigate}
          >
            {label}
          </LinkButton>
        ))}
      </div>
      <div className="footer-col">
        <strong>{language === "RU" ? "Компания" : "Компанія"}</strong>
        {companyLinks.map((item) => (
          <LinkButton key={item.href} href={item.href} navigate={navigate}>
            {item.label}
          </LinkButton>
        ))}
      </div>
      <div className="footer-col footer-contact">
        <strong>{t("nav.contacts")}</strong>
        <a href="tel:+380671234567">+38 (067) 123 45 67</a>
        <a href="mailto:info@court-rider.ua">info@court-rider.ua</a>
        <span>{language === "RU" ? "г. Киев, ул. Крещатик, 34" : "м. Київ, вул. Хрещатик, 34"}</span>
      </div>
      <div className="footer-col footer-consult">
        <strong>{t("nav.consult")}</strong>
        <span>{t("footer.disclaimer")}</span>
        <LinkButton href="/contacts" navigate={navigate} className="footer-cta">
          {language === "RU" ? "Оставить запрос" : "Залишити запит"}
        </LinkButton>
      </div>
    </footer>
  );
}
