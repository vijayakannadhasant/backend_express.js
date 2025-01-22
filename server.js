// const http = require('http');
// const server = http.createServer((req,res) => {
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.end("<h1>Hello World</h1>");
// });
// server.listen(3000,() => {
// //     console.log("Server running at http://127.0.0.1:3000/");
// // });
// const calculate = require("./calculator")
// console.log(calculate.add(80,20))
const newPerson  = {
    naem:"john",
    age:35,
    city:"New York",
    amount : 1500
}

fs.readFile('sample.json','utf8',(err,data) => {
    if(err){
        console.log(err)
        return 
    }
    const json = JSON.parse(data)
    const newList = {...json,newPerson}
    fs.writeFile('sample.json',JSON.stringify(newLis t),{err}=>{
        if(err){
            console.error(err)
            return 
  }
    });
});