import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface SearchBarProps {
  searchQuery: string | null;
}

export default function SearchBar(props: SearchBarProps): JSX.Element {
  const [searchPopupOpen, setSearchPopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(props.searchQuery || "");

  const initiateSearch = (e: any) => {
    if (e.key === "Enter") {
      if (searchQuery !== "") {
        const encodedSearchQuery = encodeURIComponent(searchQuery);
        window.location.href = `/search?q=${encodedSearchQuery}`;
      }
    }
  };

  return (
    <div>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          aria-label={"Search"}
          name="search"
          id="search-button"
          className="block text-md w-full rounded-md py-1.5 pl-10 text-gray-900 border-0 focus:border-0 focus:ring-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-md sm:leading-6"
          placeholder="Search templates..."
          autoComplete={"off"}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={() => setSearchPopupOpen(true)}
          onKeyUp={(e) => initiateSearch(e)}
        />
      </div>
    </div>
  );
}
