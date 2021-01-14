import React from "react";
import { Window } from "./Window";

interface PreviewerProps {
  code: string;
  hideSelf: boolean;
  hideOther: boolean;
  handleHideOther:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

export const Previewer: React.FC<PreviewerProps> = ({
  code,
  hideSelf,
  hideOther,
  handleHideOther: setHideOther,
}) => {
  return (
    <Window
      name="previewer"
      text={code}
      hideSelf={hideSelf}
      hideOther={hideOther}
      handleHideOther={setHideOther}
    />
  );
};
