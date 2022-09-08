import { useEffect, useState } from "react";

export const useDebouncer = (searchTerm) => {
  const [debouncedValue, setDebounceValue] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  return debouncedValue;
};
