import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/visual",
  timeout: 30000,
  retries: 0,
  reporter: [["json", { outputFile: "reports/playwright-results.json" }], ["list"]],
  use: {
    baseURL: process.env.BASE_URL || "http://localhost:3000",
    screenshot: "on",
    video: "off",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: process.env.DEV_COMMAND || "npm run dev",
    url: process.env.BASE_URL || "http://localhost:3000",
    reuseExistingServer: true,
    timeout: 30000,
  },
  snapshotDir: "./tests/visual/baselines",
  outputDir: "./tests/visual/output",
});
