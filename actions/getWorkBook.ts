import { apiFetch } from "@/lib/apiFetch";
import { OpenLibraryWorkDetail } from "@/models/BookWorkResponse";

export const getWorkBook = async (key: string) => {
  const url = `${key}.json` || "";
  const res = await apiFetch<OpenLibraryWorkDetail>(url, {
    method: "GET",
  });
  return res;
};
