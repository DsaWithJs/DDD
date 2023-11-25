/**
 * The Pick type is used to create a new type that only includes the specified properties from an existing type.
 */
namespace ss {
  interface User {
    id: number;
    name: string;
    email: string;
  }

  type UserNameEmail = Pick<User, "name" | "email">;
}

namespace ss {
  type Post = {
    title: string;
    content: string;
    tags: string[];
    slug: string;
  };
  type DraftPost = Pick<Post, 'title' | 'content1'>;
}
