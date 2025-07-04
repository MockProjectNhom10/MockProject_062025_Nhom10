import React from "react";
import Button from "@chief-police/components/common/Button";

const Footer = () => {
    return (
        <footer className="bg-white p-4 flex justify-end gap-4">
            <Button variant="secondary">Cancel</Button>
            <Button variant="secondary">Save</Button>
            <Button variant="secondary">Next page</Button>
        </footer>
    );
};

export default Footer;
