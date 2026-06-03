import { Phone, Mail, Instagram, MapPin, LucideIcon } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { Navigate, Route } from "../types";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLanguage } from "../context/LanguageContext";

export function ContactsPage({
  navigate,
  route,
  initialService,
}: {
  navigate: Navigate;
  route: Route;
  initialService: string;
}) {
  const revealRef = useScrollReveal();
  const { t } = useLanguage();

  return (
    <main ref={revealRef as any} className="page-frame inner-page contacts-page">
      <Header tone="light" navigate={navigate} currentRoute={route} compact showHome />
      <section className="contacts-layout page-pad">
        <div className="contacts-info reveal reveal-left">
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
        <div className="contact-visual reveal reveal-right">
          <picture className="contact-justice-media" aria-hidden="true">
            <source srcSet="/assets/optimized/home-hero-bg-960.webp 960w, /assets/optimized/home-hero-bg.webp 1400w" type="image/webp" />
            <img src="/assets/original/home-hero-bg.png" alt="" loading="lazy" />
          </picture>
          <span className="contact-visual-arc" aria-hidden="true" />
          <span className="contact-visual-line" aria-hidden="true" />
          <ContactForm navigate={navigate} initialService={initialService} />
        </div>
      </section>
      <Footer navigate={navigate} />
    </main>
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
  children: React.ReactNode;
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
