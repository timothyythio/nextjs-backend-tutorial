import { Router } from "express";

const userRouter = Router();

//CRUD

userRouter.post("/", (req, res) => {
  res.send({
    title: "User created successfully!",
  });
});

userRouter.get("/", (req, res) => {
  res.send({
    title: "List of users",
  });
});

userRouter.get("/:id", (req, res) => {
  res.send({
    title: "User details",
  });
});

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
