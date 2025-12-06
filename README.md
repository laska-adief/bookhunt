# Bookhunt

A web application for discovering and exploring books using the Open Library API.

## Key Features & Benefits

*   **Book Search:** Search for books by title, author, or subject.
*   **Book Details:** View detailed information about a specific book, including editions and related works.
*   **Responsive Design:**  Works seamlessly on various devices.
*   **Loading States:** Provides visual feedback while fetching data.

## Prerequisites & Dependencies

*   Node.js (v18 or higher)
*   npm or yarn or pnpm or bun

## Installation & Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/laska-adief/bookhunt.git
    cd bookhunt
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage Examples & API Documentation

This project uses the Open Library API.  Specifically:

*   **Search:** `https://openlibrary.org/search.json?q={query}&page={page}&limit={limit}`
*   **Book Details:** `https://openlibrary.org/books/{id}.json`
*   **Work Details:** `https://openlibrary.org/{work_key}.json`

**Example Usage (Search):**

To search for books with the query "The Lord of the Rings", navigate to the home page and enter the query in the search bar.  The application retrieves and displays the results using `searchBooks.ts`.

**Code Snippets:**

*   **`actions/getBook.ts`**: Fetches details for a single book edition.

    ```typescript
    import { apiFetch } from "@/lib/apiFetch";
    import { BookEditionDetail } from "@/models/BookEditionResponse";

    export const getBook = async (id: string) => {
      const url = `/books/${id}.json` || "";
      const res = await apiFetch<BookEditionDetail>(url, {
        method: "GET",
      });
      return res;
    };
    ```

*   **`actions/getWorkBook.ts`**: Fetches details for a work.

    ```typescript
    import { apiFetch } from "@/lib/apiFetch";
    import { OpenLibraryWorkDetail } from "@/models/BookWorkResponse";

    export const getWorkBook = async (key: string) => {
      const url = `${key}.json` || "";
      const res = await apiFetch<OpenLibraryWorkDetail>(url, {
        method: "GET",
      });
      return res;
    };
    ```

*   **`actions/searchBooks.ts`**: Searches for books based on a query.

    ```typescript
    import { apiFetch } from "@/lib/apiFetch";
    import { OpenLibrarySearchResponse } from "@/models/OpenLibraryResponse";

    interface SearchParams {
      query: string;
      page: number;
      limit: number;
    }

    export const searchBooks = async ({ query, page, limit }: SearchParams) => {
      const url = `/search.json?q=${query}&page=${page}&limit=${limit}` || "";
      const res = await apiFetch<OpenLibrarySearchResponse>(url, {
        method: "GET",
      });
      return res;
    };
    ```

## Configuration Options

Currently, there are no specific configurable settings beyond the standard Next.js configuration.

## Contributing Guidelines

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Submit a pull request to the main branch.

## License Information

License is not specified for this project.

## Acknowledgments

*   This project uses the [Open Library API](https://openlibrary.org/developers/api).
*   Built with [Next.js](https://nextjs.org).
*   Styling powered by [Tailwind CSS](https://tailwindcss.com/).
