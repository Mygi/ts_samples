/* JSON Sample of book
    "cover_i": 258027,
    "has_fulltext": true,
    "edition_count": 120,
    "title": "The Lord of the Rings",
    "author_name": [
        "J. R. R. Tolkien"
    ],
    "first_publish_year": 1954,
    "key": "OL27448W",
    "ia": [
        "returnofking00tolk_1",
        "lordofrings00tolk_1",
        "lordofrings00tolk_0",
    ],
    "author_key": [
        "OL26320A"
    ],
    "public_scan_b": true
*/


/**
 * Results Model
 * {
    "start": 0,
    "num_found": 629,
    "docs": [
        {...},
        {...},
        ...
        {...}]
   }
 */

export interface book_result {
    cover_i: number;
    has_fulltext: boolean;
    edition_count: number;
    title: string;
    author_name: string[];
    first_publish_year: number;
    key: string;
    ia: string[];
    author_key: string[];
    public_scan_b: boolean;
}

export interface book_search_results {
    start: number;
    num_found: number;
    docs: book_result[]; 
}