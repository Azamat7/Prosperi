// import { useState } from "react";

// export const useLocalStorage = (key) => {
//   const [storedValue, setStoredValue] = useState(() => {
//     const item = window.localStorage.getItem(key);
//     return item ? item : '123';
//   });

//   const setValue = (value) => {
//     window.localStorage.setItem(key, value);
//     setStoredValue(value);
//   }

//   return [storedValue, setValue];
// }