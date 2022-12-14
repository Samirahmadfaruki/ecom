import ProductController from "../controllers/productcontroller.js";
import ProductService from "../services/productservice.js";

export default function (app) {
  let mgr = new ProductService();
  let controller = new ProductController(mgr);
  //Map controller callback functions for rest API routes
  app.get("/api/product", controller.get);
  app.get("/api/product/:id", controller.getById);
  app.post("/api/product", controller.post);
  app.delete("/api/product/:id", controller.delete);
  app.put("/api/product/:id", controller.update);
}