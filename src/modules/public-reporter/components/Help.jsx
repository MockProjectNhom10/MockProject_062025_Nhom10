import React from "react";
import { MessageSquareText, Users, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "@public-reporter/components/common/Button";

const Help = () => {
  const navigate = useNavigate();

  const handleNavigateReport = () => {
    navigate("report/step1");
  };

  return (
    <div className="tablet:max-w-tablet max-w-mobile tablet:my-4 tablet:p-8 desktop:max-w-lg desktop:p-10 mx-auto flex flex-col items-center justify-center border-b-1 p-4">
      <h2 className="tablet:text-3xl desktop:text-4xl my-6 text-center text-2xl font-bold">
        How You Can Help?
      </h2>
      <div className="tablet:flex tablet:gap-12">
        <div className="tablet:flex-col tablet:text-center tablet:gap-4 mb-6 flex w-full items-center">
          <MessageSquareText
            size={40}
            className="tablet:h-14 tablet:w-14 desktop:h-16 desktop:w-16 text-reporter mr-4"
          />
          <span className="tablet:text-md desktop:text-lg text-base font-medium">
            Tell us what happened.
          </span>
        </div>
        <div className="tablet:flex-col tablet:justify-center tablet:text-center tablet:gap-4 mb-6 flex w-full items-center">
          <Users
            size={40}
            className="tablet:h-14 tablet:w-14 desktop:h-16 desktop:w-16 text-reporter mr-4"
          />
          <span className="tablet:text-md desktop:text-lg text-base font-medium">
            Your contribution & our mission.
          </span>
        </div>
        <div className="tablet:flex-col tablet:justify-center tablet:text-center tablet:gap-4 mb-6 flex w-full items-center">
          <Shield
            size={40}
            className="tablet:h-14 tablet:w-14 desktop:h-16 desktop:w-16 text-reporter mr-4"
          />
          <span className="tablet:text-md desktop:text-lg text-base font-medium">
            Protect yourself and others.
          </span>
        </div>
      </div>
      <Button
        onClick={handleNavigateReport}
        className="tablet:text-lg tablet:my-4 tablet:w-sm desktop:text-xl bg-reporter w-full cursor-pointer rounded-lg py-3 text-lg font-bold text-white"
      >
        File A Report
      </Button>
    </div>
  );
};

export default Help;
