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
  const style: React.CSSProperties = {
    backgroundColor: "white",
    color: "black",
    height: "600px",
    overflowY: "auto",
    fontSize: ".9em",
  };
  if (props.type === "editor") {
    const { handleChange } = props;
    return (
      <textarea
        className="form-control rounded-0 p-1 m-0 h-md-100"
        id="editor"
        value={text}
        onChange={handleChange}
        style={style}
      ></textarea>
    );
  } else {
    return (
      <div className="container p-1 rounded-0" id="preview" style={style}>
        <MDInterpreter code={text} />
      </div>
    );
  }
};
