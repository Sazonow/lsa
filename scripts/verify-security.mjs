import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const checks = [
  {
    name: "client telegram token",
    roots: ["src"],
    pattern: /VITE_TELEGRAM_BOT_TOKEN/,
  },
  {
    name: "client direct telegram api",
    roots: ["src"],
    pattern: /api\.telegram\.org/,
  },
  {
    name: "removed leaflet usage",
    roots: ["src", "package.json"],
    pattern: /leaflet|Leaflet/,
  },
  {
    name: "forbidden animation libraries",
    roots: ["src", "package.json"],
    pattern: /framer-motion|three|jquery|velocity/i,
  },
  {
    name: "debug output",
    roots: ["src", "api"],
    pattern: /console\.|debugger|alert\(/,
  },
];

function collectFiles(path) {
  const stats = statSync(path);

  if (stats.isFile()) return [path];

  const files = [];
  for (const entry of readdirSync(path)) {
    const childPath = join(path, entry);
    const childStats = statSync(childPath);

    if (childStats.isDirectory()) {
      files.push(...collectFiles(childPath));
    } else if (/\.(js|mjs|ts|tsx|json)$/.test(entry)) {
      files.push(childPath);
    }
  }

  return files;
}

const failures = [];

for (const check of checks) {
  for (const root of check.roots) {
    for (const file of collectFiles(root)) {
      const source = readFileSync(file, "utf8");
      const match = source.match(check.pattern);

      if (match) {
        failures.push(`${check.name}: ${file} contains ${JSON.stringify(match[0])}`);
      }
    }
  }
}

if (failures.length > 0) {
  console.error(`Security checks failed:\n${failures.map((failure) => `- ${failure}`).join("\n")}`);
  process.exit(1);
}

console.log("security checks: ok");
