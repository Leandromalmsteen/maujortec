import React from "react"
import Home from "./Home"

const tituloPagina = "Últimos lançamentos";

const dados = [
    { isbn: "978-85-7522-xxx-x", titulo: "React", autor: "Maujor" },
    { isbn: "978-85-7522-776-3", titulo: "Design UX", autor: "Will" },
    { isbn: "978-85-7522-550-9", titulo: "Laravel para Ninjas", autor: "Jack" }
]
const Principal = () => {
    return (
        <Home
            dados={dados}
            tituloPagina={tituloPagina}
        />
    )
}
    


export default Principal;