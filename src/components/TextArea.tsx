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
      className="form-control rounded-0 p-1 m-0 h-md-100"
      id="editor"
      value={text}
      onChange={handleChange}
      style={{
        height: "600px",
        fontSize: ".9em",
        backgroundColor: "#d3d3d4",
        color: "black",
      }}
    ></textarea>
  );
};
