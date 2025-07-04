import React from "react";
import Button from "./Button";

const ReportActions = () => {
  const handlePrint = () => {
    const reportContent = document.querySelector(".max-w-4xl");

    if (!reportContent) {
      console.error("Không tìm thấy nội dung báo cáo để in.");
      return;
    }
    const actionBar = document.querySelector(".z-50");
    if (actionBar) actionBar.style.display = "none";

    const printWindow = window.open("", "", "width=800,height=600");
    printWindow.document.write(`
      <html>
        <head>
          <title> - Báo cáo chi tiết</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
            }
            h1, h2, h3 {
              color: #00c9a7; 
              text-align: center;
            }
            .mobile\\:p-6, .p-4 {
              padding: 16px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
            }
            th, td {
              border: 1px solid #000;
              padding: 8px;
              text-align: left;
            }
            th {
              background-color: #f2f2f2;
            }
            .border, .shadow-sm {
              border: 1px solid #e5e7eb;
              margin-bottom: 24px;
            }
            .grid {
              display: grid;
              gap: 24px;
            }
            .tablet\\:grid-cols-2 {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          </style>
        </head>
        <body>
          <h1>BÁO CÁO CHI TIẾT TỘI PHẠM</h1>
          ${reportContent.outerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();

    if (actionBar) actionBar.style.display = "";
  };

  const handleDecline = () => console.log("Decline clicked");
  const handleApprove = () => console.log("Approve clicked");

  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200 bg-gray-100 px-4 py-3 shadow-lg">
      <div className="max-w-screen-desktop mx-auto flex items-center justify-between">
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
