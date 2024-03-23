const { getTodayPageTitle } = require("./dataAccess");

test("getTodayPageTitle returns the correct page title", async () => {
  const pageTitle = await getTodayPageTitle();
  console.log(pageTitle);
  expect(pageTitle).toEqual("TestRunOne"); // Replace 'Expected Page Title' with the actual expected title
});
