Fastify provides a range of core methods to help you create and manage your web server efficiently. Here are the key methods:

### 1. `fastify.register()`

Registers plugins, routes, and decorators. It's used to modularize and encapsulate functionality.

### 2. Route Methods (`get`, `post`, `put`, `delete`, etc.)

Define routes for handling HTTP requests. Fastify supports all standard HTTP methods:

- `fastify.get(path, options, handler)`
- `fastify.post(path, options, handler)`
- `fastify.put(path, options, handler)`
- `fastify.delete(path, options, handler)`
- `fastify.patch(path, options, handler)`
- `fastify.options(path, options, handler)`

### 3. `fastify.listen()`

Starts the server and listens for incoming connections.

### 4. `fastify.decorate()`

Adds custom properties or methods to the Fastify instance, request, or reply objects.

### 5. `fastify.addHook()`

Adds lifecycle hooks that execute at specific points in the request/response lifecycle (e.g., `onRequest`, `preHandler`, `onSend`, etc.).

### 6. `fastify.addSchema()`

Adds JSON schemas for request validation and response serialization.

### 7. `fastify.setErrorHandler()`

Sets a custom error handler for the Fastify instance.

### 8. `fastify.setNotFoundHandler()`

Sets a custom handler for handling 404 (not found) errors.

### 9. `fastify.ready()`

Ensures that all plugins and routes are loaded before starting to accept requests.

### 10. `fastify.close()`

Closes the Fastify instance and stops accepting new requests.

### Detailed Overview of Core Methods

#### `fastify.register()`

```javascript
fastify.register(plugin, options);
```

- **plugin**: The plugin function or object to be registered.
- **options**: Optional configuration for the plugin.

#### Route Methods

```javascript
fastify.get("/path", async (request, reply) => {
  return { message: "Hello, world!" };
});
```

Defines a route to handle GET requests at `/path`.

#### `fastify.listen()`

```javascript
fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening at ${address}`);
});
```

Starts the server and listens on port 3000.

#### `fastify.decorate()`

```javascript
fastify.decorate("utility", () => {
  return "This is a utility function";
});
```

Adds a custom method to the Fastify instance.

#### `fastify.addHook()`

```javascript
fastify.addHook("onRequest", async (request, reply) => {
  // Code to run before each request
});
```

Adds a lifecycle hook that runs before each request.

#### `fastify.addSchema()`

```javascript
fastify.addSchema({
  $id: "mySchema",
  type: "object",
  properties: {
    name: { type: "string" },
  },
});
```

Adds a JSON schema for validation.

#### `fastify.setErrorHandler()`

```javascript
fastify.setErrorHandler((error, request, reply) => {
  reply.status(500).send({ error: "An error occurred" });
});
```

Sets a custom error handler.

#### `fastify.setNotFoundHandler()`

```javascript
fastify.setNotFoundHandler((request, reply) => {
  reply.status(404).send({ error: "Not Found" });
});
```

Sets a custom handler for 404 errors.

#### `fastify.ready()`

```javascript
fastify.ready((err) => {
  if (err) throw err;
  console.log("Fastify is ready!");
});
```

Ensures all plugins and routes are loaded before starting.

#### `fastify.close()`

```javascript
fastify.close((err) => {
  if (err) throw err;
  console.log("Fastify instance closed");
});
```

Closes the Fastify instance.

### Example Usage

```javascript
const fastify = require("fastify")({ logger: true });

// Register a plugin
fastify.register(async function (instance, options) {
  instance.get("/plugin-route", async (request, reply) => {
    return { message: "Hello from plugin" };
  });
});

// Add a route
fastify.get("/hello", async (request, reply) => {
  return { message: "Hello, world!" };
});

// Add a lifecycle hook
fastify.addHook("onRequest", async (request, reply) => {
  fastify.log.info("Request received");
});

// Add a custom error handler
fastify.setErrorHandler((error, request, reply) => {
  reply.status(500).send({ error: "An error occurred" });
});

// Start the server
fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening at ${address}`);
});
```

In this example, various core methods are used to set up a Fastify server with a plugin, route, hook, and error handler.
