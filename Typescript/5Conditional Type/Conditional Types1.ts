namespace ss {
    type Message<T> = T extends string ? "It's a string!" : "Not a string.";
    
    type message=Message<"hi">
}

/**
 * API client
 */
namespace ss {
  type ApiResponse<T> = T extends { success: true } ? { data: T } : { error: string };
}
