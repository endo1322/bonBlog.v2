import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <main className="flex-1 px-4 md:px-8 max-w-7xl">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
