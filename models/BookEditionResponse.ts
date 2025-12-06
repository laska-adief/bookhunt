// Reusable interfaces for common object structures
interface KeyObject {
  key: string; // e.g., "/authors/OL23761A", "/type/edition"
}

interface Datetime {
  type: string; // e.g., "/type/datetime"
  value: string; // ISO 8601 string
}

interface Identifiers {
  goodreads: string[]; // e.g., ["17255028"]
  // Add other potential identifier types here if they exist in other editions (e.g., isbn_10: string[])
}

export interface BookEditionDetail {
  publishers: string[]; // e.g., ["Holiday House"]
  number_of_pages: number; // e.g., 55
  ia_box_id: string[]; // Internet Archive box ID
  pagination: string; // e.g., "[55] p."
  covers: number[]; // List of cover image IDs
  lc_classifications: string[]; // Library of Congress Classification
  key: string; // Edition key, e.g., "/books/OL24218215M"
  authors: KeyObject[]; // List of author keys
  ocaid: string; // Open Library Catalog ID
  publish_places: string[]; // e.g., ["[New York]"]
  contributions: string[]; // e.g., ["Shepard, Ernest H. 1879-1976."]
  description: string; // A brief summary of the book
  genres: string[]; // e.g., ["Fiction."]
  classifications: Record<string, any>; // An empty object in this sample, but kept for completeness
  source_records: string[]; // e.g., ["ia:reluctantdragon00grah"]
  title: string; // e.g., "The reluctant dragon."
  dewey_decimal_class: string[]; // Dewey Decimal Classification
  identifiers: Identifiers;
  subjects: string[]; // List of subject tags
  publish_date: string; // e.g., "1966"
  publish_country: string; // e.g., "nyu"
  by_statement: string; // e.g., "Illustrated by Ernest H. Shepard."
  oclc_numbers: string[];
  works: KeyObject[]; // List of work keys
  type: KeyObject; // Type key, e.g., { key: "/type/edition" }
  languages: KeyObject[]; // List of language keys
  latest_revision: number;
  revision: number;
  created: Datetime;
  last_modified: Datetime;
}
