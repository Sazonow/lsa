import handler from "../api/contact.js";

function makeResponse() {
  return {
    statusCode: 0,
    headers: {},
    body: "",
    setHeader(key, value) {
      this.headers[key.toLowerCase()] = value;
    },
    end(value) {
      this.body = value;
    },
  };
}

async function callHandler(request) {
  const response = makeResponse();
  await handler(request, response);
  return {
    statusCode: response.statusCode,
    body: JSON.parse(response.body),
  };
}

function assertResult(name, actual, expected) {
  const actualText = JSON.stringify(actual);
  const expectedText = JSON.stringify(expected);

  if (actualText !== expectedText) {
    throw new Error(`${name} failed: expected ${expectedText}, got ${actualText}`);
  }

  console.log(`${name}: ok`);
}

const originalFetch = globalThis.fetch;
const originalToken = process.env.TELEGRAM_BOT_TOKEN;
const originalChatId = process.env.TELEGRAM_CHAT_ID;

try {
  assertResult(
    "non-post method",
    await callHandler({ method: "GET", body: {} }),
    { statusCode: 405, body: { ok: false, error: "method_not_allowed" } },
  );

  assertResult(
    "invalid payload",
    await callHandler({ method: "POST", body: {} }),
    { statusCode: 400, body: { ok: false, error: "invalid_payload" } },
  );

  assertResult(
    "invalid json string payload",
    await callHandler({ method: "POST", body: "{bad" }),
    { statusCode: 400, body: { ok: false, error: "invalid_payload" } },
  );

  delete process.env.TELEGRAM_BOT_TOKEN;
  delete process.env.TELEGRAM_CHAT_ID;

  assertResult(
    "missing telegram env",
    await callHandler({ method: "POST", body: { name: "QA", phone: "+380" } }),
    { statusCode: 500, body: { ok: false, error: "telegram_not_configured" } },
  );

  process.env.TELEGRAM_BOT_TOKEN = "token";
  process.env.TELEGRAM_CHAT_ID = "chat";

  globalThis.fetch = async () => {
    throw new Error("network down");
  };

  assertResult(
    "telegram unreachable",
    await callHandler({ method: "POST", body: { name: "QA", phone: "+380" } }),
    { statusCode: 502, body: { ok: false, error: "telegram_unreachable" } },
  );

  globalThis.fetch = async () => ({ ok: false });

  assertResult(
    "telegram failed",
    await callHandler({ method: "POST", body: { name: "QA", phone: "+380" } }),
    { statusCode: 502, body: { ok: false, error: "telegram_failed" } },
  );

  let telegramMessage = "";
  globalThis.fetch = async (_url, options) => {
    telegramMessage = JSON.parse(options.body).text;
    return { ok: true };
  };

  assertResult(
    "valid json string payload",
    await callHandler({
      method: "POST",
      body: JSON.stringify({
        name: "QA",
        phone: "+380",
        email: "qa@example.com",
        service: "Test",
        message: "Hello",
      }),
    }),
    { statusCode: 200, body: { ok: true } },
  );

  if (!telegramMessage.includes("QA") || !telegramMessage.includes("+380")) {
    throw new Error("telegram message formatting failed");
  }

  console.log("telegram message formatting: ok");
} finally {
  globalThis.fetch = originalFetch;

  if (originalToken === undefined) {
    delete process.env.TELEGRAM_BOT_TOKEN;
  } else {
    process.env.TELEGRAM_BOT_TOKEN = originalToken;
  }

  if (originalChatId === undefined) {
    delete process.env.TELEGRAM_CHAT_ID;
  } else {
    process.env.TELEGRAM_CHAT_ID = originalChatId;
  }
}
