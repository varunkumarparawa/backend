const fs = require('fs');
const data=fs.readFileSync("./data.txt","utf-8");
console.log(data);
// fs.writeFileSync("./data.txt","ce promises");
// fs.appendFileSync("./data.txt","aktu");
// fs.renameFileSync("./data.txt","aktu");
console.log(data);
if(data.match("H")){
    console.log("H is present")
    const changedata=data.replace("H","abes");
    fs.writeFileSync("./data.txt",changedata);
}