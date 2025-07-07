import React from "react";
import Button from "@chief-police/components/common/button/Button";

const Footer = () => {
  return (
    <footer className="flex justify-end gap-4 bg-white p-4">
      <Button variant="secondary">Cancel</Button>
      <Button variant="secondary">Save</Button>
      <Button variant="secondary">Next page</Button>
    </footer>
  );
};

export default Footer;
