const key = 'AIzaSyAZ7iLOrYFkToebJE7JtBCYN111MpbwZP4';

export const getBook = async (queryField) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${queryField}&maxResults=39&keyes&key=${key}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getSampleToDoList = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
      throw new Error('Failed to fetch sample to-do list');
    }
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getStoreBooks = async () => {
  try {
    const response = await fetch('https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks');
    if (!response.ok) {
      throw new Error('Failed to fetch store books');
    }
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
