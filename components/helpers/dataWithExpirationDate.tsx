
// Function to set an item with expiration time in localStorage
export const setItemWithExpiration = (key: string, value: string, expirationMinutes: any) => {
    const now = new Date()
    const expirationTime = now.getTime() + expirationMinutes * 60 * 1000 // Convert expiration time to milliseconds
    const item = {
      value,
      expirationTime,
    }
    localStorage.setItem(key, JSON.stringify(item))
  }
  
  // Function to get an item from localStorage and check for expiration
  export const getItemWithExpiration = (key:string) => {
    const item = localStorage.getItem(key)
    if (!item) return null
  
    const parsedItem = JSON.parse(item)
    const now = new Date()
  
    if (now.getTime() > parsedItem.expirationTime) {
      // If item has expired, remove it from localStorage and return null
      localStorage.removeItem(key)
      return null
    }
  
    return parsedItem.value
  }
  