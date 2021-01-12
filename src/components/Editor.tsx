import React from "react";
import { TextArea } from "./TextArea";
import { Toolbar } from "./Toolbar";

interface EditorProps {}

export const Editor: React.FC<EditorProps> = () => {
  return (
    <div className="container border border-dark p-0 mt-3 shadow mb-5 bg-white rounded">
      <form>
        <div className="form-group m-0">
          <Toolbar name="editor" />
          <TextArea />
        </div>
      </form>
    </div>
  );
};
