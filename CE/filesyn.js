// const fs = require("fs/promises");
// const read = async ()=>{
//     const data = await fs.readFile("./data.txt","utf-8");
//     console.log(data)
// }
// read();

// const { write } = require("fs");
const fs = require("fs/promises");
const write = async ()=>{
    const newdata = "this is data"
 await fs.writeFile("./data1.txt",newdata,"utf-8");
   
}
write();