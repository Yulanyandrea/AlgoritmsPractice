const expres = require("express")
const app = expres()

app.get("/user/:id",(req,res)=>{
  res.send("hello"+ req.params.id)
})

app.listen(3000)
