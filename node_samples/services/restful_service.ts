import axios from 'axios';
import { book_search_results } from "../models/book_search.js";

export const books_api = "https://openlibrary.org/search.json?q="
export async function get_books(search_str: string) {
    
    try {
      const {data, status}= await axios.get<book_search_results>(`${books_api}/${search_str}`);
      return data;
    }
    catch (error) {
        console.log('unexpected error: ', error);
        throw(error);
    }
    
  
  };
  