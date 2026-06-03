const target = process.argv[2];

if (!target) {
  console.error("Usage: node scripts/verify-deployed-contact.mjs https://your-preview-url");
  process.exit(1);
}

let baseUrl;

try {
  baseUrl = new URL(target);
} catch {
  console.error(`Invalid URL: ${target}`);
  process.exit(1);
}

baseUrl.pathname = "/api/contact";
baseUrl.search = "";
baseUrl.hash = "";

async function requestContact(options) {
  const response = await fetch(baseUrl, options);
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

function assertJsonResult(name, actual, expectedStatus, expectedError) {
  if (
    actual.status !== expectedStatus ||
    !actual.contentType.includes("application/json") ||
    !actual.payload ||
    actual.payload.ok !== false ||
    actual.payload.error !== expectedError
  ) {
    throw new Error(
      `${name} failed: status=${actual.status}, content-type=${actual.contentType || "none"}, payload=${JSON.stringify(actual.payload)}`,
    );
  }

  console.log(`${name}: ok`);
}

try {
  assertJsonResult(
    "deployed non-post method",
    await requestContact({ method: "GET" }),
    405,
    "method_not_allowed",
  );

  assertJsonResult(
    "deployed invalid payload",
    await requestContact({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    }),
    400,
    "invalid_payload",
  );

  console.log("deployed contact endpoint: ok");
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
