import React, { useEffect, useState } from "react";
import { getTodayPageTitle } from "./server";

function App() {
  const value = "World";
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const title = await getTodayPageTitle();
        setPageTitle(title);
      } catch (error) {
        console.log("Wasn't able to receive the title");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      Hello {value} push check {pageTitle}{" "}
    </div>
  );
}

export default App;
