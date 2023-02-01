const AdminController = require("../controllers/adminProds.controller")

module.exports = (app) => {
    app.get("/api/products", AdminController.findAllProducts)
    app.get("/api/products/:id", AdminController.findProduct)
    app.post("/api/product/new", AdminController.addProduct)
    app.put("/api/products/update/:id", AdminController.updateProduct)
    app.delete("/api/products/:id", AdminController.deleteProduct)
}