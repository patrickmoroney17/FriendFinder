const express = require('express');
const path = require('path');

const app = express()

const PORT = process.env.PORT || 3000;
  

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.json({type:'application/vnd.api+json'}));
app.use(express.text());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});