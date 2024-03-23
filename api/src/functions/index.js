const { app } = require("@azure/functions");

app.http("message", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: async (context, request) => {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.name || "world";

    return { body: `Hello, ${name}!` };
  },
});
