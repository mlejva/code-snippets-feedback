import React from "react";
import styledC from "styled-components";
import { styled } from "@stitches/react";
import * as Dialog from "@radix-ui/react-dialog";

const Overlay = styled(Dialog.Overlay, {
  background: "rgba(0 0 0 / 0.7)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "grid",
  placeItems: "center",
  overflowY: "auto"
});

const Content = styled(Dialog.Content, {
  position: "relative",
  top: -200,
  minWidth: 300,
  background: "#29282F",
  padding: 16,
  borderRadius: 4,
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #313034",
  zIndex: 100
});

const Title = styledC.span`
  margin-bottom: 8px;
  font-size: 18px;
  font-family: "Source Sans Pro", "Arial", sans-serif;
`;

const TextArea = styledC.textarea`
  width: 100%;
  margin-bottom: 24px;
  background: transparent;
  color: white;
`;

const SubmitButton = styledC.button`
  :hover {
    cursor: pointer;
    background: #4c3d7b;
  }  
  padding: 4px 8px;
  background-color: transparent;
  outline: none;
  border: 1px solid #4c3d7b;
  border-radius: 8px;
  color: white;
  font-size: 16px;
`;

export default ({ open, onSubmit }) => {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Overlay>
          <Content>
            <Title>What can we improve?</Title>
            <TextArea />
            <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
          </Content>
        </Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
