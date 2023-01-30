const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("conexion established"))
    .catch((error) => console.log("error conectando a la db", error))