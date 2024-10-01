const express = require("express");

const app = express();

app.get("/", ({ req, res }: any) => {
  res.json({
    message: "hello world",
  });
});
