import { createConnection } from "mysql";

export const connection = createConnection(
    {
        host:'localhost',
        user : 'root',
        password : 'cdac',
        database : 'school'
    }
);

          