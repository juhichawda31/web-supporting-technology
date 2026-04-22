const fs = require('fs');

fs.readFile('data.json','utf8',(err,data)=>{
  if(err) return console.log(err);

  let d = JSON.parse(data);
  d.forEach(p=>console.log(p.name));
});