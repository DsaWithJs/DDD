/**
 * Type Intersections
 */
namespace ss {
  type IndexPagination = {
    startingIndex: number;
    endingIndex: number;
  };

  type OffsetPagination = {
    offset: number;
    limit: number;
  };

  type Book = {
    author: string;
    yearOfPublication: number;
    isbn: string;
  };

  type BooksWithIndexedPagination = Book & IndexPagination;
  /**
        This expands to
        {
          author: string;
          yearOfPublication: number;
          isbn: string;
          startingIndex: number;
          endingIndex: number;
        }
      */

  type BooksWithOffsetPagination = Book & OffsetPagination;
  /** 
        This expands to
        {
          author: string;
          yearOfPublication: number;
          isbn: string;
          offset: number;
          limit: number;
        }
      */
}

/**
 * extends
 */
namespace ss {
  interface IndexPagination {
    startingIndex: number;
    endingIndex: number;
  }

  interface Book {
    author: string;
    yearOfPublication: number;
    isbn: string;
  }

  interface BooksWithIndexedPagination extends Book, IndexPagination {
    // You can add even more properties inside the braces
  }
}
