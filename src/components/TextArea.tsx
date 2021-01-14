import React from "react";

interface TextAreaProps {
  text: string;
  handleChange:
    | ((event: React.ChangeEvent<HTMLTextAreaElement>) => void)
    | undefined;
}

export const TextArea: React.FC<TextAreaProps> = ({ text, handleChange }) => {
  return (
    <textarea
      className="form-control rounded-0 p-1 m-0"
      id="editor"
      value={text}
      onChange={handleChange}
      style={{ height: "200px", fontSize: ".9em" }}
    ></textarea>
  );
};
