import React from "react";
import styled from "styled-components";

import FButton from "./FButton";

import * as Popover from "@radix-ui/react-popover";

export const Wrapper = styled.div`
  position: absolute;
  bottom: 12px;
  right: 6px;
  /* padding: 4px 8px; */
  /* background: #222222; */
  /* border: 1px solid #313034;
  border-radius: 4px; */
  background: transparent;
  /* z-index: 1; */
  color: white;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function Feedback({ onFeedbackClick }) {
  return (
    <Wrapper>
      <FButton text="👍 Helpful" />
      <FButton text="👎 Useless" />
      <FButton text="🐛 Code doesn't work" />
      <FButton text="💬 Leave feedback" onClick={onFeedbackClick} />
    </Wrapper>
  );
}

export default Feedback;
