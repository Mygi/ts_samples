import type { Route } from "./+types/book";
import { NavLink } from "react-router";
import axios from 'axios';
import type { book_search_results } from "~/models/book_search";
import { useEffect, useState } from "react";

const books_api = "https://openlibrary.org/search.json?q="
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Books" },
    { name: "description", content: "API to books!" },
  ];
}

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

export default function Book() {
  const [bookData, setBookData] = useState([]);

    useEffect(() => {
      axios.get("https://openlibrary.org/search.json?q=men%20without%20women")
        .then(response => setBookData(response.data.docs))
        .catch(error => console.error('Error fetching users:', error));
    }, []);
    return (
      <div>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
        </nav>
        <div>
          <ul>
            {bookData.map(book=> <li key={book.key}>{book.title}</li>)}
          </ul>
        </div>
      </div>
    );
}
