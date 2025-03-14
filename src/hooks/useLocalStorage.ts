import react, { useEffect, useState } from "react";
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState(() =>
    JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue))
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
}

// const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<number[]>(
//     "bookmarkedIds",
//     []
//   );
