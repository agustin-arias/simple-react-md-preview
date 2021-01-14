import React, { useState } from "react";
import { Editor } from "./components/Editor";
import { Previewer } from "./components/Previewer";
import { initialText } from "./initialText";

function App() {
  const [code, setCode] = useState(initialText);

  console.log({ code });
  return (
    <>
      <Editor
        code={code}
        handleChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          setCode(event.target.value);
        }}
      />
      <Previewer code={code} />
    </>
  );
}

export default App;
