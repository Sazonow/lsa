import { BadgeCheck, ClipboardList, SearchCheck, UserRound } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const processStepsUA = [
  {
    number: "01",
    title: "Знайомство",
    text: "Аналізуємо ситуацію, слухаємо клієнта та визначаємо цілі.",
    icon: UserRound,
  },
  {
    number: "02",
    title: "Стратегія",
    text: "Розробляємо правову стратегію, узгоджуємо підхід і план дій.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Дії",
    text: "Реалізуємо стратегію, працюємо системно та юридично виважено.",
    icon: ClipboardList,
  },
  {
    number: "04",
    title: "Результат",
    text: "Досягаємо результату та забезпечуємо повну звітність.",
    icon: BadgeCheck,
  },
];

export const processStepsRU = [
  {
    number: "01",
    title: "Знакомство",
    text: "Анализируем ситуацию, слушаем клиента и определяем цели.",
    icon: UserRound,
  },
  {
    number: "02",
    title: "Стратегия",
    text: "Разрабатываем правовую стратегию, согласовываем подход и план действий.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Действия",
    text: "Реализуем стратегию, работаем системно и юридически взвешенно.",
    icon: ClipboardList,
  },
  {
    number: "04",
    title: "Результат",
    text: "Достигаем результата и обеспечиваем полную отчетность.",
    icon: BadgeCheck,
  },
];

export function ProcessSteps() {
  const { language } = useLanguage();
  const steps = language === "RU" ? processStepsRU : processStepsUA;
  const routeLabel = language === "RU" ? "STRATEGY ROUTE" : "STRATEGY ROUTE";

  return (
    <section className="process-steps page-pad">
      {steps.map((step, index) => (
        <article className={`process-step reveal reveal-up reveal-delay-${index + 1}`} key={step.number}>
          <div className="process-step-meta">
            <span>{routeLabel}</span>
            <span>STEP {step.number}</span>
          </div>
          <div className="process-icon">
            <step.icon size={30} strokeWidth={1.35} />
          </div>
          {index < steps.length - 1 && <span className="step-line" aria-hidden="true" />}
          <strong>{step.number}</strong>
          <h2>{step.title}</h2>
          <p>{step.text}</p>
        </article>
      ))}
    </section>
  );
}
