import React from "react";

function FooterFrame({
  children,
  bgColor,
}: {
  children: JSX.Element;
  bgColor: string;
}) {
  return (
    <div className={`flex justify-center w-full absolute bottom-0 ${bgColor}`}>
      <div className="w-normal">{children}</div>
    </div>
  );
}

export default FooterFrame;
