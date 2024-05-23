import pkg from "bcryptjs";
import { connection } from "./connect.js";
import jwt from 'jsonwebtoken';

const { hashSync , compareSync } = pkg;

export const addUser = (req, res)=>{
    
    const {username,name,password,email,phone} = req.body;
    const encrptPas = hashSync(password,10);
    const qry = `insert into users values('${username}','${name}','${encrptPas}','${email}','${phone}');`;
    connection.query(qry,(er,result)=>{
        if(er){
            console.log("Error h");
            res.status(400).send("Something wrong here");
        }
        else {
            if (result.length == 0) {
                res.status(400).send("Data nhi h table m");
            }
            else {
                res.send({msg:"New User Created", rst : result});
            }
        }
    })
}

export const checkUser = (req,res)=>{
    const {username, password} = req.body;
    const qry = `select * from users where username = '${username}';`;
    connection.query(qry,(er,result)=>{
        if(er){
            res.status(400).send({msg: "Kuch toh galat hua h DAYA!!"});
        }
        else{
            
            if(result.length == 0){
                res.status(400).send({msg : "Username is incorrect"});
            }
            const encrptPas = result[0].password; 
            if (compareSync(password, encrptPas)){ //(hello, jhfystsydfuygklntssdv)
                
                const token = jwt.sign({AdminId : result[0].name}, 'hello'); // hello is secret key
                res.status(200).send({msg: "Login Ho gya bhai..", token : token, data : result});
            }else{
                res.status(400).send({msg: "Password is invalid"});
                
            }
        }
    })
}

export const newUserTable = (req, res)=>{
    const {username,name,password,email,phone} = req.body;
    const qry= `create table ${username} (id int, name varchar(200), teacher varchar(30), price int, date varchar(20));`;
    connection.query(qry,(er, result)=>{
        if (er) {

            console.log("Error h");
            res.status(400).send("Qry galat h");
        }
        else {
                res.send({msg: `Table created as ${username}` });            
        } 
    })

}

export const addCourse = (req, res)=>{
    
    const {id,name,teacher,price} = req.body;
    console.log(`insert into addNew values ('${id}','${name}','${teacher}','${price}');`);
    
    const qry = `insert into ab_sam043(id,name,teacher,price,date) values ('${id}','${name}','${teacher}','${price}$',now());`;
    connection.query(qry,(er,result)=>{
        if(er){
            console.log("Error h");
            res.status(400).send("Something wrong here");
        }
        else {
                res.send({msg:"insert ho gya", rst : result});
            
        }
    })
}

export const showCourse = (req, res) => {
    const qry = `select * from ab_sam043 where length(id) > 1 order by 5 ;`

    connection.query(qry, (er, result) => {
        if (er) {
            res.status(500).send("Something Wrong");
        }
        else {
            res.status(200).send(result);
        }
    });
}

export const deleteCourse = (req, res)=>{
    const qry = `delete from ab_sam043 where sn = ${req.params.n};`;
    connection.query(qry,(er,result)=>{
        if (er) {
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

export const addFeedback = (req, res)=>{
    const {username,name,email,phone,feedback} = req.body;
    const qry = `insert into feedback values('${name}','${username}','${phone}','${email}','${feedback}',now());`;
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


export const showFeedback = (req, res) => {
    const qry = `select * from feedback where length(feedback) > 1 order by 6 ;`

    connection.query(qry, (er, result) => {
        if (er) {
            res.status(500).send("Something Wrong");
        }
        else {
            res.status(200).send(result);
        }
    });
}

export const deleteFeedback = (req, res)=>{
    const qry = `delete from feedback where username = '${req.params.n}';`;
    connection.query(qry,(er,result)=>{
        if (er) {
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