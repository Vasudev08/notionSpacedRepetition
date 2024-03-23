const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { getTodayPageTitle, fetchPageData, fetchPageDataUrl } = require("./components/dataAccess");

const app = express();
const port = 3001;



const jsonParser = bodyParser.json();
app.use(cors());
app.use(express.json())

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

app.get("/pageDataUrl", async (req, res) => {
  try {
    const pageData = await fetchPageDataUrl();
    res.json(pageData);
  } catch (error) {
    console.error("Error while fetching page data:", error);

    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/updatePageData", async (req, res) => {
  try {
    

    console.log(req.body);


    const pageData = await AddNotionPageToDatabase(req.body["title"], req.body["date"]);
    res.json(pageData);
  } catch (error) {
    console.error("Error while fetching page data:", error);

    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
