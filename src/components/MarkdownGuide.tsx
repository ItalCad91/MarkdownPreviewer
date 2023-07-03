import React from "react";
import styled from "styled-components";

const GuideContainer = styled.div`
  padding: 16px;
  height: 30vh;
  width: 96.5vw;
`;

const MarkdownGuide: React.FC = () => {
  return (
    <GuideContainer style={{ backgroundColor: "cornflowerblue" }}>
      <h2>Markdown Guide</h2>
      <ul>
        <li>
          <code># Heading 1</code>
        </li>
        <li>
          <code>## Heading 2</code>
        </li>
        <li>
          <code>**Bold Text**</code>
        </li>
        <li>
          <code>*Italic Text*</code>
        </li>
        <li>
          <code>[Link](https://google.com )</code>
        </li>
        <li>
          <code>- List item</code>
        </li>
      </ul>
    </GuideContainer>
  );
};

export default MarkdownGuide;
