import { Description } from "./BookWorkResponse";

export interface BookDetailProp {
  title: string;
  publishers: string[];
  number_of_pages: number;
  genres: string[];
  publish_date: string;
  publish_places: string[];
  covers: number[];
  description?: Description | string;
  first_publish_date?: string;
  subjects: string[];
}
