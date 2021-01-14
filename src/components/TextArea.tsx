import React from "react";

interface TextAreaProps {
  text: string;
  handleChange:
    | ((event: React.ChangeEvent<HTMLTextAreaElement>) => void)
    | undefined;
  hideOther: boolean;
}

export const TextArea: React.FC<TextAreaProps> = ({
  text,
  handleChange,
  hideOther,
}) => {
  return (
    <textarea
      className="form-control rounded-0 p-1 m-0"
      id="editor"
      value={text}
      onChange={handleChange}
      style={{ height: hideOther ? "750px" : "500px", fontSize: ".9em" }}
    ></textarea>
  );
};
