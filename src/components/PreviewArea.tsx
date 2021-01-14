import React from "react";
import { MDInterpreter } from "../logic/MDInterpreter";

interface PreviewAreaProps {
  code: string;
}

export const PreviewArea: React.FC<PreviewAreaProps> = ({ code }) => {
  return (
    <div className="container p-1 rounded-0" id="preview">
      <MDInterpreter code={code} />
    </div>
  );
};
