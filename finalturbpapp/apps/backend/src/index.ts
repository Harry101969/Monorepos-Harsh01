import express from "express";
const app = express();

import { BACKEND_URL, VALUE } from '@repo/common/config';
app.get("/", ({ req, res }: any) => {
  res.json({ msg: "Hello World",URL:BACKEND_URL });
});
app.get("/users", ({ req, res }: any) => {
  res.send(`Hello User ${VALUE}`);
});
app.listen(3007, () => {
  console.log("Server is running on port 3007");
});
