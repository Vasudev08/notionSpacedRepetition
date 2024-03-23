import * as React from 'react';
import { ScheduleComponent, Agenda, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';

import { useState } from 'react';

import { Internationalization } from '@syncfusion/ej2-base';
const Problem = () => {

  const [haveProblem, setHaveProblem] = useState(true);

  const sumbit_easy_problem = () => {
    sumbit_problem("easy");
  }

  const sumbit_good_problem = () => {
    sumbit_problem("good");
  }

  const sumbit_hard_problem = () => {
    sumbit_problem("hard");
  }

  const sumbit_again_problem = () => {
    sumbit_problem("again");
  }

  const getProblem = () => {
    setHaveProblem(true);
  }

  const sumbit_problem = (difficulty) => {
    console.log(difficulty);
    const date = new Date();
    if (difficulty === "easy") {
    }
    else if (difficulty === "good") {
      date.setDate(date.getDate() + 8);
    }
    else if (difficulty === "hard") {
      date.setDate(date.getDate() + 3);
    }
    else if (difficulty === "again") {
      date.setDate(date.getDate() + 1);
    }
    console.log(date.toString());
    setHaveProblem(false);
  }

  if (haveProblem) {


  return <div class="problem-container">

    <div class="problem-title">
      {/* Async import for getTodayPageTitle */}
      {/* eslint-disable-next-line react/jsx-no-bind */}
      {/*import("./dataAccess").then(({ getTodayPageTitle }) => (
        <h1>Daily Problem: {getTodayPageTitle().then(title => title)}</h1>
      ))*/}
      <div class="problem-descr">

          {/* <p>Problem Description</p> there are no even stored descriptions*/}
        </div>
      </div>
      <div class="problem-buttons">
        <button type="button" onClick={sumbit_easy_problem} class="btn btn-success m-2">Easy</button>
        <button type="button" onClick={sumbit_good_problem} class="btn btn-warning m-2">Medium</button>
        <button type="button" onClick={sumbit_hard_problem} class="btn btn-danger m-2">Hard</button>
      </div>


    </div>
  }

  else {
    return (<div class="problem-container">
      <div>
        <h1 class="problem-title">Congratulations! Try another problem:</h1>
      </div>
      <div class="problem-buttons">
        <button type="button" onClick={getProblem} class="btn btn-success m-2">Yes</button>
      </div>
    </div>);
  }
}
  ;







export default Problem;
