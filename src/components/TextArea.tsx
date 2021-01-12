import React from "react";

interface TextAreaProps {}

export const TextArea: React.FC<TextAreaProps> = () => {
  return (
    <textarea
      className="form-control rounded-0 p-1 m-0"
      id="exampleFormControlTextarea1"
      style={{ height: "200px", fontSize: ".9em" }}
    ></textarea>
  );
};
