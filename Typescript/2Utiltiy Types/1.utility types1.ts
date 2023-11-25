namespace ss {
  interface RequestOptions {
    url: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    headers: Record<string, string>;
    body?: string;
  }

  function apiRequest(options: RequestOptions): Promise<Response> {
    // Make the API request using the provided options.
    // ...
  }

  // Define the type for the new function, omitting the 'body' property.
  type ApiRequestWithoutBody = Omit<RequestOptions, "body">;

  // Define the new function, allowing users to omit the 'body' property.
  function apiRequestWithoutBody(options: ApiRequestWithoutBody): Promise<Response> {
    return apiRequest(options);
  }

  // Extract the parameter types of the 'apiRequest' function.
  type ApiRequestParameters = Parameters<typeof apiRequest>;

  // Define a higher-order function that wraps the 'apiRequest' function.
  function createApiRequestWrapper(wrapperFn: (params: ApiRequestParameters) => ApiRequestParameters): typeof apiRequest {
    return function wrappedApiRequest(options: RequestOptions): Promise<Response> {
      const modifiedParams = wrapperFn([options]);
      return apiRequest(...modifiedParams);
    };
  }

  // A wrapper function that adds an authorization header to the request.
  function authWrapper(params: ApiRequestParameters): ApiRequestParameters {
    const [options] = params;
    return [{ ...options, headers: { ...options.headers, Authorization: "Bearer XYZ" } }];
  }

  // Create a new 'apiRequest' function with the authorization wrapper.
  const apiRequestWithAuth = createApiRequestWrapper(authWrapper);

  // Now we can make API requests with and without the 'body' property and with the authorization header.
  apiRequest({ url: "/example", method: "GET", headers: {} });
  apiRequestWithoutBody({ url: "/example", method: "GET", headers: {} });
  apiRequestWithAuth({ url: "/example", method: "GET", headers: {} });
}
