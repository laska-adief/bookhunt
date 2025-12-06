"use client";
import { OpenLibraryBook } from "@/models/OpenLibraryResponse";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DialogBookNotFound from "./DialogBookNotFound";

const BookCard = ({
  cover_i,
  first_publish_year,
  title,
  bookKey,
  cover_edition_key,
}: OpenLibraryBook & { bookKey: string }) => {
  const router = useRouter();
  const idBook = bookKey.replace("/works/", "");
  const notAvailableImage = "/no-available-image.png";
  const [imageCover, setImageCover] = useState(
    cover_i
      ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
      : notAvailableImage
  );

  const [showDialog, setShowDialog] = useState(false);

  const handleDetailBook = () => {
    if (!cover_edition_key) {
      setShowDialog(true);
      return;
    }

    router.push(`/book/${cover_edition_key}`);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <>
      <div
        // href={`book/${cover_edition_key}`}
        className="flex flex-col h-full gap-4 p-3 text-center transition-all duration-200 cursor-pointer hover:bg-blue-950/20 hover:scale-105"
        onClick={handleDetailBook}
      >
        <Image
          src={imageCover}
          alt="image"
          height={100}
          width={100}
          className="w-full h-64 rounded-sm object-fit"
          onError={() => setImageCover(notAvailableImage)}
        />
        <div>
          <h5 className="text-sm font-bold uppercase">{title}</h5>
        </div>
        <div>
          <span className="text-sm">({first_publish_year})</span>
        </div>
        {/* <div className="mt-3">
        {author_name?.length &&
          author_name.slice(0, 1).map((author: string, iAuthor: number) => (
            <span
              className="px-2 py-1 text-xs rounded-full bg-blue-950"
              key={iAuthor}
            >
              {author}
            </span>
          ))}
      </div> */}
      </div>

      {<DialogBookNotFound open={showDialog} onClose={handleCloseDialog} />}
    </>
  );
};

export default BookCard;
