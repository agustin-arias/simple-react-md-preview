import React from "react";
import { Window } from "./Window";

interface PreviewerProps {
  code: string;
}

export const Previewer: React.FC<PreviewerProps> = ({ code }) => {
  return <Window name="previewer" text={code} />;
};
