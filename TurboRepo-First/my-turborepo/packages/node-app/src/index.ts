const express = require("express");
const app = express();

app.get("/display", ({ req, res }: any) => {
  res.send({ msg: "Hello world" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
