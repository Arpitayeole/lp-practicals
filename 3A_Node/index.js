const express=require('express');
const app=express();
app.use(express.static('publi'));

app.listen(4000,()=>{
    console.log('server is running on port 4000');
});

// index.js
// public
//    ---index.html

// npm init
// npm install express
// node index.js