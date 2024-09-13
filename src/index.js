const express = require("express")
const path = require("path")
const router = require("./routes/indexRouter")
const app = express()

// transforma o codigo em json
app.use(express.json())

// configura o arquivo para ejs
app.set("view engine", "ejs")

// pega o arquivo ejs na pasta views para renderizar
app.set("views", path.resolve(__dirname, "views"))

app.use(express.static(__dirname + "/public"))

// chama a rota no arquivo rota
app.use(router)

// ativa o servidor
app.listen(8080, () => {
    console.log("Servidor ativo")
    console.log("http://localhost:8080")
})


































