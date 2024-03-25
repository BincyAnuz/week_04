const express=require("express")
const session=require("express-session")
const app=express()
const userRoutes=require("./routes/userRoutes")
const path=require("path")
const hbs = require("express-handlebars");
let cookieParser = require("cookie-parser");

app.set('view engine','hbs')
app.set('views',path.join(__dirname,'views'))


app.engine(
    "hbs",
    hbs.engine({
      extname: "hbs",
      defaultLayout: "layout",
      layoutsDir: __dirname + "/views/layout/",
      partialsDir: __dirname + "/views/partials/",
    })
  );
  app.use(express.json())

  app.use(express.urlencoded({ extended: true }));
 app.use(express.static(path.join(__dirname,"public")))
 app.use(session({secret:"key",cookie:{maxAge:null}}))



app.use("/",userRoutes)


let PORT=5000
app.listen(PORT,()=>{console.log(`server running on http://localhost:${PORT}`)})