import React from "react";
import Footer from "@chief-police/components/layout/Footer";
import Button from "@chief-police/components/common/button/Button";

const FormSection = ({
  title,
  children,
  footerCancel,
  onClickCancel,
  footerEdit,
  onClickEdit,
  footerSave,
  onClickSave,
  footerNext,
  onClickNext,
}) => {
  return (
    <section className="mb-6 w-full rounded-xl border-1 border-gray-200 bg-white shadow-md">
      <div className="bg-police mb-2 flex items-center justify-center rounded-t-xl py-2">
        <h2 className="text-md font-semibold text-white">{title}</h2>
      </div>

      <div className="mobile:px-1 tablet:px-2 desktop:px-5 mb-4 space-y-2">
        {children}
      </div>

      <Footer>
        {footerCancel && (
          <Button onClick={onClickCancel} variant="danger">
            Back
          </Button>
        )}
        {footerEdit && (
          <Button onClick={onClickEdit} variant="primary">
            Edit
          </Button>
        )}
        {footerSave && (
          <Button onClick={onClickSave} variant="primary">
            Save
          </Button>
        )}
        {footerNext && (
          <Button onClick={onClickNext} variant="secondary">
            Next page
          </Button>
        )}
      </Footer>
    </section>
  );
};

export default FormSection;
