export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message?: string;
}

export async function sendContactForm(data: ContactFormData): Promise<boolean> {
  const mockPayload = {
    name: data.name,
    phone: data.phone,
    hasEmail: Boolean(data.email),
    service: data.service || "",
    hasMessage: Boolean(data.message),
  };

  await new Promise((resolve) => setTimeout(resolve, 1200));

  console.info("Contact form mock submit:", mockPayload);
  return true;
}
