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
