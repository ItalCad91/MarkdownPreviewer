import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const OutputContainer = styled.div`
  padding: 16px;
  background-color: #fff;
  height: 20vh;
  width: 96.5vw;
`;

interface MarkdownOutputProps {
  markdown: string;
}

const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <OutputContainer>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OutputContainer>
  );
};

export default MarkdownOutput;
