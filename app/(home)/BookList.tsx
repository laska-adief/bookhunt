"use client";
import { OpenLibraryBook } from "@/models/OpenLibraryResponse";
import { useSearchStore } from "@/store/useSearchStore";
import { useEffect, useRef, useState } from "react";
import BookCard from "./BookCard";
import BookCardLoading from "./BookCardSLoading";
import { useInView } from "react-intersection-observer";
import { searchBooks } from "@/actions/searchBooks";

const LIMIT = 10;

const BookList = () => {
  const { search, setBookListRef } = useSearchStore();
  const bookListRef = useRef<HTMLDivElement>(null);
  const [books, setBooks] = useState<OpenLibraryBook[]>([]);
  const [dataCount, setDataCount] = useState<number>(0);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const { ref: loadMoreRef, inView } = useInView({
    threshold: 0.2,
    rootMargin: "100px",
  });

  const fetchBooks = async ({ page }: { page: number }) => {
    const isFirstPage = page === 1;
    isFirstPage ? setLoadingInitial(true) : setLoadingMore(true);

    try {
      const res = await searchBooks({ query: search, page, limit: LIMIT });
      setBooks((prev) => (page === 1 ? res.docs : [...prev, ...res.docs]));
      setDataCount(res.numFound);
    } catch (error) {
      if (page === 1) setBooks([]);
    } finally {
      isFirstPage ? setLoadingInitial(false) : setLoadingMore(false);
    }
  };

  useEffect(() => {
    setBookListRef(bookListRef);
  }, []);

  useEffect(() => {
    if (!search) return;

    setPage(1);
    fetchBooks({ page: 1 });
  }, [search]);

  useEffect(() => {
    if (inView && !loadingInitial && !loadingMore) {
      setPage((prev) => prev + 1);
    }
  }, [inView, loadingInitial, loadingMore]);

  useEffect(() => {
    if (page !== 1 && dataCount !== books.length) {
      fetchBooks({ page });
    }
  }, [page]);

  const renderLoadingSkeletons = (count = LIMIT) =>
    Array.from({ length: count }).map((_, i) => (
      <BookCardLoading key={`loading-${i}`} index={i} />
    ));

  return (
    <div className="min-h-screen bg-obsidian" ref={bookListRef}>
      {search && (
        <div className="w-full max-w-6xl mx-auto">
          <p className="px-4 text-xl font-medium text-left text-white">
            Search : {search}
          </p>
        </div>
      )}
      <div className="grid items-start w-full max-w-6xl grid-cols-1 gap-4 p-4 mx-auto text-white justify-evenly sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {!loadingInitial &&
          books.length > 0 &&
          books.map((book: OpenLibraryBook, i: number) => (
            <div key={i}>
              <BookCard {...book} key={book.key} bookKey={book.key} />
            </div>
          ))}

        {loadingInitial && renderLoadingSkeletons()}

        {loadingMore && renderLoadingSkeletons()}
        {!loadingInitial && !loadingMore && !books.length && search && (
          <div className="flex items-center justify-center py-10 text-lg text-white col-span-full">
            No Data Found
          </div>
        )}
      </div>

      <div className="h-10" ref={loadMoreRef}></div>
    </div>
  );
};

export default BookList;
