const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "38801743-5db6-4cc4-a473-efc74daa5d48" } }
    );

    return res.status(r.status).json(r.data);
  } catch (error) {
    console.error(error)

    return res.status(error.response.status).json(error.response.data);
  }
});

app.listen(3001);
