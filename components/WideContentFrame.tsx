import React from "react";

function WideContentFrame({
  children,
  bgColor,
}: {
  children: JSX.Element;
  bgColor: string;
}) {
  return (
    <div className={bgColor}>
      <div className="flex justify-center">
        <div className="w-normal">{children}</div>
      </div>
    </div>
  );
}

export default WideContentFrame;
