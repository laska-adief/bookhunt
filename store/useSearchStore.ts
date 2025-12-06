import { Ref, RefObject } from "react";
import { create } from "zustand";

interface SearchState {
  search: string;
  bookListRef: RefObject<HTMLDivElement | null> | null;
  setBookListRef: (ref: RefObject<HTMLDivElement | null>) => void;
  handleSearch: (query: string) => void;
}

export const useSearchStore = create<SearchState>((set, get) => ({
  search: "",
  bookListRef: null,
  setBookListRef: (ref) => {
    set({ bookListRef: ref });
  },
  handleSearch: (query: string) => {
    const { bookListRef } = get();
    set({
      search: query,
    });

    if (bookListRef?.current) {
      bookListRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  },
}));
