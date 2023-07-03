import React, { useState } from "react";
import Header from "./components/Header";
import MarkdownGuide from "./components/MarkdownGuide";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownOutput from "./components/MarkdownOutput";

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState(
    "# Change this text as you like using the cheat sheet!"
  );
  const [showGuide, setShowGuide] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header onToggleGuide={() => setShowGuide(!showGuide)} />
      {showGuide && <MarkdownGuide />}
      <div style={{ display: "flex", flex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <MarkdownInput value={markdown} onChange={handleChange} />
          <MarkdownOutput markdown={markdown} />
        </div>
      </div>
    </div>
  );
};

export default App;
