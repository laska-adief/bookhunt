import { apiFetch } from "@/lib/apiFetch";
import { BookEditionDetail } from "@/models/BookEditionResponse";

export const getBook = async (id: string) => {
  const url = `/books/${id}.json` || "";
  const res = await apiFetch<BookEditionDetail>(url, {
    method: "GET",
  });
  return res;
};
