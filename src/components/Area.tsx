import React from "react";
import { MDInterpreter } from "../logic/MDInterpreter";

interface AreaProps {
  text: string;
  type: string;
  handleChange?:
    | ((event: React.ChangeEvent<HTMLTextAreaElement>) => void)
    | undefined;
}

export const Area: React.FC<AreaProps> = (props) => {
  const { text } = props;
  if (props.type === "editor") {
    const { handleChange } = props;
    return (
      <textarea
        className="form-control rounded-0 p-1 m-0 h-md-100"
        id="editor"
        value={text}
        onChange={handleChange}
        style={{
          backgroundColor: "white",
          color: "black",
          height: "600px",
          overflowY: "auto",
          fontSize: ".9em",
        }}
      ></textarea>
    );
  } else {
    return (
      <div
        className="container p-1 rounded-0"
        id="preview"
        style={{
          backgroundColor: "white",
          color: "black",
          height: "600px",
          overflowY: "auto",
        }}
      >
        <MDInterpreter code={text} />
      </div>
    );
  }
};
