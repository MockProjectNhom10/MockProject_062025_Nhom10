import { Outlet } from "react-router-dom";
import Header from "@public-reporter/components/Header";
import Footer from "@public-reporter/components/Footer";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
