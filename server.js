const http=require ("http")
const fs=require("fs")
var app;

const server = http.createServer((req,res)=>{
    console.log(req.url)
    if (fs.existsSync(req.url.slice(1))){
        app = req.url.slice(1)
        console.log(app)
        let data = fs.readFileSync((app+"/main.html"),"utf8")
        res.write(data)
        res.end() 
    }
    else if (fs.existsSync(app+req.url)){
        console.log(app+req.url)
        let data = fs.readFileSync((app+req.url))
        res.write(data)
        res.end() 
    }
    else{
        res.write("Page Not Found!!!")
        res.end()
    }
})
server.listen(8080)


    

//live 
// fs.watch((app+req.url),(event,filename)=>{
//     console.log("change")
//     let data = fs.readFileSync((app+req.url))
//     res.write(data)
//     res.end()
// })
