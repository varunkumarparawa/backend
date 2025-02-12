
const fs= require("fs")
const read = () => {
fs.readFile("./data.txt","utf8", ( error,data)=>{
    if (error){
        console.log("error is loading")
    }
    else {
        console.log(data)
    }
    
})};
module.exports= read