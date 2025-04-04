import { Footer, Header } from "@/components/ui";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50">
      <Header />
      <main className="w-full max-w-6xl flex-1 px-4 md:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
