const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:"auto_equity_hub"
})

app.get('/',(re,res)=>{
    return res.json("From Backend side");
})

app.get('/users',(re,res)=>{
    const sql= "SELECT * FROM `users`";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
    
})


app.get('/stock',(re,res)=>{
    const sql= "SELECT * FROM `stock`";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
    
})

app.get('/customer',(re,res)=>{
    const sql= "SELECT * FROM `customer`";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
    
})

app.get('/fresh_leads',(re,res)=>{
    const sql= "SELECT * FROM `fresh_leads`";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
    
})

app.listen(8081,()=> {
    console.log("listing");
})