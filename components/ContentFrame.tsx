import React from "react";

function ContentFrame({ children }: { children: JSX.Element }) {
  return <div className="w-7/12">{children}</div>;
}

export default ContentFrame;
