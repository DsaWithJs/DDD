import fastify, { 
    FastifyRequest,
    FastifyReply,
    RouteGenericInterface 
  } from 'fastify';
  import axios from 'axios';
  import { Type } from '@sinclair/typebox';
  
  // Creating a Fastify instance
  const app = fastify({ logger: true });
  
  // Define a schema for the query parameters
  const querySchema = Type.Object({
    token: Type.String(),
  });
  
  // Define the route interface
  interface IRTSearchRoute extends RouteGenericInterface {
    Querystring: typeof querySchema;
  }
  
  // Define the '/IRT-search' route using app.route
  app.route({
    method: 'GET',
    url: '/IRT-search',
    schema: {
      querystring: querySchema
    },
    handler: async (request: FastifyRequest<IRTSearchRoute>, reply: FastifyReply) => {
      const { token } = request.query;
  
      try {
        // Define the headers for the Axios request
        const headers = {
          'Authorization': `Bearer ${token}`,
        };
  
        // Make a GET request with headers to the specified URL
        const response = await axios.get('https://internal.com/irt', { headers });
  
        // Return the result
        return response.data;
      } catch (error) {
        // Handle errors if the Axios request fails
        reply.code(500).send({ error: 'Internal Server Error' });
      }
    }
  });
  
  // Start the server
  const start = async () => {
    try {
      await app.listen(3000);
      console.log(`Server is running at http://localhost:3000`);
    } catch (err) {
      app.log.error(err);
      process.exit(1);
    }
  };
  start();
  