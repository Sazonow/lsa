const routes = ["/", "/about", "/practices", "/experience", "/process", "/contacts", "/thank-you"];
const target = process.argv[2];

if (!target) {
  console.error("Usage: node scripts/verify-deployed-routes.mjs https://your-preview-url");
  process.exit(1);
}

let baseUrl;

try {
  baseUrl = new URL(target);
} catch {
  console.error(`Invalid URL: ${target}`);
  process.exit(1);
}

baseUrl.pathname = baseUrl.pathname.replace(/\/+$/, "");
baseUrl.search = "";
baseUrl.hash = "";

const failures = [];

for (const route of routes) {
  const url = new URL(route, baseUrl);

  try {
    const response = await fetch(url, { method: "GET", redirect: "follow" });
    const contentType = response.headers.get("content-type") || "";
    const body = await response.text();
    const hasAppRoot = body.includes('id="root"');

    if (!response.ok || !contentType.includes("text/html") || !hasAppRoot) {
      failures.push(`${route}: ${response.status}, content-type=${contentType || "none"}, appRoot=${hasAppRoot}`);
      continue;
    }

    console.log(`${route}: ${response.status}`);
  } catch (error) {
    failures.push(`${route}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (failures.length > 0) {
  console.error(`Deployed route checks failed:\n${failures.map((failure) => `- ${failure}`).join("\n")}`);
  process.exit(1);
}

console.log("deployed routes: ok");
