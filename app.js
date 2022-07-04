const express = require ("express");
const app = express();
const port = 3000;
const methodOverride = require ("method-override");
const addressRoute = require("./src/routes/addressRoute");

app.use(express.static(__dirname + "/src/public"));
app.use(methodOverride("_method"));
app.use(express.json);
app.use(express.urlencoded({extended:false}));
app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");

app.use("/address", addressRoute);



app.listen(port, ()=>{
    console.log (`Servidor rodando em http://http://localhost:${port}`)
});