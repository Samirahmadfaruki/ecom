import SellerController from "../controllers/sellercontroller.js";
import AuthController from "../controllers/authcontroller.js";
import SellerService from "../services/sellerservice.js";
import AuthService from "../services/authservice.js";

export default function (app) {
  let sellermgr = new SellerService();
  let authmgr = new AuthService();
  let controller = new SellerController(sellermgr);
  let authcontroller = new AuthController(authmgr);

  //Map controller callback functions for rest API routes
  app.get("/api/seller", controller.get);
  app.get("/api/seller/:id", controller.getById);
  app.put("/api/seller/:id", controller.update);

  // Seller Auth
  app.post("/api/seller/login", authcontroller.sellerLogin);
  app.post("/api/seller/register", authcontroller.sellerRegister);
  app.put("/api/seller/:id", authcontroller.updateSellerPassword);
}