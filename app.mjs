import bodyParser from "body-parser";
import  express  from "express";
import path from "path";

const app = express();

const __dirname = path.resolve();

var items = ["buy food", "cook food", "eat food"];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');
app.get("/", (req,res)=>{
   
    var today = new Date();
    var day = today.getDay;
    var dayName = ""
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    var day = today.toLocaleDateString("en-US", options);
    
    res.render("list", {kindOfDay: day, NewListItem:items});
})

app.post( "/",(req,res)=>{
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})


app.listen(3000, ()=>{
    console.log("I am up and listening");
})