import { book_search_results } from "../models/book_search";
import { get_books } from "../services/restful_service";

import * as fs from 'fs';

function write_log(content:string) {
    fs.writeFile('log.txt', content, err => {
    if (err) {
        console.error(err);
    } else {
        // file written successfully
    }
    });
}


describe('get_books', () => {
    it('should find 253 of_mice_and_men', async () => {
    const data:book_search_results = await get_books("of mice and men");
    expect(data).toBeDefined()
    expect(data.num_found).toBe(253)
    // write_log( JSON.stringify(data));
    // console.log(data.num_found)
  });
});
  