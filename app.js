const express = require ("express");
const app = express();
const port = 3000;

const addressRoute = require("./src/routes/addressRoute");
const errorRoute = require ("./src/routes/errorRoute");
const methodOverride = require ("method-override");

app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/src/views");
app.set("view engine", "ejs");

app.use(methodOverride("_method"))
app.use(express.json);
app.use(express.urlencoded({extended:false}));



app.use("/address", addressRoute);
app.use("*", errorRoute);



app.listen(port, ()=>{
    console.log (`Servidor rodando em http://localhost:${port}`)
});