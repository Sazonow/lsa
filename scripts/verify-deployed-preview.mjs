const routes = ["/", "/about", "/practices", "/experience", "/process", "/contacts", "/thank-you"];
const target = process.argv[2];

if (!target) {
  console.error("Usage: node scripts/verify-deployed-preview.mjs https://your-preview-url");
  process.exit(1);
}

let baseUrl;

try {
  baseUrl = new URL(target);
} catch {
  console.error(`Invalid URL: ${target}`);
  process.exit(1);
}

baseUrl.search = "";
baseUrl.hash = "";

function makeUrl(pathname) {
  const url = new URL(baseUrl);
  url.pathname = pathname;
  url.search = "";
  url.hash = "";
  return url;
}

async function verifyRoute(route) {
  const response = await fetch(makeUrl(route), { method: "GET", redirect: "follow" });
  const contentType = response.headers.get("content-type") || "";
  const body = await response.text();
  const hasAppRoot = body.includes('id="root"');

  if (!response.ok || !contentType.includes("text/html") || !hasAppRoot) {
    throw new Error(`${route}: status=${response.status}, content-type=${contentType || "none"}, appRoot=${hasAppRoot}`);
  }

  console.log(`${route}: ${response.status}`);
}

async function requestContact(options) {
  const response = await fetch(makeUrl("/api/contact"), options);
  const contentType = response.headers.get("content-type") || "";
  const body = await response.text();
  let payload = null;

  try {
    payload = JSON.parse(body);
  } catch {
    // Keep null payload for validation below.
  }

  return {
    status: response.status,
    contentType,
    payload,
  };
}

function assertContactGuard(name, actual, expectedStatus, expectedError) {
  if (
    actual.status !== expectedStatus ||
    !actual.contentType.includes("application/json") ||
    !actual.payload ||
    actual.payload.ok !== false ||
    actual.payload.error !== expectedError
  ) {
    throw new Error(
      `${name}: status=${actual.status}, content-type=${actual.contentType || "none"}, payload=${JSON.stringify(actual.payload)}`,
    );
  }

  console.log(`${name}: ok`);
}

const failures = [];

for (const route of routes) {
  try {
    await verifyRoute(route);
  } catch (error) {
    failures.push(error instanceof Error ? error.message : String(error));
  }
}

try {
  assertContactGuard(
    "contact GET guard",
    await requestContact({ method: "GET" }),
    405,
    "method_not_allowed",
  );

  assertContactGuard(
    "contact empty POST guard",
    await requestContact({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    }),
    400,
    "invalid_payload",
  );
} catch (error) {
  failures.push(error instanceof Error ? error.message : String(error));
}

if (failures.length > 0) {
  console.error(`Deployed preview checks failed:\n${failures.map((failure) => `- ${failure}`).join("\n")}`);
  process.exit(1);
}

console.log("deployed preview: ok");
