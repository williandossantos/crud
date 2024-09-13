const { Router } = require("express")
const homeConstroller = require("../controller/homeController")

// chama rota
const router = Router()

// rota inicial HOME
router.get("/", homeConstroller.mostrar, (req, res)=>{

})





// exporta a rota
module.exports = router