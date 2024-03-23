const express = require("express");
const cors = require("cors");
const { getTodayPageTitle, fetchPageData } = require("./components/dataAccess");

const app = express();
const port = 3001;

app.use(cors());

app.get("/getTodayPageTitle", async (req, res) => {
  try {
    const title = await getTodayPageTitle();
    res.json({ title });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch page title" });
  }
});

app.get("/pageData", async (req, res) => {
  try {
    const pageData = await fetchPageData();
    res.json(pageData);
  } catch (error) {
    console.error("Error while fetching page data:", error);

    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
