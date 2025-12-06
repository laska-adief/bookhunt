export interface OpenLibraryWorkDetail {
  description?: Description | string;
  links?: Link[];
  title: string;
  dewey_number?: string[];
  covers?: number[];
  subject_places?: string[];
  first_publish_date?: string;
  subject_people?: string[];
  key: string;
  authors?: AuthorEntry[];
  subject_times?: string[];
  type?: TypeKey;
  subjects?: string[];
  lc_classifications?: string[];
  latest_revision?: number;
  revision?: number;
  created?: DateInfo;
  last_modified?: DateInfo;
}

export interface Description {
  type: string;
  value: string;
}

export interface Link {
  url: string;
  title: string;
  type: TypeKey;
}

export interface TypeKey {
  key: string;
}

export interface AuthorEntry {
  author: TypeKey;
  type: TypeKey;
}

export interface DateInfo {
  type: string;
  value: string; // ISO datetime string
}
