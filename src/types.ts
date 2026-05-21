import type { LucideIcon } from "lucide-react";

export type Route =
  | "/"
  | "/about"
  | "/practices"
  | "/experience"
  | "/process"
  | "/contacts"
  | "/thank-you";

export type Tone = "dark" | "light";

export type AppHref = Route | `${Route}?${string}`;

export type Navigate = (href: AppHref) => void;

export type AppLocation = {
  route: Route;
  search: string;
};

export type RouteMeta = {
  title: string;
  description: string;
  navLabel: string;
  tone: Tone;
  showHome: boolean;
};

export type Practice = {
  title: string;
  text: string;
  image?: string;
  imageWebp?: string;
  imageWebpSmall?: string;
  icon: LucideIcon;
};
