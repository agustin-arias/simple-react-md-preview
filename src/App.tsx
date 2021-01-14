import React, { useState } from "react";
import { Editor } from "./components/Editor";
import { Previewer } from "./components/Previewer";

function App() {
  const [code, setCode] = useState("asdasdsa");

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
