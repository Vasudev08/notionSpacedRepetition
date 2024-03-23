import * as React from 'react';
import { ScheduleComponent, Agenda, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';

import { Internationalization } from '@syncfusion/ej2-base';
const Problem = () => {
  return <div class="problem-container"
  >

    <div class="problem-title">
      <h1>Daily Problem: 2SUM</h1>
      <div class="problem-descr">

        <p>Problem Description</p>        
      </div>
    </div>
    <div class="problem-buttons">
    <button type="button" class="btn btn-success m-2">Easy</button>
<button type="button" class="btn btn-warning m-2">Medium</button>
<button type="button" class="btn btn-danger m-2">Hard</button>
    </div>


  </div>
}
;

export default Problem;
  