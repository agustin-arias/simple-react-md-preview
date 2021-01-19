import React from "react";
import { MDInterpreter } from "../logic/MDInterpreter";

interface PreviewAreaProps {
  code: string;
}

export const PreviewArea: React.FC<PreviewAreaProps> = ({ code }) => {
  return (
    <div
      className="container p-1 rounded-0"
      id="preview"
      style={{
        backgroundColor: "#d3d3d4",
        color: "black",
        height: "600px",
        overflowY: "auto",
      }}
    >
      <MDInterpreter code={code} />
    </div>
  );
};
