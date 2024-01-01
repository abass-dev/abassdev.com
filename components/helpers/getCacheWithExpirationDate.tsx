// Function to set an item with expiration time in localStorage

export const setCacheWithExpirationDate: (
  key: string,
  value: string,
  expirationMinutes: number
) => void = (key, value, expirationMinutes) => {
  const now = new Date();
  const expirationTime = now.getTime() + expirationMinutes * 60 * 1000; // Convert expiration time to milliseconds
  const item = {
    value,
    expirationTime,
  };
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(key, JSON.stringify(item));
  }
};

// Function to get an item from localStorage and check for expiration
export const getCacheWithExpirationDate = (key: string) => {
  if (typeof window !== "undefined" && window.localStorage) {
    const item = localStorage.getItem(key);
    if (!item) {
      return null;
    }
    const parsedItem = JSON.parse(item);
    const now = new Date();
    if (now.getTime() > parsedItem.expirationTime) {
      localStorage.removeItem(key);
      return null;
    }
    return parsedItem.value;
  }
};
