import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "Portfolio Studio",
  projectId: "tt2ed1zq",
  dataset: "production",
  plugins: [
    deskTool({
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: (S, { schemaType }) => {
        // Only show preview for certain schema types
        if (["project"].includes(schemaType)) {
          return S.document().views([
            S.view.form(),
            S.view
              .component(() => React.createElement("div", null, "Preview"))
              .title("Preview"),
          ]);
        }
        return null;
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
