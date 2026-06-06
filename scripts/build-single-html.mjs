import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const outputDir = path.join(root, "single-html");
const outputFile = path.join(outputDir, "kort-rider-single.html");

const mimeByExtension = new Map([
  [".css", "text/css"],
  [".js", "text/javascript"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".svg", "image/svg+xml"],
  [".json", "application/json"],
  [".ico", "image/x-icon"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
]);

function walkFiles(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const fullPath = path.join(dir, entry);
    return statSync(fullPath).isDirectory() ? walkFiles(fullPath) : [fullPath];
  });
}

function mimeFor(filePath) {
  return mimeByExtension.get(path.extname(filePath).toLowerCase()) ?? "application/octet-stream";
}

function dataUri(filePath) {
  const content = readFileSync(filePath);
  return `data:${mimeFor(filePath)};base64,${content.toString("base64")}`;
}

function inlineAssetUrls(source, assetMap) {
  let result = source;

  for (const [urlPath, uri] of assetMap) {
    result = result.split(urlPath).join(uri);
    result = result.split(urlPath.slice(1)).join(uri);
  }

  return result;
}

execFileSync("npm", ["run", "build"], {
  cwd: root,
  stdio: "inherit",
});

const assetsDir = path.join(distDir, "assets");
const assetMap = new Map(
  walkFiles(assetsDir).map((filePath) => {
    const rel = path.relative(distDir, filePath).split(path.sep).join("/");
    return [`/${rel}`, dataUri(filePath)];
  }),
);

let html = readFileSync(path.join(distDir, "index.html"), "utf8");

html = html.replace(
  /\s*<script>\s*if \(window\.location\.protocol === "file:"\) \{[\s\S]*?window\.location\.replace\("http:\/\/127\.0\.0\.1:4173\/"\);[\s\S]*?\}\s*<\/script>/,
  "",
);

html = html.replace(
  /<link rel="stylesheet" crossorigin href="([^"]+)">/g,
  (_match, href) => {
    const cssPath = path.join(distDir, href.replace(/^\//, ""));
    const css = inlineAssetUrls(readFileSync(cssPath, "utf8"), assetMap);
    return `<style data-inline-from="${href}">\n${css}\n</style>`;
  },
);

html = html.replace(
  /<script type="module" crossorigin src="([^"]+)"><\/script>/g,
  (_match, src) => {
    const jsPath = path.join(distDir, src.replace(/^\//, ""));
    const js = inlineAssetUrls(readFileSync(jsPath, "utf8"), assetMap);
    return `<script type="module" data-inline-from="${src}">\n${js}\n</script>`;
  },
);

html = inlineAssetUrls(html, assetMap);
html = html.replace(
  "</head>",
  `  <script>
      window.__COURT_RIDER_SINGLE_HTML__ = true;
    </script>
  </head>`,
);

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, html);

console.log(`Single HTML written to ${path.relative(root, outputFile)}`);
