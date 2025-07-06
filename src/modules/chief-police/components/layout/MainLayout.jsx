import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import Footer from "@chief-police/components/layout/Footer";

const MainLayout = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="flex flex-1 flex-col gap-4 p-4 pb-0
                xl:flex-row
            ">
                <div className="block bg-green-200 border-2 border-green-600 rounded-full w-fit p-2
                    md:hidden
                ">
                    <Menu className="text-green-600 h-8 w-8" strokeWidth={3}/>
                </div>

                <div className="hidden
                    md:block w-full min-h-100 border rounded-2xl
                    xl:w-100
                ">

                </div>
                <main className="flex flex-1 border rounded-2xl">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
