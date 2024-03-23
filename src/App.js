import React, { useEffect, useState } from "react";
import { getTodayPageTitle } from "./dataAccess";
import Calendar from "./components/calendar";

function App() {
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const title = await getTodayPageTitle();
        console.log(title);
        setPageTitle(title);
      } catch (error) {
        console.error("Error fetching page title:", error);
        setPageTitle("Error: Failed to fetch page title");
      }
    };

    fetchData();
  }, []);

  return (
    <Calendar/>
  );

}

export default App;
