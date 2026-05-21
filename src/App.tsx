import { useEffect, useState } from "react";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { PracticesPage } from "./pages/PracticesPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { ProcessPage } from "./pages/ProcessPage";
import { ContactsPage } from "./pages/ContactsPage";
import { ThankYouPage } from "./pages/ThankYouPage";
import { serviceOptions } from "./components/ContactForm";
import { Route, AppLocation, RouteMeta, Navigate } from "./types";

const routes: Route[] = [
  "/",
  "/about",
  "/practices",
  "/experience",
  "/process",
  "/contacts",
  "/thank-you",
];

const routeMeta: Record<Route, RouteMeta> = {
  "/": {
    title: "КОРТ РАЙДЕР",
    description:
      "Адвокатське об'єднання КОРТ РАЙДЕР: стратегічний юридичний супровід бізнесу та приватних осіб.",
    navLabel: "Головна",
    tone: "dark",
    showHome: true,
  },
  "/about": {
    title: "Про нас | КОРТ РАЙДЕР",
    description:
      "Команда адвокатів КОРТ РАЙДЕР з досвідом у складних юридичних питаннях бізнесу та приватних клієнтів.",
    navLabel: "Про нас",
    tone: "light",
    showHome: true,
  },
  "/practices": {
    title: "Практики | КОРТ РАЙДЕР",
    description:
      "Корпоративне, податкове, трудове право, судові спори, супровід бізнесу, нерухомість та міжнародне право.",
    navLabel: "Практики",
    tone: "light",
    showHome: true,
  },
  "/experience": {
    title: "Досвід | КОРТ РАЙДЕР",
    description:
      "Приклади результативних юридичних справ та комплексного супроводу клієнтів КОРТ РАЙДЕР.",
    navLabel: "Досвід",
    tone: "light",
    showHome: true,
  },
  "/process": {
    title: "Процес роботи | КОРТ РАЙДЕР",
    description:
      "Прозорий процес юридичного супроводу: знайомство, стратегія, дії та результат.",
    navLabel: "Процес роботи",
    tone: "light",
    showHome: true,
  },
  "/contacts": {
    title: "Контакти | КОРТ РАЙДЕР",
    description:
      "Зв'яжіться з адвокатським об'єднанням КОРТ РАЙДЕР та отримайте юридичную консультацію.",
    navLabel: "Контакти",
    tone: "light",
    showHome: true,
  },
  "/thank-you": {
    title: "Дякуємо | КОРТ РАЙДЕР",
    description:
      "Ваш запит успішно відправлено. Команда КОРТ РАЙДЕР зв'яжеться з вами найближчим часом.",
    navLabel: "Дякуємо",
    tone: "light",
    showHome: true,
  },
};

function getRoute(): Route {
  const path = window.location.pathname as Route;
  return routes.includes(path) ? path : "/";
}

function getLocation(): AppLocation {
  return {
    route: getRoute(),
    search: window.location.search,
  };
}

function getSelectedService(search: string) {
  const service = new URLSearchParams(search).get("service") ?? "";
  return serviceOptions.includes(service) ? service : "";
}

function ensureMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function applyRouteMeta(route: Route) {
  const meta = routeMeta[route];
  const url = `${window.location.origin}${route}`;
  const image = `${window.location.origin}/assets/original/home-hero-bg.png`;

  document.title = meta.title;
  ensureMeta('meta[name="description"]', { name: "description", content: meta.description });
  ensureMeta('meta[property="og:title"]', { property: "og:title", content: meta.title });
  ensureMeta('meta[property="og:description"]', {
    property: "og:description",
    content: meta.description,
  });
  ensureMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
  ensureMeta('meta[property="og:url"]', { property: "og:url", content: url });
  ensureMeta('meta[property="og:image"]', { property: "og:image", content: image });
  ensureMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
  ensureMeta('meta[name="twitter:title"]', { name: "twitter:title", content: meta.title });
  ensureMeta('meta[name="twitter:description"]', {
    name: "twitter:description",
    content: meta.description,
  });

  const existingPreload = document.querySelector<HTMLLinkElement>("#hero-preload");
  if (route === "/" && !existingPreload) {
    const link = document.createElement("link");
    link.id = "hero-preload";
    link.rel = "preload";
    link.as = "image";
    link.href = "/assets/optimized/home-hero-bg.webp";
    document.head.appendChild(link);
  } else if (route !== "/" && existingPreload) {
    existingPreload.remove();
  }
}

export default function App() {
  const [location, setLocation] = useState<AppLocation>(getLocation);

  useEffect(() => {
    const onPopState = () => setLocation(getLocation());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    applyRouteMeta(location.route);
  }, [location.route]);

  const navigate: Navigate = (href) => {
    const url = new URL(href, window.location.origin);
    const nextRoute = routes.includes(url.pathname as Route) ? (url.pathname as Route) : "/";
    const nextPath = `${nextRoute}${url.search}`;
    const currentPath = `${window.location.pathname}${window.location.search}`;

    if (nextPath !== currentPath) {
      window.history.pushState({}, "", nextPath);
    }

    const updateDOM = () => {
      setLocation({ route: nextRoute, search: url.search });
    };

    if (!(document as any).startViewTransition) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      updateDOM();
    } else {
      (document as any).startViewTransition(() => {
        window.scrollTo({ top: 0 });
        updateDOM();
      });
    }
  };

  return (
    <div className="site-shell">
      {location.route === "/" && <HomePage navigate={navigate} route={location.route} />}
      {location.route === "/about" && <AboutPage navigate={navigate} route={location.route} />}
      {location.route === "/practices" && (
        <PracticesPage navigate={navigate} route={location.route} />
      )}
      {location.route === "/experience" && (
        <ExperiencePage navigate={navigate} route={location.route} />
      )}
      {location.route === "/process" && (
        <ProcessPage navigate={navigate} route={location.route} />
      )}
      {location.route === "/contacts" && (
        <ContactsPage
          navigate={navigate}
          route={location.route}
          initialService={getSelectedService(location.search)}
        />
      )}
      {location.route === "/thank-you" && (
        <ThankYouPage navigate={navigate} route={location.route} />
      )}
    </div>
  );
}
