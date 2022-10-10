import CategoryController from "../controllers/categorycontroller.js";
import CategoryService from "../services/categoryservice.js";

export default function (app) {
  let mgr = new CategoryService();
  let controller = new CategoryController(mgr);

  //Map controller callback functions for rest API routes
  app.get("/api/category", controller.get);
  app.post("/api/category", controller.post);
  app.get("/api/category/:id", controller.getById);
  app.put("/api/category/:id", controller.update);
}