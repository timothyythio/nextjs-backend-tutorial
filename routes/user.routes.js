import { Router } from "express";
import { getAllUsers, getUser } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";
import errorMiddleware from "../middlewares/error.middleware.js";

const userRouter = Router();

//CRUD

userRouter.post("/", (req, res) => {
  res.send({
    title: "User created successfully!",
  });
});

userRouter.get("/", authorize, getAllUsers);

userRouter.get("/:id", authorize, errorMiddleware, getUser);

userRouter.put("/:id", (req, res) => {
  res.send({
    title: "User updated successfully!",
  });
});

userRouter.delete("/:id", (req, res) => {
  res.send({
    title: "User deleted successfully!",
  });
});

export default userRouter;
