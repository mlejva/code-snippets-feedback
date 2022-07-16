import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  margin: 0 4px;
  padding: 4px 8px;
  background-color: transparent;
  outline: none;
  border: 1px solid #4c3d7b;
  border-radius: 8px;
  color: white;
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
    background: #4c3d7b;
  }
`;

function FButton({ onClick, text }) {
  return <Button onClick={onClick}>{text}</Button>;
}

export default FButton;
