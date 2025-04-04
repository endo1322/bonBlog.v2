import router from "@/routes.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "@bonblogv2/ui/globals.css";

// biome-ignore lint/style/noNonNullAssertion:
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
