import React from "react";
import { Window } from "./Window";

interface EditorProps {
  code: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Editor: React.FC<EditorProps> = ({ code, handleChange }) => {
  return <Window name="editor" text={code} handleChange={handleChange} />;
};
