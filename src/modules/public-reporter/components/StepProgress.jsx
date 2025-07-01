import React from "react";

const StepProgress = ({ currentStep = 1 }) => {
  const steps = [
    { number: 1, label: "Reporter" },
    { number: 2, label: "Incident" },
    { number: 3, label: "Status" },
  ];

  return (
    <div className="flex w-full max-w-[650px] h-[80px] sm:h-[96px] md:h-[110px] xl:h-[120px] mx-auto">
      {steps.map((step, index) => (
        <div key={step.number} className="flex-1 flex flex-col items-center relative">
          {/* Line before (chỉ hiện nếu không phải bước đầu) */}
          {index !== 0 && (
            <div className="absolute top-4 left-0 w-1/2 h-0.5 bg-gray-300 z-0" />
          )}

          {/* Line after (chỉ hiện nếu không phải bước cuối) */}
          {index !== steps.length - 1 && (
            <div className="absolute top-4 right-0 w-1/2 h-0.5 bg-gray-300 z-0" />
          )}

          {/* Circle number */}
          <div
            className={`flex items-center justify-center 
              w-7 h-7 text-xs
              sm:w-8 sm:h-8 sm:text-sm
              md:w-9 md:h-9 md:text-base
              rounded-full z-10 font-medium
              ${currentStep === step.number ? "bg-black text-white" : "bg-gray-200 text-black"}
            `}
          >
            {step.number}
          </div>

          {/* Label */}
          <div className="text-[10px] sm:text-sm md:text-base mt-1 sm:mt-2 text-center">{step.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StepProgress;
