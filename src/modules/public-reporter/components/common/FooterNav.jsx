import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const FooterNav = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t bg-white px-6 py-3 shadow-md">
      <div className="mx-auto flex max-w-200 justify-end gap-4">
        <button className="flex items-center gap-1 font-semibold text-blue-600 hover:underline">
          <ArrowLeft className="h-6 w-6" />
          Back
        </button>
        <button className="flex items-center gap-1 font-semibold text-blue-600 hover:underline">
          Next
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default FooterNav;
