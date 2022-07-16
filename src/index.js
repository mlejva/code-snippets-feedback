import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { Wrapper } from "./styles";
import Feedback from "./Feedback";
import "./App.css";

// A basic example
import Basic from "./Basic";

// Including line numbers
import WithLineNumbers from "./WithLineNumbers";

// Integration with react-simple-code-editor
import Editor from "./Editor";

import Dialog from "./Dialog";

function App() {
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  function handleMouseEnter() {
    setFeedbackVisible(true);
  }

  function handleMouseLeave() {
    setFeedbackVisible(false);
  }

  function handleFeedbackClick() {
    console.log("Hello");
    setDialogOpen(true);
  }

  function handleSubmit() {
    setDialogOpen(false);
  }

  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h3>Accounts Balance</h3>
      {feedbackVisible && <Feedback onFeedbackClick={handleFeedbackClick} />}
      <WithLineNumbers />
      <Dialog open={dialogOpen} onSubmit={handleSubmit} />
      {/* <hr />
      <h2>Now for an editor example:</h2>
      <Editor />
      <hr />
      <h3>Changelog</h3>
      <p>v1.1.0 2020-03-10: Updated deps, added editor example</p> */}
    </Wrapper>
  );
}

render(<App />, document.getElementById("root"));
