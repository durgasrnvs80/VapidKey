const express = require("express");
const webPush = require("web-push");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("."));

app.listen(port,() => console.log(`Listening on ${port}`));

let keys = webPush.generateVAPIDKeys();
console.log(keys);

app.get("/keys", (request,response) => {
    response.json(keys);
})