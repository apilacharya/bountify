export type SearchParams = Promise<{
  search: string | string[] | undefined;
  sort: string | string[] | undefined;
}>;


// * `?search=hello`  (string)
// * `?search[]