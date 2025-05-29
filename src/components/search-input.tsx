"use client";

import { Input } from "./ui/input";
import { useDebouncedCallback } from "use-debounce";
import { searchParser } from "@/features/ticket/search-params";
import {useQueryState} from 'nuqs'

type SearchInputProps = {
  placeholder: string;
};

const SearchInput = ({ placeholder }: SearchInputProps) => {
  const [search, setSearch] = useQueryState('search', searchParser)

  const handleSearch = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
   setSearch(event.target.value)
    },
    200
  );
  // This debounce time can be adjusted as needed which prevents high frequency query to database
  return (
    <Input
      placeholder={placeholder}
      onChange={handleSearch}
      defaultValue={search}
    />
  );
};

export { SearchInput };
