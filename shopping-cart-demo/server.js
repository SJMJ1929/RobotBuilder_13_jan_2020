const express = require('express');
const app = express();
const fs = require('fs');
const { resolve } = require('path');
const path = require('path');

const indexHTML = (()=>{
  return fs.readFileSync(path.resolve(__dirname,"./public/index.html"),"utf-8");
})();

app.use("/dist",express.static(path.resolve(__dirname,"./dist")));


app.get('*',(req,res)=>
{
  res.write(indexHTML);
  res.end();
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
  console.log(`server started at http://localhost:${port}`);
});