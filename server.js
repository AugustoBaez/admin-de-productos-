const express = require("express")
const app = express()
require("./server/config/mongoose.config")

app.use(express.json())

const routes = require("./server/routes/admin.routes")
routes(app)

app.listen(8000, () => {
    console.log("you are now listening at port 8000")
})