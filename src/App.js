import React, { useEffect, useState } from "react";
import { getTodayPageTitle } from "./components/dataAccess";
import Calendar from "./components/calendar";
import { ScheduleComponent, Agenda, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';

import { Internationalization } from '@syncfusion/ej2-base';
import Problem from "./components/problem";

function App() {
  const [pageTitle, setPageTitle] = useState("");

  const [PageData, setPageData] = useState({});

  useEffect(() => {
    const fetchPageTitle = async () => {
      try {
        const response = await fetch("http://localhost:3001/pageData");
        if (!response.ok) {
          throw new Error("Failed to fetch page title");
        }
        const data = await response.json();
        setPageTitle(data.title);
        setPageData(data);
      } catch (error) {
        console.error("Error fetching page title:", error);
      }
    };

    fetchPageTitle();
  }, []);

  return (
    <div>
      <Problem data={PageData}/>
      <addCard data={PageData}/>
      <Calendar data={PageData}/>
    </div>
  );
}

export default App;
