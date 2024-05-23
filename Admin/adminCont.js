
import pkg  from "bcryptjs";
import { table_admin, admin_pass } from "../DataBase/mysqlConst.js";
import { connection } from "../DataBase/connect.js";
import jwt from 'jsonwebtoken';


const { hashSync , compareSync } = pkg;
export const adminInsert = (req, res)=> {
    
    const {id , name, pass, phone } = req.body;

    const encrptPass = hashSync(pass,10); //(hello,)

    const qry = `insert into ${table_admin} values (${id}, '${name}', '${encrptPass}', '${phone}');`;
    connection.query(qry,(er, result)=>{
        if(er){
            res.send("Something Wrong here");
        }
        else{
           
            res.send({msg : "add ho gya bhai"})
        }
    })

}

export const loginCheck = (req , res )=>{
    const {name , pass } = req.body;
    const qry = `select * from ${table_admin} where name = '${name}';`;
    //console.log(pass);
    connection.query(qry,(er,result)=>{
        if(er){
            res.status(500).send("Kuch toh galat hua h DAYA!!");
        }
        else{
            
            if(result.length == 0){
                res.status(400).send({msg : "User Mila Nhi h"});
            }
            const encrptPas = result[0].pass; 
            if (compareSync(pass, encrptPas)){ //(hello, jhfystsydfuygklntssdv)
                
                const token = jwt.sign({AdminId : result[0].id}, 'hello'); // hello is secret key
                res.status(200).send({msg: "Login Ho gya bhai..", token : token, data : result});
            }else{
                res.status(400).send({msg: "Password Galat hai"});
                
            }
        }
    })
}
// token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBZG1pbklkIjoxMDUsImlhdCI6MTcxNTU5MTM0NH0.dTZBWmKzk2IDhPUnlLy4ZfdFyXxT9k-4b3IAa-8RE6ss

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBZG1pbklkIjoxMDEsImlhdCI6MTcxNTc2MDgxMX0.r75Fottsf-Pnr56ML4VXc8UQ3IXf5kFN5VlbUnBTrSQ

export const verifyToken = (req,res,next)=>{
    const header = req.get('Authorization');

    if(header){
        const token = header.split(" ")[1];
        //console.log(token);
        jwt.verify(token, 'hello', (err, payload)=>{
            if(err){
                console.log(err);
                res.status(401).send({Msg: 'Token galat h bhai'});
                
            }
            else{
                next();
            }
        });
    }
    else{
        res.status(401).send({msg: 'token toh bhej bhai'});
    }
}