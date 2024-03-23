const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: "secret_aW1fuyd9t0gpB8p0tEGcldTVxxedrThdo9N5dlzHCdB",
});

(async () => {
  const res = await notion.databases.query({
    database_id: "59ace68d481741e3bb96c9574be6c6b4",
    filter: {
      property: "Date",
      date: {
        equals: "2024-03-21",
      },
    },
  });

  console.log(res);
  res.results.forEach((element) => {
    page_id = res.results[0].id;
  });

  console.log(page_id);

  (async () => {
    const response = await notion.pages.retrieve({ page_id: page_id });
    question = response.properties.Question;

    console.log(question.title[0].plain_text);
  })();
})();
