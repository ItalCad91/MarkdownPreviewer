import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: darkgrey;
  height: 20vh;
  width: 97.8vw;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: cornflowerblue;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

interface HeaderProps {
  onToggleGuide: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleGuide }) => {
  return (
    <HeaderContainer>
      <Title>Markdown Preview</Title>
      <Button onClick={onToggleGuide}>Markdown Cheat Sheet</Button>
    </HeaderContainer>
  );
};

export default Header;
