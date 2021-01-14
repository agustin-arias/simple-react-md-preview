import parse from "html-react-parser";
import marked from "marked";
import React from "react";
interface MDInterpreterProps {
  code: string;
}

export const MDInterpreter: React.FC<MDInterpreterProps> = ({ code }) => {
  return (
    <div className="container p-1" key="MDIntepreter">
      {parse(marked(code))}
    </div>
  );
};
