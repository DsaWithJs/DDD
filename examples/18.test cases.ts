import fastify from "fastify";
import { yourRouteDefinitionFunction } from "./path-to-your-route-definition"; // Import your route definition

// Create a Fastify instance for testing
const build = () => {
  const app = fastify();
  yourRouteDefinitionFunction(app); // Attach your route to the Fastify instance
  return app;
};

describe("/IRT-search route", () => {
  let app: ReturnType<typeof build>;

  beforeAll(() => {
    app = build();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should respond to the GET /IRT-search", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/IRT-search",
      query: {
        size: 10,
        sortFields: "fieldName",
        direction: "asc",
        requestSource: "testSource",
        token: "testToken",
      },
    });

    expect(response.statusCode).toBe(200); // or other expected status code
    // Add more assertions based on what your route returns
  });

  // Add more test cases as needed
});
