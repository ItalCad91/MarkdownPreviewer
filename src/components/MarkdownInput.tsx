import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  padding: 16px;
  height: 20vh;
  width: 100%
  border: 1px solid black; /* Add a border for visualization */
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 8px;
  resize: none;
  border: none; /* Remove textarea border */
`;

interface MarkdownInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  return (
    <InputContainer>
      <StyledTextArea value={value} onChange={onChange} />
    </InputContainer>
  );
};

export default MarkdownInput;
