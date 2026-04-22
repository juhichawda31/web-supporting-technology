const fs = require('fs');

let data = [{name:"A"},{name:"B"}];

fs.writeFileSync('new.json', JSON.stringify(data));
console.log("File created");