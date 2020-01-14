const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from VS Code!!!!");
});
 
module.exports.app = app;
