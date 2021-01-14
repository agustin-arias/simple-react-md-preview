import React from "react";
import { PreviewArea } from "./PreviewArea";
import { TextArea } from "./TextArea";
import { Toolbar } from "./Toolbar";
import "./Window.css";

interface WindowProps {
  name: string;
  text: string;
  hideSelf: boolean;
  hideOther: boolean;
  handleChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleHideOther:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

export const Window: React.FC<WindowProps> = ({
  name,
  text,
  hideSelf,
  hideOther,
  handleChange,
  handleHideOther,
}) => {
  return (
    <div
      className={`container border border-dark p-0 mt-3 mb-5 my-1 shadow bg-white rounded ${
        hideSelf ? "d-none" : ""
      } ${hideOther ? "" : `fixed-width-${name}`}
      `}
      key={`window-${name}`}
    >
      <form>
        <div className="form-group m-0">
          <Toolbar
            name={name}
            hideOther={hideOther}
            handleHideOther={handleHideOther}
          />
          {name === "editor" ? (
            <TextArea
              text={text}
              handleChange={handleChange}
              hideOther={hideOther}
            />
          ) : (
            <PreviewArea code={text} />
          )}
        </div>
      </form>
    </div>
  );
};
