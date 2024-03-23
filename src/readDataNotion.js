const { Client } = require("@notionhq/client")

const notion = new Client({
  auth: "secret_aW1fuyd9t0gpB8p0tEGcldTVxxedrThdo9N5dlzHCdB",
})

  ; (async () => {
    const res = await notion.databases.query({
      database_id: "59ace68d481741e3bb96c9574be6c6b4",
      filter: {
        property: "Date",
        date: {
          equals: "2024-03-21",
        },
      },
    })

    console.log(res)
  })()
