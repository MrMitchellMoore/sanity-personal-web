import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  projectId: "xio14ca7",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-11-17",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemas,
  },
});

export default config;
