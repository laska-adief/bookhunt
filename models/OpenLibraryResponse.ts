export interface OpenLibrarySearchResponse {
  numFound: number;
  start: number;
  offset: number;
  numFoundExact: boolean;
  docs: OpenLibraryBook[];
}

export interface OpenLibraryBook {
  key: string; // "/works/OL27448W"
  title: string;
  edition_count: number;
  first_publish_year?: number;
  has_fulltext: boolean;

  author_key?: string[];
  author_name?: string[];

  cover_i?: number;
  cover_edition_key?: string;

  ebook_access?: "public" | "borrowable" | "no_ebook" | string;
  public_scan_b?: boolean;

  ia?: string[];
  ia_collection_s?: string;
  lending_identifier_s?: string;
  lending_edition_s?: string;

  language?: string[];
  subject?: string[];

  // Extra metadata OpenLibrary sometimes sends
  publisher?: string[];
  publish_date?: string[];
  publish_year?: number[];

  // Ratings (sometimes present)
  ratings_average?: number;
  ratings_count?: number;
}
