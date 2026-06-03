const target = process.argv[2];

if (!target) {
  console.error("Usage: node scripts/verify-deployed-contact-live.mjs https://your-preview-url");
  process.exit(1);
}

let url;

try {
  url = new URL(target);
} catch {
  console.error(`Invalid URL: ${target}`);
  process.exit(1);
}

url.pathname = "/api/contact";
url.search = "";
url.hash = "";

const timestamp = new Date().toISOString();
const payload = {
  name: "QA Release Test",
  phone: "+380000000000",
  email: "qa-release@example.com",
  service: "Release verification",
  message: `Automated deployed contact delivery smoke test. Timestamp: ${timestamp}`,
};

try {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const contentType = response.headers.get("content-type") || "";
  const body = await response.text();
  let result = null;

  try {
    result = JSON.parse(body);
  } catch {
    // Keep null result for validation below.
  }

  if (!response.ok || !contentType.includes("application/json") || !result || result.ok !== true) {
    throw new Error(
      `live contact submit failed: status=${response.status}, content-type=${contentType || "none"}, payload=${JSON.stringify(result)}`,
    );
  }

  console.log("deployed live contact submit: ok");
  console.log(`test timestamp: ${timestamp}`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
