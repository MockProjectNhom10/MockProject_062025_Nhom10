import React from "react";
import Button from "./Button";
import { handlePrint } from "@review-police/utils/exportTool";

const ReportActions = () => {
  const handleDecline = () => console.log("Decline clicked");
  const handleApprove = () => console.log("Approve clicked");

  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200 bg-gray-100 px-4 py-3 shadow-lg">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">

        <Button
          content="Print"
          color="bg-gray-500"
          onClick={handlePrint}
          className="mobile:px-3 mobile:py-1 mobile:text-xs tablet:px-4 tablet:py-2 tablet:text-sm desktop:px-4 desktop:py-2 desktop:text-sm"
        />
        <div className="ml-1 flex gap-1">
          <Button
            content="Decline"
            color="bg-red-500"
            onClick={handleDecline}
            className="mobile:px-3 mobile:py-1.5 mobile:text-xs tablet:px-4 tablet:py-2 tablet:text-sm desktop:px-4 desktop:py-2 desktop:text-sm"
          />
          <Button
            content="Approve"
            color="bg-blue-500"
            onClick={handleApprove}
            className="mobile:px-3 mobile:py-1.5 mobile:text-xs tablet:px-4 tablet:py-2 tablet:text-sm desktop:px-4 desktop:py-2 desktop:text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default ReportActions;
