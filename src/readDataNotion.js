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
        // equals: "2024-03-21",
        equals: new Date().toISOString().split("T")[0],
      },
    },
  });

  console.log(res.results);

  // // console.log(res);
  // const pageData = [];
  // for (const element of res.results) {
  //   page_id = element.id;

  //   const response = await notion.pages.retrieve({ page_id: page_id });
  //   question = response.properties.Question.title[0].plain_text;
  //   nextReview = response.properties.NextReview.formula.date.start;

  //   pageData.push({ question, nextReview });

  //   // console.log(question.title[0].plain_text);
  //   // console.log(nextReview.formula.date.start);
  // }

  // console.log(pageData);
  // const jsonData = JSON.stringify(pageData);

  // console.log(jsonData);

  // // (async () => {
  // //   const response = await notion.pages.retrieve({ page_id: page_id });
  // //   question = response.properties.Question;
  // //   nextReview = response.properties.NextReview;

  // //   console.log(question.title[0].plain_text);
  // //   console.log(nextReview.formula.date.start);
  // })();
})();
