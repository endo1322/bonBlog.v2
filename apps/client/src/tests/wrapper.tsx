import QueryClientWrapper from "@/tests/tanstack";
import { MemoryRouter } from "react-router";

export const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <MemoryRouter>
      <QueryClientWrapper>{children}</QueryClientWrapper>
    </MemoryRouter>
  );
};

export default TestWrapper;
