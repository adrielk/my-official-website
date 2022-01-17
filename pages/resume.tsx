import React from "react";
import ResumeData from "../page_data/resume.json";
function Resume() {
  return (
    <div className="flex justify-center pt-5">
      <iframe
        src={ResumeData.link}
        width="640"
        height="825"
        allow="autoplay"
      ></iframe>
    </div>
  );
}

export default Resume;
