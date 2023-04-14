const express = require("express");
const cors = require("cors");
const googleRoutes = require("./routes/googleRoutes");

const app = express();

app.use(cors());

app.use("/api", googleRoutes);

app.listen(process.env.PORT || 8000, () => {
    console.log("server started on port 8000");
});
