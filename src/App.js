import React, { useEffect, useState } from "react";
import { getTodayPageTitle } from "./components/dataAccess";
import Calendar from "./components/calendar";
import Problem from "./components/problem";

function App() {
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const fetchPageTitle = async () => {
      try {
        const response = await fetch("http://localhost:3001/getTodayPageTitle");
        if (!response.ok) {
          throw new Error("Failed to fetch page title");
        }
        const data = await response.json();
        setPageTitle(data.title);
      } catch (error) {
        console.error("Error fetching page title:", error);
      }
    };

    fetchPageTitle();
  }, []);

  return (
    <div>
      <Problem />
      <Calendar />
    </div>
  );
}

export default App;
