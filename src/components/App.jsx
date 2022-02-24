import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";
var questionNum = 0;

function App() {
  console.log(data[0].question.choices.length);
  return (
    <div className="app">
      <h1>Trivia!</h1>
      <Questions number={questionNum} />
      <NextQuestion />
    </div>
  );
}

function Questions(props) {
  /*
      {data[props.number].question.choices[0]}
      */
  return (
    <div className="question">
      {data[props.number].question.text}
      {data[props.number].question.choices.map((choice) => (
        <Answer choiceText={choice} />
      ))}
    </div>
  );
}

function NextQuestion(props) {
  return (
    <div className="nextButton">
      <button className="next"> Next Question </button>
    </div>
  );
}

function Answer(props) {
  return (
    <div className="answers">
      <span>{props.choiceText}</span>
    </div>
  );
}
export default App;
