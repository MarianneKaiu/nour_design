const express = require("express");
const sequelize = require("./src/back-end/db/sequelize");
const port = 6000;
//require("dotenv").config({ path: "./config/.env" });

const app = express();

sequelize.initDb();

app.get("/", (req, res) => {
    res.json("Hello :)");
});

require("./src/back-end/routes/read/findAll_Agencement")(app);
require("./src/back-end/routes/read/findAll_Meuble")(app);
require("./src/back-end/routes/read/findAll_PetitsObjets")(app);
require("./src/back-end/routes/read/findAll_Comment")(app);

require("./src/back-end/routes/read/findByPk_Agencement")(app);
require("./src/back-end/routes/read/findByPk_Meuble")(app);
require("./src/back-end/routes/read/findByPk_PetitObjet")(app);
require("./src/back-end/routes/read/findByPk_Comment")(app);

// require("./src/back-end/routes/update/update_Agencement")(app);
// require("./src/back-end/routes/update/update_Meuble")(app);
// require("./src/back-end/routes/update/update_PetitObjet")(app);
// require("./src/back-end/routes/update/update_Comment")(app);

require("./src/back-end/routes/create/create_Agencement")(app);
// require("./src/back-end/routes/create/create_Meuble")(app);
// require("./src/back-end/routes/create/create_PetitObjet")(app);
// require("./src/back-end/routes/create/create_Comment")(app);

// require("./src/back-end/routes/delete/delete_Agencement")(app);
// require("./src/back-end/routes/delete/delete_Meuble")(app);
// require("./src/back-end/routes/delete/delete_PetitObjet")(app);
// require("./src/back-end/routes/delete/delete_Comment")(app);

app.listen(port, () => {
    console.log(`Listening on Port ${port} http://localhost:${port}`);
});
