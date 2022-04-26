const express = require("express");
const app = express();
const { rateLimit, MemoryStore } = require("express-rate-limit");

const post = [
  {
    title: "Niku",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores reiciendis veniam itaque fugiat, quos quas magnam ratione repudiandae saepe accusantium quia ipsum recusandae doloremque laudantium possimus commodi iure? Libero!",
  },
  {
    title: "Welcome My Data",
    body: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores reiciendis veniam itaque fugiat, quos quas magnam ratione repudiandae saepe accusantium quia ipsum recusandae doloremque laudantium possimus commodi iure? Libero!",
  },
  {
    title: "Go to my profile",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores reiciendis veniam itaque fugiat, quos quas magnam ratione repudiandae saepe accusantium quia ipsum recusandae doloremque laudantium possimus commodi iure? Libero!",
  },
  {
    title: "Thankyou",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores reiciendis veniam itaque fugiat, quos quas magnam ratione repudiandae saepe accusantium quia ipsum recusandae doloremque laudantium possimus commodi iure? Libero!",
  },
];

var limit = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  standardHeaders: true,
  store: new MemoryStore(),
});

app.get("/post", limit, (req, res) => {
  res.send({
    status: "success",
    post: post,
  });
  console.log(req.rateLimit);
});

app.listen(4000, () => console.log("Listening to the port 4000"));
