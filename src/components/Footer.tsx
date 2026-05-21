import { BrandLogo } from "./BrandLogo";
import { LinkButton } from "./LinkButton";
import { Navigate } from "../types";
import { useLanguage } from "../context/LanguageContext";

export function Footer({
  navigate,
  className = "",
}: {
  navigate: Navigate;
  className?: string;
}) {
  const { t } = useLanguage();

  return (
    <footer className={`site-footer ${className}`} id="privacy-note">
      <div>
        <BrandLogo compact />
      </div>
      <a href="tel:+380671234567">+38 (067) 123 45 67</a>
      <a href="mailto:info@court-rider.ua">info@court-rider.ua</a>
      <span>{t("footer.disclaimer")}</span>
      <LinkButton href="/contacts" navigate={navigate} className="footer-cta">
        {t("nav.contacts")}
      </LinkButton>
    </footer>
  );
}
