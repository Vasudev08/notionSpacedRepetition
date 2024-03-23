import React, { useEffect, useState } from "react";

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

  return <div>{pageTitle}</div>;
}

export default App;
