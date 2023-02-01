const Product = require("../models/admin.model")

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((products) => (res.json({ product: products })))
        .catch((error) => res.json({ message: "error found", error }))
}

module.exports.findProduct = (req, res) => {
    Product.find({ _id: req.params.id })
        .then((product) => (res.json({ product })))
        .catch((error) => ({ message: "error finding product", error }))
}

module.exports.addProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => res.json({ product: newProduct }))
        .catch((error) => res.json({ message: "error adding new product", error }))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((updateProduct) => res.json({ product: updateProduct }))
        .catch((error) => res.json({ message: "error updating", error }))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then((result) => res.json({ result: result }))
        .catch((error) => res.json({ message: "error deleting product", error }))

}