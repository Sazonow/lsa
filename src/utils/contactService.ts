export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message?: string;
}

function isDevMode() {
  return Boolean((import.meta as ImportMeta & { env?: { DEV?: boolean } }).env?.DEV);
}

async function hasSuccessfulJsonResponse(response: Response): Promise<boolean> {
  if (!response.ok) return false;

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) return false;

  const payload = await response.json().catch(() => null);
  return Boolean(payload && typeof payload === "object" && "ok" in payload && payload.ok === true);
}

async function mockSubmit(): Promise<boolean> {
  await new Promise((resolve) => setTimeout(resolve, 700));
  return true;
}

export async function sendContactForm(data: ContactFormData): Promise<boolean> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (await hasSuccessfulJsonResponse(response)) return true;

    if (isDevMode() && response.status === 404) {
      return mockSubmit();
    }

    return false;
  } catch (error) {
    if (isDevMode()) {
      return mockSubmit();
    }

    return false;
  }
}
