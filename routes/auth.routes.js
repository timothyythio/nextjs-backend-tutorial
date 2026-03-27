import { Router } from "express";

const authRouter = Router();

authRouter.post("sign-up", (req, res) => {
  res.send({
    title: "User signed up successfully!",
  });
});

authRouter.post("sign-in", (req, res) => {
  res.send({
    title: "User signed in successfully!",
  });
});

authRouter.post("sign-out", (req, res) => {
  res.send({
    title: "User signed out successfully!",
  });
});

export default authRouter;
