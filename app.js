const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from VS Code!v22");
});
 
module.exports.app = app;
