const { Router } = require("express")
const homeConstroller = require("../controller/homeController")
const loginConstroller = require("../controller/loginController")

// chama rota
const router = Router()

// rota inicial HOME
router.get("/", homeConstroller.mostrar)
router.get("/login", loginConstroller.autencicacao)





// exporta a rota
module.exports = router