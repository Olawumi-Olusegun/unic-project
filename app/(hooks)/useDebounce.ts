import { useState, useEffect } from 'react';
import { filterSearchString } from '@/utils/filterSearchString';

export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string>("");

  useEffect(() => {
    const filteredValue = filterSearchString(value)?.url as string;

    if (!filteredValue) return;

    const interval = setTimeout(() => {
      setDebouncedValue(filteredValue);
    }, delay);

    return () =>  clearTimeout(interval);
  }, [value, delay]);

  return debouncedValue;
};
