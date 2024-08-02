Fastify provides a variety of lifecycle hooks that allow you to run custom code at specific points in the request/response lifecycle. These hooks enable you to extend Fastify's behavior and customize the handling of requests and responses.

### List of Available Hooks

1. **onRequest**
2. **preParsing**
3. **preValidation**
4. **preHandler**
5. **preSerialization**
6. **onSend**
7. **onResponse**
8. **onTimeout**
9. **onError**
10. **onReady**
11. **onClose**

### Detailed Overview of Each Hook

#### 1. `onRequest`

- **Triggered**: Before the request is processed.
- **Use Case**: Logging, authentication, or modifying the request.

```javascript
fastify.addHook("onRequest", async (request, reply) => {
  // Code to run before the request is processed
  fastify.log.info("onRequest hook");
});
```

#### 2. `preParsing`

- **Triggered**: Before the request body is parsed.
- **Use Case**: Custom parsing logic or modifying the request stream.

```javascript
fastify.addHook("preParsing", async (request, reply, payload) => {
  // Code to run before the request body is parsed
  fastify.log.info("preParsing hook");
  return payload; // Return the payload to continue processing
});
```

#### 3. `preValidation`

- **Triggered**: Before the request is validated.
- **Use Case**: Custom validation or modifying request data.

```javascript
fastify.addHook("preValidation", async (request, reply) => {
  // Code to run before the request is validated
  fastify.log.info("preValidation hook");
});
```

#### 4. `preHandler`

- **Triggered**: Before the request handler is executed.
- **Use Case**: Preprocessing, authorization checks, or modifying the request.

```javascript
fastify.addHook("preHandler", async (request, reply) => {
  // Code to run before the request handler is executed
  fastify.log.info("preHandler hook");
});
```

#### 5. `preSerialization`

- **Triggered**: Before the response is serialized.
- **Use Case**: Modifying the response data before serialization.

```javascript
fastify.addHook("preSerialization", async (request, reply, payload) => {
  // Code to run before the response is serialized
  fastify.log.info("preSerialization hook");
  return payload; // Return the payload to continue processing
});
```

#### 6. `onSend`

- **Triggered**: Before the response is sent to the client.
- **Use Case**: Adding headers, modifying the response, or logging.

```javascript
fastify.addHook("onSend", async (request, reply, payload) => {
  // Code to run before the response is sent
  fastify.log.info("onSend hook");
  return payload; // Return the payload to continue sending
});
```

#### 7. `onResponse`

- **Triggered**: After the response is sent to the client.
- **Use Case**: Logging or cleanup tasks.

```javascript
fastify.addHook("onResponse", async (request, reply) => {
  // Code to run after the response is sent
  fastify.log.info("onResponse hook");
});
```

#### 8. `onTimeout`

- **Triggered**: When the request times out.
- **Use Case**: Custom timeout handling logic.

```javascript
fastify.addHook("onTimeout", async (request, reply) => {
  // Code to run when the request times out
  fastify.log.info("onTimeout hook");
});
```

#### 9. `onError`

- **Triggered**: When an error occurs during request processing.
- **Use Case**: Custom error handling or logging.

```javascript
fastify.addHook("onError", async (request, reply, error) => {
  // Code to run when an error occurs
  fastify.log.error("onError hook", error);
});
```

#### 10. `onReady`

- **Triggered**: When the Fastify instance is ready.
- **Use Case**: Initialization tasks or setup that needs to happen after the server is ready.

```javascript
fastify.addHook("onReady", async () => {
  // Code to run when the Fastify instance is ready
  fastify.log.info("onReady hook");
});
```

#### 11. `onClose`

- **Triggered**: When the Fastify instance is closing.
- **Use Case**: Cleanup tasks or resource deallocation.

```javascript
fastify.addHook("onClose", async (instance, done) => {
  // Code to run when the Fastify instance is closing
  fastify.log.info("onClose hook");
  done();
});
```

### Example of Using Multiple Hooks

```javascript
const fastify = require("fastify")({ logger: true });

fastify.addHook("onRequest", async (request, reply) => {
  fastify.log.info("onRequest hook");
});

fastify.addHook("preHandler", async (request, reply) => {
  fastify.log.info("preHandler hook");
});

fastify.addHook("onResponse", async (request, reply) => {
  fastify.log.info("onResponse hook");
});

fastify.get("/example", async (request, reply) => {
  return { message: "Hello, world!" };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    fastify.log.info(`Server running at http://localhost:3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
```

### Conclusion

Fastify hooks provide a powerful way to run custom code at various stages of the request/response lifecycle. By utilizing these hooks, you can add custom logic for tasks such as logging, authentication, validation, response manipulation, and error handling, ensuring that your application behaves exactly as needed at each step of processing requests and responses.
