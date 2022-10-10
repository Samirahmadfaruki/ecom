import express from "express";
import expressSession from "express-session";
import cors from "cors";
import productroutes from "./routes/productroutes.js";
import customerroutes from "./routes/customerroutes.js";
import vendorroutes from "./routes/vendorroutes.js";
import staffroutes from "./routes/staffroutes.js";
import sellerroutes from "./routes/sellerroutes.js";
import orderroutes from "./routes/orderroutes.js";
import dashboardroutes from "./routes/dashboardroutes.js";
import deliveryroutes from "./routes/deliveryroutes.js";
import feedbackroutes from "./routes/feedbackroutes.js";
import accountroutes from "./routes/accountroutes.js";
import categoryroutes from "./routes/categoryroutes.js";

const oneDay = 1000 * 60 * 60 * 24;
const app = express();
const PORT = 7000;
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));

var sessionMiddlware = expressSession({
  secret: "cart",
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: false,
});

app.use(sessionMiddlware);

//
productroutes(app);
customerroutes(app);
sellerroutes(app);
staffroutes(app);
vendorroutes(app);
orderroutes(app);
dashboardroutes(app);
deliveryroutes(app);
feedbackroutes(app);
accountroutes(app);
categoryroutes(app);

app.listen(PORT, () => {
  console.log(`App Server is Listening on Port ${PORT}`);
});