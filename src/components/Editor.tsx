import React from "react";
import { Window } from "./Window";

interface EditorProps {
  code: string;
  hideSelf: boolean;
  hideOther: boolean;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleHideOther: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export const Editor: React.FC<EditorProps> = ({
  code,
  hideSelf,
  hideOther,
  handleChange,
  handleHideOther,
}) => {
  return (
    <Window
      name="editor"
      text={code}
      hideSelf={hideSelf}
      hideOther={hideOther}
      handleChange={handleChange}
      handleHideOther={handleHideOther}
    />
  );
};
