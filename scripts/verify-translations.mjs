import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const SOURCE_DIR = "src";
const LANGUAGE_FILE = "src/context/LanguageContext.tsx";

function collectFiles(directory) {
  const files = [];

  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    const stats = statSync(path);

    if (stats.isDirectory()) {
      files.push(...collectFiles(path));
    } else if (/\.(ts|tsx)$/.test(entry)) {
      files.push(path);
    }
  }

  return files;
}

const usedKeys = new Set();

for (const file of collectFiles(SOURCE_DIR)) {
  const source = readFileSync(file, "utf8");

  for (const match of source.matchAll(/\bt\(["`]([^"`]+)["`]\)/g)) {
    usedKeys.add(match[1]);
  }
}

const languageSource = readFileSync(LANGUAGE_FILE, "utf8");
const knownKeys = new Set(
  [...languageSource.matchAll(/"([a-z0-9_.]+)"\s*:/gi)].map((match) => match[1]),
);

const missingKeys = [...usedKeys].filter((key) => !knownKeys.has(key)).sort();

if (missingKeys.length > 0) {
  console.error(`Missing translation keys:\n${missingKeys.map((key) => `- ${key}`).join("\n")}`);
  process.exit(1);
}

console.log(`translation keys: ok (${usedKeys.size} used, ${knownKeys.size} known)`);
