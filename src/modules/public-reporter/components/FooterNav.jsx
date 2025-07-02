import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const FooterNav = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md px-6 py-3 z-50">
            <div className="max-w-200 mx-auto flex justify-end gap-4">
                <button className="flex items-center gap-1 text-blue-600 font-semibold hover:underline">
                    <ArrowLeft className="w-6 h-6" />
                    Back
                </button>
                <button className="flex items-center gap-1 text-blue-600 font-semibold hover:underline">
                    Next
                    <ArrowRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default FooterNav;
