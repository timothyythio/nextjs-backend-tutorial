import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.post("/", (req, res) => {
  res.send({
    title: "Subscription created successfully!",
  });
});

subscriptionRouter.get("/", (req, res) => {
  res.send({
    title: "List of subscriptions",
  });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({
    title: "Subscription details",
  });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({
    title: "Subscription updated successfully!",
  });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({
    title: "Subscription deleted successfully!",
  });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({
    title: "GET all user's subscriptions",
  });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({
    title: "Cancel user's subscriptions",
  });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({
    title: "GET upcoming renewals",
  });
});

export default subscriptionRouter;
