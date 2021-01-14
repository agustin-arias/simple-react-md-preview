import React from "react";
import { PreviewArea } from "./PreviewArea";
import { TextArea } from "./TextArea";
import { Toolbar } from "./Toolbar";

interface WindowProps {
  name: string;
  text: string;
  handleChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Window: React.FC<WindowProps> = ({ name, text, handleChange }) => {
  return (
    <div
      className="container border border-dark p-0 mt-3 mb-5 my-1 shadow bg-white rounded"
      key={`window-${name}`}
    >
      <form>
        <div className="form-group m-0" key={`$`}>
          <Toolbar name={name} />
          {name === "editor" ? (
            <TextArea text={text} handleChange={handleChange} />
          ) : (
            <PreviewArea code={text} />
          )}
        </div>
      </form>
    </div>
  );
};
