import { useLanguage } from "../context/LanguageContext";

export const experienceItemsUA = [
  {
    year: "2024",
    title: "Захист інтересів клієнта у високій угоді на суму 45 млн грн.",
    text: "Супровід перемовин, структури та правової безпеки.",
  },
  {
    year: "2023",
    title: "Супровід M&A угоди у сфері IT на суму понад 12 млн USD.",
    text: "Повний юридичний супровід угоди, due diligence, структурування.",
  },
  {
    year: "2023",
    title: "Стягнення заборгованості у господарському спорі.",
    text: "Клієнт отримав не лише рішення, а й реальне виконання.",
  },
  {
    year: "2022",
    title: "Захист клієнта у кримінальному провадженні економічної спрямованості.",
    text: "Провадження закрито за відсутністю складу злочину.",
  },
  {
    year: "2021",
    title: "Супровід аграрного проєкту на всіх етапах.",
    text: "Юридичний супровід від придбання землі до введення об'єкта в експлуатацію.",
  },
];

export const experienceItemsRU = [
  {
    year: "2024",
    title: "Защита интересов клиента в крупной сделке на сумму 45 млн грн.",
    text: "Сопровождение переговоров, структуры и правовой безопасности.",
  },
  {
    year: "2023",
    title: "Сопровождение M&A сделки в сфере IT на сумму более 12 млн USD.",
    text: "Полное юридическое сопровождение сделки, due diligence, структурирование.",
  },
  {
    year: "2023",
    title: "Взыскание задолженности в хозяйственном споре.",
    text: "Клиент получил не только решение, но и реальное исполнение.",
  },
  {
    year: "2022",
    title: "Защита клиента в уголовном производстве экономической направленности.",
    text: "Производство закрыто за отсутствием состава преступления.",
  },
  {
    year: "2021",
    title: "Сопровождение аграрного проекта на всех этапах.",
    text: "Юридическое сопровождение от приобретения земли до ввода объекта в эксплуатацию.",
  },
];

export function Timeline() {
  const { language } = useLanguage();
  const items = language === "RU" ? experienceItemsRU : experienceItemsUA;
  const evidenceLabel = language === "RU" ? "EVIDENCE FILE" : "EVIDENCE FILE";
  const roleLabel = language === "RU" ? "Роль и ценность" : "Роль і цінність";

  return (
    <section className="timeline page-pad">
      {items.map((item, index) => (
        <article className="timeline-row reveal reveal-up" key={`${item.year}-${item.title}`}>
          <div className="timeline-year">
            <span>{item.year}</span>
            <i aria-hidden="true">{String(index + 1).padStart(2, "0")}</i>
          </div>
          <div className="timeline-card">
            <div className="timeline-card-meta">
              <span>{evidenceLabel}</span>
              <span>CASE {String(index + 1).padStart(2, "0")}</span>
            </div>
            <h2>{item.title}</h2>
            <div className="timeline-card-grid">
              <p>
                <span>{roleLabel}</span>
                {item.text}
              </p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
