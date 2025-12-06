"use client";
import { BookDetailProp } from "@/models/BookDetail";
import Image from "next/image";
import { useState } from "react";

const BookDetailCard = ({
  title,
  publishers,
  number_of_pages,
  genres,
  publish_date,
  publish_places,
  covers,
  description,
  first_publish_date,
  subjects,
}: BookDetailProp) => {
  const [loadingImage, setLoadingImage] = useState(true);

  const notAvailableImage = "/no-available-image.png";
  const imageCover = covers[0]
    ? `https://covers.openlibrary.org/b/id/${covers[0]}-M.jpg`
    : notAvailableImage;
  const [imgSrc, setImgSrc] = useState(imageCover);

  return (
    <>
      <h1 className="text-3xl font-bold text-center">{title}</h1>
      <div className="flex flex-col items-start justify-center w-full gap-6 mt-6 md:flex-row">
        <div className="flex flex-col gap-4 w-full md:w-[30%]">
          <div className="p-4 border rounded-md shadow-lg border-white/10">
            {loadingImage && (
              <div className="w-40 mx-auto bg-gray-600 rounded-sm h-60 animate-pulse"></div>
            )}
            {
              <Image
                src={imgSrc}
                alt="Book cover"
                width={200}
                height={300}
                className={`object-cover  mx-auto rounded-md shadow-md  ${
                  loadingImage ? "opacity-0 h-0 w-0" : "opacity-100 w-40 h-60"
                }`}
                onError={() => {
                  setImgSrc(notAvailableImage);
                  setLoadingImage(false);
                }}
                onLoad={() => setLoadingImage(false)}
              />
            }

            <div className="mt-4 space-y-2 text-sm text-gray-300">
              <div>
                <span className="font-semibold text-white">Publishers:</span>{" "}
                {publishers?.length ? publishers.join(", ") : "-"}
              </div>

              <div>
                <span className="font-semibold text-white">Published:</span>{" "}
                {publish_date || "-"}
              </div>

              <div>
                <span className="font-semibold text-white">
                  First Published:
                </span>{" "}
                {first_publish_date || "-"}
              </div>

              <div>
                <span className="font-semibold text-white">Pblic Places:</span>{" "}
                {publish_places?.length ? publish_places.join(", ") : "-"}
              </div>

              <div>
                <span className="font-semibold text-white">Pages:</span>{" "}
                {number_of_pages || "-"}
              </div>

              <div>
                <span className="font-semibold text-white">Genres:</span>{" "}
                {genres?.length ? genres.join(", ") : "-"}
              </div>
            </div>
          </div>

          <div className="p-4 border rounded-md shadow-lg border-white/10">
            {subjects.length > 0 && (
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold tracking-wide text-white">
                  Subjects
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  {subjects.length &&
                    subjects.map((subject: string) => (
                      <span
                        key={subject}
                        className="px-2 py-1 text-xs uppercase border rounded-full border-white/10"
                      >
                        {subject}
                      </span>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full md:w-[70%]">
          <div className="p-4 border rounded-md shadow-lg border-white/10">
            <h2 className="text-xl font-semibold tracking-wide text-white">
              Description
            </h2>

            <p className="text-base leading-7 text-justify text-gray-300 whitespace-pre-line">
              {typeof description === "string"
                ? description
                : description?.value}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetailCard;
