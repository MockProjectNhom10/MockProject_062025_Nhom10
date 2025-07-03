import React from "react";

const StepProgress = ({ currentStep = 1 }) => {
  const steps = [
    { number: 1, label: "Reporter" },
    { number: 2, label: "Incident" },
    { number: 3, label: "Status" },
  ];

  return (
    <div className="mx-auto flex h-[80px] w-full max-w-[650px] sm:h-[96px] md:h-[110px] xl:h-[120px]">
      {steps.map((step, index) => (
        <div
          key={step.number}
          className="relative flex flex-1 flex-col items-center"
        >
          {/* Line before (chỉ hiện nếu không phải bước đầu) */}
          {index !== 0 && (
            <div className="absolute top-4 left-0 z-0 h-0.5 w-1/2 bg-gray-300" />
          )}

          {/* Line after (chỉ hiện nếu không phải bước cuối) */}
          {index !== steps.length - 1 && (
            <div className="absolute top-4 right-0 z-0 h-0.5 w-1/2 bg-gray-300" />
          )}

          {/* Circle number */}
          <div
            className={`z-10 flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium sm:h-8 sm:w-8 sm:text-sm md:h-9 md:w-9 md:text-base ${currentStep === step.number ? "bg-reporter text-white" : "bg-gray-200 text-black"} `}
          >
            {step.number}
          </div>

          {/* Label */}
          <div className="mt-1 text-center text-[10px] sm:mt-2 sm:text-sm md:text-base">
            {step.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepProgress;
