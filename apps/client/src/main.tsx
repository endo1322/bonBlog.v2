import router from "@/routes.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "@bonblogv2/ui/globals.css";
import { queryClient } from "@/queries";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// biome-ignore lint/style/noNonNullAssertion:
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools buttonPosition="bottom-right" />
    </QueryClientProvider>
  </StrictMode>,
);
