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
        },
      },
    });

    let page_id;
    res.results.forEach((element) => {
      page_id = element.id;
    });

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

module.exports = { getTodayPageTitle };
