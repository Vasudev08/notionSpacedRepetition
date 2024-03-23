import * as React from 'react';
import { ScheduleComponent, Agenda, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';

import { Internationalization } from '@syncfusion/ej2-base';
const Calendar = () => {
  const eventSettings = { dataSource: [{
    Id: 1,
    Subject: 'Meeting',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 12, 30),
    IsAllDay: true

  }] };

  const instance = new Internationalization();
  const getTimeString = (value) => {
    return instance.formatDate(value, { skeleton: 'hm' });
  }
  const eventTemplate = (props) => {
    return (<div className="template-wrap">
      <div className="subject">{props.Subject}</div>
      <div className="time">
        Time: {getTimeString(props.StartTime)} - {getTimeString(props.EndTime)}</div>
    </div>);
  }
  return (<ScheduleComponent width='100%' height='550px' agendaDaysCount={3} selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
    <ViewsDirective>
      <ViewDirective option='Agenda' eventTemplate={eventTemplate} allowVirtualScrolling={false} />
    </ViewsDirective>
    <Inject services={[Agenda]} />
  </ScheduleComponent>);
}
;

export default Calendar;
  