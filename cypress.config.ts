import { defineConfig } from "cypress";
import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_PUBLIC_MALGA_WEB_URL,
    fixturesFolder: "public/db",
    defaultCommandTimeout: 10000,
    requestTimeout: 20000,
    pageLoadTimeout: 60000,
  },
});
