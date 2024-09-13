/*
const mostrar = (_, response) => {
    // envia a resposta renderizando o arquivo home da views home
    response.render("home")
}*/


module.exports = {
    mostrar: (_, res) => res.render("home")
}
