import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "tt2ed1zq", // Your project ID from sanity.config.js
    dataset: "production", // Your dataset name
  },
});
