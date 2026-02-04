import express from "express";

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Сервер працює! 🎉");
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
