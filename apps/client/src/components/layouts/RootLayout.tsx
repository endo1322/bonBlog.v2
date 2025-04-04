import Footer from "@/components/ui/Footer";
import { Outlet } from "react-router";
import Header from "../ui/Header";

export const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50">
      <Header />
      <main className="max-w-6xl flex-1 px-4 md:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
