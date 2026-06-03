import { existsSync } from "node:fs";

const requiredReferences = [
  "references/mockup.jpg",
  "references/pages/01_home.png",
  "references/pages/02_about.png",
  "references/pages/03_practices.png",
  "references/pages/04_cases.png",
  "references/pages/05_process.png",
  "references/pages/06_contacts.png",
  "references/pages/07_thanks.png",
];

const missing = requiredReferences.filter((path) => !existsSync(path));

if (missing.length > 0) {
  console.error(`Missing reference files:\n${missing.map((path) => `- ${path}`).join("\n")}`);
  process.exit(1);
}

console.log(`reference files: ok (${requiredReferences.length} files)`);
