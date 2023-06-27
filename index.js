
const express = require('express');
var cors = require('cors');
const app = express();
const port = 1900;
const auth=require('./Authentic.json');
const chefs= require('./chefs.json');

app.use(cors());

app.get('/authentic',(req,res)=>{
  res.send(auth)
})

app.get('/chefs/:id',(req,res)=>{
 const id=parseInt(req.params.id);
 const chef=chefs.find(chef=>(chef.id)===id)||{};
 res.send(chef)
})
app.get('/chefs',(req,res)=>{
  res.send(chefs)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port: /http://localhost:${port}`)
})
