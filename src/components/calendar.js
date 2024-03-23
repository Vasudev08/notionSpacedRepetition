import * as React from "react";
import {
  ScheduleComponent,
  Agenda,
  Inject,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";

import { Internationalization } from "@syncfusion/ej2-base";
const Calendar = (props) => {
  const data = props.data;

  const problems = [];
  for (var ind in data) {
    let question = data[ind].question;
    let nextDate = data[ind].nextReview;
    let url = data[ind].page_url;
    problems.push({
      Id: ind,
      Title: question,
      StartTime: new Date(nextDate),
      EndTime: new Date(nextDate),
      IsAllDay: true,
      Description: url,
    });
  }
  const eventSettings = {
    dataSource: problems,
  };

  const instance = new Internationalization();
  const getTimeString = (value) => {
    return instance.formatDate(value, { skeleton: "hm" });
  };
  const eventTemplate = (props) => {
    return (
      <div className="template-wrap">
        <div className="subject">{props.Title}</div>
      </div>
    );
  };
  return (
    <div class="calendar-container">
      <h1>Calendar</h1>
      <div class="calendar">
        <ScheduleComponent
          width="100%"
          height="550px"
          agendaDaysCount={7}
          selectedDate={new Date()}
          eventSettings={eventSettings}
        >
          <ViewsDirective>
            <ViewDirective
              option="Agenda"
              eventTemplate={eventTemplate}
              allowVirtualScrolling={false}
            />
          </ViewsDirective>
          <Inject services={[Agenda]} />
        </ScheduleComponent>{" "}
      </div>
    </div>
  );
};
export default Calendar;
