import { existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const sourceFiles = ["index.html"];
const sourceRoots = ["src"];
const missingAssets = [];

function collectFiles(path) {
  const stats = statSync(path);

  if (stats.isFile()) return [path];

  const files = [];
  for (const entry of readdirSync(path)) {
    const childPath = join(path, entry);
    const childStats = statSync(childPath);

    if (childStats.isDirectory()) {
      files.push(...collectFiles(childPath));
    } else if (/\.(css|html|js|ts|tsx)$/.test(entry)) {
      files.push(childPath);
    }
  }

  return files;
}

for (const root of sourceRoots) {
  sourceFiles.push(...collectFiles(root));
}

const assetRefs = new Set();

for (const file of sourceFiles) {
  const source = await import("node:fs").then(({ readFileSync }) => readFileSync(file, "utf8"));

  for (const match of source.matchAll(/["'`](\/assets\/[^"'`)\s]+)["'`]/g)) {
    assetRefs.add(match[1]);
  }
}

for (const ref of assetRefs) {
  const publicPath = join("public", ref.replace(/^\//, ""));

  if (!existsSync(publicPath)) {
    missingAssets.push(`${ref} -> ${publicPath}`);
  }
}

if (missingAssets.length > 0) {
  console.error(`Missing runtime assets:\n${missingAssets.map((asset) => `- ${asset}`).join("\n")}`);
  process.exit(1);
}

const forbiddenDistPaths = [
  "dist/reference",
  "dist/.DS_Store",
  "dist/assets/original/document-pen-original.png",
  "dist/assets/original/dark-quote-panel.png",
];

const leakedDistPaths = forbiddenDistPaths.filter((path) => existsSync(path));

if (leakedDistPaths.length > 0) {
  console.error(`Forbidden production payload files found:\n${leakedDistPaths.map((path) => `- ${path}`).join("\n")}`);
  process.exit(1);
}

console.log(`runtime assets: ok (${assetRefs.size} references)`);
console.log("production payload exclusions: ok");
