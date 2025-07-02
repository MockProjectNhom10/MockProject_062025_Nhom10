import React from "react";
import { twMerge } from "tailwind-merge";

const Content = ({ children, className }) => {
  const newClassName = twMerge(
    "max-w-screen-lg mx-auto px-0 tablet:px-0 tablet:py-4",
    className,
  );
  return <div className={newClassName}>{children}</div>;
};

export default Content;
