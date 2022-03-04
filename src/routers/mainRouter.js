const express = require("express")
const router = express.Router()

const mainController = require("../controllers/mainController")
routers = {

    index: router.get("/", mainController.index),
    register: router.get("/register", mainController.register),
    carrito: router.get("/carrito", mainController.carrito ),
    login: router.get("/login", mainController.login),
    productDetail: router.get("/product-detail",mainController.details)
}



module.exports = routers;