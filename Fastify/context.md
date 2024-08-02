Fastify creates a new context every time it enters a new plugin.
We call these new contexts child contexts. A child context inherits only
from the parent contexts, and everything added inside a child context will not be visible to its parent or
its siblings’ contexts

The entities that are affected by scoping are:
Decorators
Hooks
Plugins
Routes

## if we don’t use the fastify-plugin module or the skip-override hidden property, register creates a new context, isolating whatever our plugin does.

`fastify-plugin` is a utility module in the Fastify ecosystem designed to make it easier and more straightforward to create plugins that have specific behaviors and characteristics when added to a Fastify instance. Essentially, it helps ensure that plugins are encapsulated correctly and that their dependencies are managed properly.

### Purpose of `fastify-plugin`

When you develop plugins for Fastify, you often want them to manipulate or extend the server's functionality, like adding hooks, decorators, or routes. Using `fastify-plugin` allows these extensions to escape the encapsulation rules that normally apply to plugins registered with Fastify. Normally, when you register a plugin in Fastify, it creates a new encapsulation context; this means that decorations, hooks, and other modifications made by the plugin do not affect the root Fastify instance or other plugins.

`fastify-plugin` is used when you want your plugin's changes to be applied to the parent scope instead of being encapsulated. It is particularly useful when creating plugins that are meant to extend or modify the core functionality of Fastify in ways that should be globally available to all parts of the application.

### How It Works

`fastify-plugin` takes a plugin function and an optional options object. The options object can specify the Fastify version compatibility and other plugin-specific options. Here’s how you typically use it:

```javascript
const fp = require("fastify-plugin");

function myPlugin(fastify, options, done) {
  // Add a decorator to the Fastify instance
  fastify.decorate("usefulFunction", () => {
    return "This is useful";
  });

  done();
}

// Wrapping the plugin function with fastify-plugin
module.exports = fp(myPlugin, {
  name: "myPlugin",
  fastify: "3.x",
  dependencies: ["otherPlugin"],
});
```

### Key Features of `fastify-plugin`

- **Escaping Encapsulation**: Allows the plugin to modify the root Fastify instance directly.
- **Dependencies**: You can specify dependencies that must be loaded before your plugin.
- **SemVer Compatibility**: You can declare which versions of Fastify your plugin is compatible with.

### Use Cases for `fastify-plugin`

1. **Core Enhancements**: When developing functionality that should modify the core behavior of Fastify, such as adding custom logging or security features that should be available application-wide.

2. **Utilities**: For creating utility functions or decorators that need to be available in every part of your application without needing to redeclare or reregister them.

3. **Integration Plugins**: When building integration plugins that tie in closely with Fastify’s lifecycle, such as plugins for database connections or authentication strategies that should be consistently available.

### Example Usage

An example might be creating a plugin to add custom authentication methods:

```javascript
const fp = require("fastify-plugin");

async function authPlugin(fastify, options) {
  fastify.decorate("authenticate", async (request, reply) => {
    // Authentication logic here
    if (request.headers.auth !== "secret") {
      throw new Error("Unauthorized");
    }
  });
}

module.exports = fp(authPlugin, {
  name: "authPlugin",
});
```

In this example, the `authenticate` decorator is added to the Fastify instance and can be used in any part of the application, ensuring that all routes can utilize consistent authentication logic.

### Conclusion

Using `fastify-plugin` is critical for developing reusable, well-integrated plugins in Fastify. It helps manage encapsulation and dependencies effectively, making it a valuable tool for both plugin developers and application developers who want to extend Fastify's capabilities in a maintainable and scalable way.
