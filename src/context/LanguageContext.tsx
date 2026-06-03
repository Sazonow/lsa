import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "UA" | "RU";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  UA: {
    // Navigation
    "brand.subtitle": "Адвокатське об'єднання",
    "nav.home": "Головна",
    "nav.about": "Про нас",
    "nav.practices": "Практики",
    "nav.experience": "Досвід",
    "nav.process": "Процес роботи",
    "nav.contacts": "Контакти",
    "nav.consult": "Консультація",

    // Footer
    "footer.rights": "© 2026 Адвокатське об'єднання «КОРТ РАЙДЕР». Всі права захищені.",
    "footer.tagline": "Право. Стратегія. Результат.",
    "footer.disclaimer": "Дані з форми використовуються лише для відповіді на запит.",

    // HomePage
    "home.hero.title": "Ваші права — наша стратегія.",
    "home.hero.lead": "Право. Стратегія. Результат.",
    "home.hero.copy": "Адвокатське об'єднання «КОРТ РАЙДЕР»: захищаємо інтереси бізнесу та приватних осіб у складних юридичних питаннях.",
    "home.hero.consult": "Отримати консультацію",
    "home.hero.practices": "Наші практики",
    "home.feature1.title": "Стратегічний підхід",
    "home.feature1.desc": "Ми обираємо рішення, що має правову базу і практичний ефект.",
    "home.feature2.title": "Конфіденційність",
    "home.feature2.desc": "Гарантуємо повну конфіденційність на кожному етапі роботи.",
    "home.feature3.title": "Досвід і результат",
    "home.feature3.desc": "Багаторічна практика і сотні успішних рішень у різних галузях права.",
    "home.feature4.title": "Індивідуальні рішення",
    "home.feature4.desc": "Рішення, що відповідають саме вашим цілям і бізнесу.",
    "home.practices.title": "Ключові практики",
    "home.practices.view_all": "Дивитися всі",
    "home.quote.text": "Ми не просто консультуємо. Ми беремо на себе відповідальність і доводимо справи до результату.",

    // AboutPage
    "about.title": "Про нас",
    "about.intro": "КОРТ РАЙДЕР — команда адвокатів із глибокою експертизою та практичним досвідом.",
    "about.copy": "Ми поєднуємо правову точність, бізнес-логику та людське ставлення, щоб клієнт отримував зрозумілий план і впевненість у кожному рішенні.",
    "about.badge": "років практики на вашому боці",
    "about.values.title": "Наші цінності",
    "about.values.p1.title": "Професіоналізм",
    "about.values.p1.desc": "Постійний розвиток і найвищі стандарти в професії.",
    "about.values.p2.title": "Чесність",
    "about.values.p2.desc": "Відкритість і сміливість у кожному нашому кроці та рішенні.",
    "about.values.p3.title": "Відповідальність",
    "about.values.p3.desc": "Беремо на себе результат і доводимо справи до кінця.",
    "about.values.p4.title": "Довіра",
    "about.values.p4.desc": "Будуємо довгострокові відносини, засновані на довірі.",
    "about.stats.s1": "років успішної практики",
    "about.stats.s2": "успішних справ",
    "about.stats.s3": "позитивних результатів для клієнтів",
    "about.stats.s4": "нагород та публікацій у виданнях",
    "about.mission.title": "Місія",
    "about.mission.desc": "Наша щоденна робота захищати, ускладнене робити простим, а складні правові рішення перетворювати на передбачуваний результат.",

    // PracticesPage
    "practices.title": "Наші практики",
    "practices.lead": "Комплексна правова підтримка для бізнесу та приватних осіб.",
    "practices.cta.title": "Не знайшли потрібний напрям?",
    "practices.cta.desc": "Ми працюємо з унікальними запитами та підбираємо найкращу правову стратегію.",
    "practices.cta.btn": "Обговорити вашу ситуацію",

    // ExperiencePage
    "experience.title": "Досвід, що говорить про результат",
    "experience.lead": "Приклади успішних справ та досягнень нашої команди.",
    "experience.quote": "Кожна справа — це довіра, яку ми виграємо разом.",

    // ProcessPage
    "process.title": "Як ми працюємо",
    "process.lead": "Прозорий процес для вашої впевненості.",
    "process.key": "Ми поруч на кожному етапі — від першої консультації до остаточного результату.",

    // ContactsPage
    "contacts.title": "Зв'яжіться з нами",
    "contacts.lead": "Ми готові допомогти вам знайти найкраще правове рішення для вашої ситуації.",
    "contacts.phone": "Телефон",
    "contacts.email": "Email",
    "contacts.instagram": "Instagram",
    "contacts.office": "Офіс",
    "contacts.office.address": "01001, м. Київ, вул. Хрещатик, 34,\nБЦ «Преміум», 7 поверх",

    // ContactForm
    "form.title": "Отримати консультацію",
    "form.name": "Ваше ім'я",
    "form.name.placeholder": "Введіть ваше ім'я",
    "form.phone": "Телефон",
    "form.phone.placeholder": "Введіть ваш телефон",
    "form.email": "Email",
    "form.email.placeholder": "Введіть ваш email",
    "form.service": "Сфера послуги",
    "form.service.placeholder": "Оберіть сферу послуги",
    "form.message": "Опишіть вашу ситуацію",
    "form.message.placeholder": "Розкажіть нам про вашу ситуацію",
    "form.privacy": "Я погоджуюсь на обробку персональних даних згідно з ",
    "form.privacy.link": "політикою конфіденційності",
    "form.error": "Заповніть обов'язкові поля: ім'я, телефон і згоду на обробку даних.",
    "form.error.send": "Не вдалося надіслати запит. Будь ласка, спробуйте ще раз пізніше.",
    "form.error.unexpected": "Сталася непередбачена помилка. Спробуйте пізніше або зв'яжіться телефоном.",
    "form.btn.send": "Надіслати запит",
    "form.btn.sending": "Надсилання...",

    // ThankYouPage
    "thankyou.title": "Дякуємо!",
    "thankyou.lead": "Ваш запит успішно відправлено. Ми зв'яжемося з вами найближчим часом, щоб обговорити вашу ситуацію.",
    "thankyou.btn": "На головну",
  },
  RU: {
    // Navigation
    "brand.subtitle": "Адвокатское объединение",
    "nav.home": "Главная",
    "nav.about": "О нас",
    "nav.practices": "Практики",
    "nav.experience": "Опыт",
    "nav.process": "Процесс работы",
    "nav.contacts": "Контакты",
    "nav.consult": "Консультация",

    // Footer
    "footer.rights": "© 2026 Адвокатское объединение «КОРТ РАЙДЕР». Все права защищены.",
    "footer.tagline": "Право. Стратегия. Результат.",
    "footer.disclaimer": "Данные из формы используются только для ответа на запрос.",

    // HomePage
    "home.hero.title": "Ваши права — наша стратегия.",
    "home.hero.lead": "Право. Стратегия. Результат.",
    "home.hero.copy": "Адвокатское объединение «КОРТ РАЙДЕР»: защищаем интересы бизнеса и частных лиц в сложных юридических вопросах.",
    "home.hero.consult": "Получить консультацию",
    "home.hero.practices": "Наши практики",
    "home.feature1.title": "Стратегический подход",
    "home.feature1.desc": "Мы выбираем решение, имеющее правовую базу и практический эффект.",
    "home.feature2.title": "Конфиденциальность",
    "home.feature2.desc": "Гарантируем полную конфиденциальность на каждом этапе работы.",
    "home.feature3.title": "Опыт и результат",
    "home.feature3.desc": "Многолетняя практика и сотни успешных решений в различных областях права.",
    "home.feature4.title": "Индивидуальные решения",
    "home.feature4.desc": "Решения, соответствующие именно вашим целям и бизнесу.",
    "home.practices.title": "Ключевые практики",
    "home.practices.view_all": "Смотреть все",
    "home.quote.text": "Мы не просто консультируем. Мы берем на себя ответственность и доводим дела до результата.",

    // AboutPage
    "about.title": "О нас",
    "about.intro": "КОРТ РАЙДЕР — команда адвокатов с глубокой экспертизой и практическим опытом.",
    "about.copy": "Мы сочетаем правовую точность, бизнес-логику и человеческое отношение, чтобы клиент получал понятный план и уверенность в каждом решении.",
    "about.badge": "лет практики на вашей стороне",
    "about.values.title": "Наши ценности",
    "about.values.p1.title": "Профессионализм",
    "about.values.p1.desc": "Постоянное развитие и наивысшие стандарты в профессии.",
    "about.values.p2.title": "Честность",
    "about.values.p2.desc": "Открытость и смелость в каждом нашем шаге и решении.",
    "about.values.p3.title": "Ответственность",
    "about.values.p3.desc": "Берем на себя результат и доводим дела до конца.",
    "about.values.p4.title": "Доверие",
    "about.values.p4.desc": "Строим долгосрочные отношения, основанные на доверии.",
    "about.stats.s1": "лет успешной практики",
    "about.stats.s2": "успешных дел",
    "about.stats.s3": "положительных результатов для клиентов",
    "about.stats.s4": "наград и публикаций в изданиях",
    "about.mission.title": "Миссия",
    "about.mission.desc": "Наша ежедневная работа — защищать, сложное делать простым, а сложные правовые решения превращать в предсказуемый результат.",

    // PracticesPage
    "practices.title": "Наши практики",
    "practices.lead": "Комплексная правовая поддержка для бизнеса и частных лиц.",
    "practices.cta.title": "Не нашли нужное направление?",
    "practices.cta.desc": "Мы работаем с уникальными запросами и подбираем лучшую правовую стратегию.",
    "practices.cta.btn": "Обсудить вашу ситуацию",

    // ExperiencePage
    "experience.title": "Опыт, говорящий о результате",
    "experience.lead": "Примеры успешных дел и достижений нашей команды.",
    "experience.quote": "Каждое дело — это доверие, которое мы выигрываем вместе.",

    // ProcessPage
    "process.title": "Как мы работаем",
    "process.lead": "Прозрачный процесс для вашей уверенности.",
    "process.key": "Мы рядом на каждом этапе — от первой консультации до окончательного результата.",

    // ContactsPage
    "contacts.title": "Свяжитесь с нами",
    "contacts.lead": "Мы готовы помочь вам найти лучшее правовое решение для вашей ситуации.",
    "contacts.phone": "Телефон",
    "contacts.email": "Email",
    "contacts.instagram": "Instagram",
    "contacts.office": "Офис",
    "contacts.office.address": "01001, г. Киев, ул. Крещатик, 34,\nБЦ «Премиум», 7 этаж",

    // ContactForm
    "form.title": "Получить консультацию",
    "form.name": "Ваше имя",
    "form.name.placeholder": "Введите ваше имя",
    "form.phone": "Телефон",
    "form.phone.placeholder": "Введите ваш телефон",
    "form.email": "Email",
    "form.email.placeholder": "Введите ваш email",
    "form.service": "Сфера услуги",
    "form.service.placeholder": "Выберите сферу услуги",
    "form.message": "Опишите вашу ситуацию",
    "form.message.placeholder": "Расскажите нам о вашей ситуации",
    "form.privacy": "Я соглашаюсь на обработку персональных данных согласно ",
    "form.privacy.link": "политике конфиденциальности",
    "form.error": "Заполните обязательные поля: имя, телефон и согласие на обработку данных.",
    "form.error.send": "Не удалось отправить запрос. Пожалуйста, попробуйте еще раз позже.",
    "form.error.unexpected": "Произошла непредвиденная ошибка. Попробуйте позже или свяжитесь по телефону.",
    "form.btn.send": "Отправить запрос",
    "form.btn.sending": "Отправка...",

    // ThankYouPage
    "thankyou.title": "Спасибо!",
    "thankyou.lead": "Ваш запрос успешно отправлен. Мы свяжемся с вами в ближайшее время, чтобы обсудить вашу ситуацию.",
    "thankyou.btn": "На главную",
  },
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);
const LANGUAGE_STORAGE_KEY = "court_rider_lang";

function isLanguage(value: unknown): value is Language {
  return value === "UA" || value === "RU";
}

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return isLanguage(saved) ? saved : "UA";
  } catch {
    return "UA";
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
      // Language switching should still work if storage is unavailable.
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
