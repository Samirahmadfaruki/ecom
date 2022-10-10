import FeedbackController from "../controllers/feedbackcontroller.js";
import FeedbacksService from "../services/feedbackservice.js";

export default function (app) {
  let mgr = new FeedbacksService();
  let controller = new FeedbackController(mgr);

  //Map controller callback functions for rest API routes
  app.get("/api/feedback", controller.get);
  app.post("/api/feedback", controller.post);
  app.get("/api/feedback/:id", controller.getById);
  app.put("/api/feedback/:id", controller.update);
  app.delete("/api/feedback/:id", controller.delete);
}