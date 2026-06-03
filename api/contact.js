const MAX_FIELD_LENGTH = 1200;

function clean(value, maxLength = MAX_FIELD_LENGTH) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function formatMessage(payload) {
  const lines = [
    "Новий запит з сайту КОРТ РАЙДЕР",
    "",
    `Ім'я: ${payload.name}`,
    `Телефон: ${payload.phone}`,
  ];

  if (payload.email) lines.push(`Email: ${payload.email}`);
  if (payload.service) lines.push(`Сфера: ${payload.service}`);
  if (payload.message) lines.push("", `Опис: ${payload.message}`);

  return lines.join("\n");
}

function getRequestBody(req) {
  if (typeof req.body === "string") {
    try {
      const parsed = JSON.parse(req.body);
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  }

  return req.body && typeof req.body === "object" ? req.body : {};
}

function sendJson(res, statusCode, body) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    sendJson(res, 405, { ok: false, error: "method_not_allowed" });
    return;
  }

  const body = getRequestBody(req);
  const payload = {
    name: clean(body.name, 140),
    phone: clean(body.phone, 80),
    email: clean(body.email, 180),
    service: clean(body.service, 180),
    message: clean(body.message, 1400),
  };

  if (!payload.name || !payload.phone) {
    sendJson(res, 400, { ok: false, error: "invalid_payload" });
    return;
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    sendJson(res, 500, { ok: false, error: "telegram_not_configured" });
    return;
  }

  let telegramResponse;

  try {
    telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatMessage(payload),
        disable_web_page_preview: true,
      }),
    });
  } catch (error) {
    sendJson(res, 502, { ok: false, error: "telegram_unreachable" });
    return;
  }

  if (!telegramResponse.ok) {
    sendJson(res, 502, { ok: false, error: "telegram_failed" });
    return;
  }

  sendJson(res, 200, { ok: true });
}
