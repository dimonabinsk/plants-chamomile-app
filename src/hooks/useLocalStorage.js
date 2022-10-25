import { useState, useEffect } from "react";

const useLocalStorage = (initialValue, key) => {
  const getValue = () => {
    const storage = localStorage.getItem(key); // string || null
    if (storage) {
      return JSON.parse(storage);
    }
    return initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export { useLocalStorage };
