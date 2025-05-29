// export type SearchParams = Promise<{
//   search: string | string[] | undefined;
//   sort: string | string[] | undefined;
// }>;

import { createSearchParamsCache, parseAsString } from "nuqs/server";

export const searchParamsCache = createSearchParamsCache({
  search: parseAsString.withDefault(""),
  sort: parseAsString.withDefault("newest"),
});

export type ParsedSearchParams = ReturnType<typeof searchParamsCache.parse>;

// * `?search=hello`  (string)
// * `?search[]
