import React from "react";
import { MessageSquareText, Users, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Help = () => {
  const navigate = useNavigate();

  const handleNavigateReport = () => {
    navigate("report/step1");
  };

  const helpItems = [
    {
      icon: MessageSquareText,
      text: "Tell us what happened.",
    },
    {
      icon: Users,
      text: "Your contribution & our mission.",
    },
    {
      icon: Shield,
      text: "Protect yourself and others.",
    },
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="tablet:text-3xl desktop:text-4xl mb-12 text-center text-2xl font-bold text-gray-800">
          How You Can Help?
        </h2>

        <div className="tablet:grid-cols-2 desktop:grid-cols-3 mb-12 grid grid-cols-1 gap-6">
          {helpItems.map((item, index) => (
            <div
              key={index}
              className="flex h-[280px] flex-col items-center justify-center rounded-xl bg-white p-6 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mb-6 flex h-[120px] flex-shrink-0 items-center justify-center">
                <item.icon size={80} className="text-reporter" />
              </div>
              <div className="flex flex-grow items-center justify-center">
                <span className="tablet:text-sm desktop:text-base text-xs leading-relaxed font-medium text-gray-700">
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className="tablet:text-xl desktop:text-2xl bg-reporter hover:bg-reporter/90 cursor-pointer rounded-lg px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
            onClick={handleNavigateReport}
          >
            File A Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;
