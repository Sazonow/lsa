import { FormEvent, useEffect, useState } from "react";
import { Navigate } from "../types";
import { sendContactForm } from "../utils/contactService";
import { useLanguage } from "../context/LanguageContext";

export const serviceOptionsUA = [
  "Корпоративне право",
  "Супровід бізнесу",
  "Судові спори",
  "Трудове право",
  "Податкове право",
  "Нерухомість та будівництво",
  "Інтелектуальна власність",
  "Міжнародне право",
];

export const serviceOptionsRU = [
  "Корпоративное право",
  "Сопровождение бизнеса",
  "Судебные споры",
  "Трудовое право",
  "Налоговое право",
  "Недвижимость и строительство",
  "Интеллектуальная собственность",
  "Международное право",
];

export const serviceOptions = [...serviceOptionsUA, ...serviceOptionsRU];

export function ContactForm({
  navigate,
  initialService,
}: {
  navigate: Navigate;
  initialService: string;
}) {
  const { t, language } = useLanguage();
  const [service, setService] = useState(initialService);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const options = language === "RU" ? serviceOptionsRU : serviceOptionsUA;

  useEffect(() => {
    setService(initialService);
  }, [initialService]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setFormError(t("form.error"));
      form.reportValidity();
      return;
    }

    setFormError("");
    setIsSubmitting(true);

    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    try {
      const success = await sendContactForm(data);
      if (success) {
        form.reset();
        navigate("/thank-you");
      } else {
        setFormError(t("form.error.send"));
      }
    } catch (err) {
      setFormError(t("form.error.unexpected"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <h2>{t("form.title")}</h2>
      <label htmlFor="contact-name">
        {t("form.name")}
        <input
          id="contact-name"
          name="name"
          placeholder={t("form.name.placeholder")}
          autoComplete="name"
          required
          disabled={isSubmitting}
        />
      </label>
      <label htmlFor="contact-phone">
        {t("form.phone")}
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          placeholder={t("form.phone.placeholder")}
          autoComplete="tel"
          required
          disabled={isSubmitting}
        />
      </label>
      <label htmlFor="contact-email">
        {t("form.email")}
        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder={t("form.email.placeholder")}
          autoComplete="email"
          disabled={isSubmitting}
        />
      </label>
      <label htmlFor="contact-service">
        {t("form.service")}
        <select
          id="contact-service"
          name="service"
          value={service}
          onChange={(event) => setService(event.target.value)}
          disabled={isSubmitting}
        >
          <option value="">{t("form.service.placeholder")}</option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </label>
      <label htmlFor="contact-message">
        {t("form.message")}
        <textarea
          id="contact-message"
          name="message"
          placeholder={t("form.message.placeholder")}
          autoComplete="off"
          disabled={isSubmitting}
        />
      </label>
      <label className="checkbox-label" htmlFor="contact-privacy">
        <input
          id="contact-privacy"
          name="privacy"
          type="checkbox"
          required
          disabled={isSubmitting}
        />
        <span>
          {t("form.privacy")}
          <a href="#privacy-note">{t("form.privacy.link")}</a>
        </span>
      </label>
      {formError && (
        <p className="form-error" role="alert">
          {formError}
        </p>
      )}
      <button className="btn gold full" type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="submit-spinner-text">
            <span className="submit-spinner"></span>
            {t("form.btn.sending")}
          </span>
        ) : (
          t("form.btn.send")
        )}
      </button>
    </form>
  );
}
