// export type SearchParams = Promise<{
//   search: string | string[] | undefined;
//   sort: string | string[] | undefined;
// }>;

import { createSearchParamsCache, parseAsString } from "nuqs/server";

export const searchParser = parseAsString.withDefault("").withOptions({
  shallow: false,
  clearOnDefault: true,
});

export const sortParser = parseAsString.withDefault("newest").withOptions({
  shallow: false,
  clearOnDefault: true,
});

export const searchParamsCache = createSearchParamsCache({
  search: searchParser,
  sort: sortParser,
});

export type ParsedSearchParams = ReturnType<typeof searchParamsCache.parse>;

// * `?search=hello`  (string)
// * `?search[]
