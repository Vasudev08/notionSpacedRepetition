const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: "secret_aW1fuyd9t0gpB8p0tEGcldTVxxedrThdo9N5dlzHCdB",
});

const getTodayPageTitle = async () => {
  try {
    const res = await notion.databases.query({
      database_id: "59ace68d481741e3bb96c9574be6c6b4",
      filter: {
        property: "Date",
        date: {
          equals: "2024-03-21",
          // equals: new Date().toISOString().split("T")[0],
        },
      },
    });

    let page_id;
    res.results.forEach((element) => {
      page_id = element.id;
    }); //TODO: page_id is overwritten by the last matching page

    if (!page_id) {
      throw new Error("Page not found");
    }

    const response = await notion.pages.retrieve({ page_id });
    const question = response.properties.Question.title[0].plain_text;

    return question;
  } catch (error) {
    console.error("Error retrieving page title:", error);
    throw error;
  }
};

async function AddNotionPageToDatabase(title, date) {
  const pageProperties = {
    title: {
      title: [
        {
          text: {
            content: title,
          },
        },
      ],
    },
    Date: {
      date: {
        start: date,
        end: date,
      },
    },
  };
  const newPage = await notion.pages.create({
    parent: {
      database_id: "59ace68d481741e3bb96c9574be6c6b4",
    },
    properties: pageProperties,
  });
  console.log(newPage);
}

// async function addNotionPageToDatabase(databaseId, pageProperties) {
//   const newPage = await notion.pages.create({
//     parent: {
//       database_id: databaseId,
//     },
//     properties: pageProperties,
//   })
//   console.log(newPage)
// }

const fetchPageData = async () => {
  try {
    const res = await notion.databases.query({
      database_id: "59ace68d481741e3bb96c9574be6c6b4",
    });

    const pageData = [];
    for (const element of res.results) {
      const page_id = element.id;

      const response = await notion.pages.retrieve({ page_id });
      const question = response.properties.Question.title[0].plain_text;
      const nextReview = response.properties.NextReview.formula.date.start;

      pageData.push({ question, nextReview });
    }
    console.log(pageData);

    return pageData;
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
};

const fetchPageDataUrl = async () => {
  try {
    const res = await notion.databases.query({
      database_id: "59ace68d481741e3bb96c9574be6c6b4",
    });

    const pageData = [];
    for (const element of res.results) {
      const page_id = element.id;
      const page_url = element.url;

      const response = await notion.pages.retrieve({ page_id });
      const question = response.properties.Question.title[0].plain_text;
      const nextReview = response.properties.NextReview.formula.date.start;

      pageData.push({ question, nextReview, page_url });
    }
    console.log(pageData);

    return pageData;
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
};

module.exports = {
  fetchPageData,
  getTodayPageTitle,
  addNotionPageToDatabase,
  fetchPageDataUrl,
};
