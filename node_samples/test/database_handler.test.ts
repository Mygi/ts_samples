import { assert } from "console";
import { create_user_table, insert_default_user } from "../services/database_service";


describe('database handler', () => {
    it('create a table', async () => {
    const user = await insert_default_user();
    expect(user.password).toBe("cas1201nasda&")
    // temp check
    
  });
});
  