import express from "express";
const app = express();
import { BACKEND_URL } from "@repo/common/config";
app.get("/", ({ req, res }: any) => {
  res.json({ msg: "Hello World", BACKEND_URL });
});
app.get("/users", ({ req, res }: any) => {
  res.send("Hello User Harsh");
});
app.listen(3007, () => {
  console.log("Server is running on port 3007");
});
