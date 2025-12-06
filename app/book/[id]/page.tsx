import { getBook } from "@/actions/getBook";
import { getWorkBook } from "@/actions/getWorkBook";
import BackButton from "./BackButton";
import BookDetailCard from "./BookDetailCard";

interface BookDetailPageProps {
  params: {
    id: string;
  };
}

const BookDetail = async ({ params }: BookDetailPageProps) => {
  const prm = await params;
  const bookId = await prm.id;
  const book = await getBook(bookId);
  const work = await getWorkBook(book.works[0].key);
  const {
    title,
    publishers = [],
    number_of_pages,
    genres = [],
    publish_date,
    publish_places = [],
    covers = [],
  } = book;
  const { description, first_publish_date, subjects = [] } = work;

  return (
    <div className="min-h-screen bg-obsidian">
      <div className="w-full max-w-6xl gap-4 p-8 mx-auto text-white">
        <BackButton />
        <BookDetailCard
          title={title}
          publishers={publishers}
          number_of_pages={number_of_pages}
          genres={genres}
          publish_date={publish_date}
          publish_places={publish_places}
          covers={covers}
          description={description}
          first_publish_date={first_publish_date}
          subjects={subjects}
        />
      </div>
    </div>
  );
};

export default BookDetail;
