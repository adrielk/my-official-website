import React from "react";
function WideContentFrame({
  children,
  extraStyle,
}: {
  children: JSX.Element;
  extraStyle: string;
}) {
  return (
    <div className={`flex justify-center ${extraStyle}`}>
      <div className="w-full sm:w-normal">{children}</div>
    </div>
  );
}

export default WideContentFrame;
