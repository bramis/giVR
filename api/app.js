const express = require("express");
const axios = require("axios");
const Unsplash = require("unsplash-js").default;
const { toJson } = require("unsplash-js");
const bodyParser = require("body-parser");

global.fetch = require("node-fetch");

const google_key = "AIzaSyATxSur4kjrBEg6cdNtG30zO4SIdZMgzmw";
const google_cx = "000166153319241769584:reo5-dxx1f0";
const searchType = "image";

const unsplash_access_key =
  "ecee36b14df1501d7f7740a71dc1a4d8c14655a719a25972e5d8fca0eebb14c4";
const unsplash_secret_key =
  "83d1b359e54f80442300c55289857dc00d43d0736e4812bcc6c2b78afdaac5dc";
const unsplash = new Unsplash({
  applicationId: unsplash_access_key,
  secret: unsplash_secret_key
});

const app = express();

// parse application/x-www-form-urlencoded and application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello from api");
});

app.post("/google", async (req, res) => {
  let { query } = req.body;

  let result =
    query === "mock"
      ? require("./mock/google_cat.json")
      : (await axios.get(
          `https://www.googleapis.com/customsearch/v1?q=${query}&searchType=${searchType}&key=${google_key}&cx=${google_cx}`
        )).data;

  res.setHeader("Content-Type", "application/json");
  res.json(result);
});

app.post("/unsplash", async (req, res) => {
  let { query } = req.body;

  let result =
    query === "mock"
      ? require("./mock/unsplash_cat.json")
      : await unsplash.photos
          .searchPhotos(query, undefined, 1, 10)
          .then(toJson);

  res.setHeader("Content-Type", "application/json");
  res.json(result);
});

app.listen(3000, function() {
  console.log("api listening on port 3000!");
});
