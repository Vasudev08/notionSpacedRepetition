import * as React from 'react';
import { ScheduleComponent, Agenda, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';

import { Internationalization } from '@syncfusion/ej2-base';
const Calendar = () => {
  const eventSettings = {
    dataSource: [{
      Id: 1,
      Title: 'Meeting',
      StartTime: new Date(2018, 1, 15, 0, 0),
      EndTime: new Date(2018, 1, 15, 0, 0),
      IsAllDay: true

    },
    {
      Id: 1,
      Title: 'Meeting',
      StartTime: new Date(2018, 1, 15, 0, 0),
      EndTime: new Date(2018, 1, 15, 0, 0),
      IsAllDay: true

    },
    {
      Id: 1,
      Title: 'Meeting',
      Description: 'Meeting with developers',
      StartTime: new Date(2018, 1, 16, 0, 0),
      EndTime: new Date(2018, 1, 16, 0, 0),
      IsAllDay: true

    }


    ]
  };

  const instance = new Internationalization();
  const getTimeString = (value) => {
    return instance.formatDate(value, { skeleton: 'hm' });
  }
  const eventTemplate = (props) => {
    return (<div className="template-wrap">
      <div className="subject">{props.Title}</div>
    </div>);
  }
  return (<div class="calendar-container">
    <h1>Calendar</h1>
    <div class="calendar">
      <ScheduleComponent width='100%' height='550px' agendaDaysCount={3} selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
        <ViewsDirective>
          <ViewDirective option='Agenda' eventTemplate={eventTemplate} allowVirtualScrolling={false} />
        </ViewsDirective>
        <Inject services={[Agenda]} />
      </ScheduleComponent> </div></div>);
}
  ;

export default Calendar;
