const API_KEY = process.env.REACT_APP_API_KEY;




export const setRequest = async (str) => {

    
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${str}&filter=free-ebooks&key=`+API_KEY);
    const books = await response.json();

    return books;

}