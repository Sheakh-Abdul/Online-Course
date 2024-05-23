//import connection from 'mysql';

import { connection } from "./connect.js";
import { table, table_admin, table_id, table_name } from "./mysqlConst.js";

export const show = (req, res) => {
    const qry = `select * from users where length(username)>1 order by 1;`

    connection.query(qry, (er, result) => {
        if (er) {
            res.status(500).send("Something Wrong");
        }
        else {
            res.status(200).send(result);
        }
    });
}

export const deleteData = (req, res)=>{
    //const {id} = req.body;
    const qry = `delete from users where username = '${req.params.n}';`;
    //const qry = `update ${STUDENT_TABLE_NAME} set name='${name}', marks='${marks}', phone='${phone}' where id=${req.params.id}`

    connection.query(qry,(er,result)=>{
        if (er) {

            console.log(er);
            res.status(400).send("Something wrong here");
        }
        else {
            if (result.length == 0) {
                res.status(400).send("Data nhi h table m");
            }
            else {
                console.log("Delete ho gya");
                res.send({msg:"Delete ho gya"});
            }
        }
    })
}





export const find = (req, res) => {
    const id = req.params.n;
    const qry = `select username, name, email, phone from users where username = '${id}';`;
    connection.query(qry, (er, result) => {
        if (er) {   

            console.log("Error h");
            res.status(400).send("Something wrong here");
        }
        else {
            if (result.length == 0) {
                res.status(400).send("Data nhi h table m");
            }
            else {
                res.send(result[0]);
            }
        }
    })
}

export const updateData = (req, res)=>{
    const {username,name,email,phone} = req.body;
    const qry = `update users set name = '${name}', email = '${email}', phone = '${phone}' where username = '${req.params.n}';`;
    //const qry = `update ${STUDENT_TABLE_NAME} set name='${name}', marks='${marks}', phone='${phone}' where id=${req.params.id}`

    connection.query(qry,(er,result)=>{
        if (er) {

            console.log("Error h");
            res.status(400).send("Something wrong here");
        }
        else {
            if (result.length == 0) {
                res.status(400).send("Data nhi h table m");
            }
            else {
                res.send(result);
            }
        }
    })
}
//CRUD = create, read, update, delete


export const addData = (req, res)=>{
    const {id,name,marks,xyz} = req.body;
    const qry = `insert into ${table} values(${id},'${name}',${marks},${xyz})`;
    //const qry = `update ${STUDENT_TABLE_NAME} set name='${name}', marks='${marks}', phone='${phone}' where id=${req.params.id}`

    connection.query(qry,(er,result)=>{
        if (er) {

            console.log("Error h");
            res.status(400).send("Something wrong here");
        }
        else {
            if (result.length == 0) {
                res.status(400).send("Data nhi h table m");
            }
            else {
                res.send({msg:"insert ho gya", rst : result});
            }
        }
    })
}


export const home = (req, res) => {
    res.send("Hello World");
}

export const newTable = (req, res)=>{
    const tableName = req.params.name;
    const qry= `create table ${tableName} (id int, name varchar(20)); `;
    connection.query(qry,(er, result)=>{
        if (er) {

            console.log("Error h");
            res.status(400).send("Something wrong here");
        }
        else {
            if (result.length == 0) {
                res.status(400).send("Data nhi h table m");
            }
            else {
                res.send(result);
            }
        } 
    })

}
