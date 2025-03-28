import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "@/routes.tsx";
import { RouterProvider } from "react-router";
import "@/globals.css";

// biome-ignore lint/style/noNonNullAssertion:
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
