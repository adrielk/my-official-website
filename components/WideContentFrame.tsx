import React from "react";
import BottomSpacer from "./BottomSpacer";
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
