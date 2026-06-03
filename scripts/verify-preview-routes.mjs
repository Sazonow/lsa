import { spawn } from "node:child_process";
import http from "node:http";

const routes = ["/", "/about", "/practices", "/experience", "/process", "/contacts", "/thank-you"];
const port = 4173;
const host = "127.0.0.1";
const baseUrl = `http://${host}:${port}`;

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function requestRoute(route) {
  return new Promise((resolve, reject) => {
    const request = http.get(`${baseUrl}${route}`, (response) => {
      response.resume();
      response.on("end", () => resolve(response.statusCode));
    });

    request.on("error", reject);
    request.setTimeout(3000, () => {
      request.destroy(new Error(`Timed out requesting ${route}`));
    });
  });
}

async function waitForPreview() {
  const deadline = Date.now() + 15000;

  while (Date.now() < deadline) {
    try {
      const status = await requestRoute("/");
      if (status === 200) return;
    } catch {
      // Preview server is still starting.
    }

    await wait(300);
  }

  throw new Error("Preview server did not become ready in time");
}

const preview = spawn(
  process.platform === "win32" ? "npm.cmd" : "npm",
  ["run", "preview", "--", "--host", host, "--port", String(port)],
  {
    stdio: ["ignore", "pipe", "pipe"],
  },
);

let output = "";

preview.stdout.on("data", (chunk) => {
  output += chunk;
});

preview.stderr.on("data", (chunk) => {
  output += chunk;
});

try {
  await waitForPreview();

  for (const route of routes) {
    const status = await requestRoute(route);

    if (status !== 200) {
      throw new Error(`${route} returned ${status}`);
    }

    console.log(`${route}: 200`);
  }

  console.log("preview routes: ok");
} catch (error) {
  console.error(output.trim());
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
} finally {
  preview.kill("SIGTERM");
}
