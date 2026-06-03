import { Router } from "express";
import listarOficinasService from "./service/oficina.service.js"

const routers = Router()


//ROTAS OFICINAS
routers.get("/oficina", async (req, res) => {
     try {
        const listaDeOficinas = await listarOficinasService(res)
        res.status(200).json(listaDeOficinas)
    } catch(error) {
        return res.status(404).json({mensage: "erro ao buscar uma oficina", error})
    } 
})

routers.get("/oficina/:id", )

routers.post("/oficina", )

routers.put("/oficina/:id", )

routers.delete("/oficina/:id", )



//ROTAS VEICULOS
routers.get("/veiculo", )

routers.get("/veiculo/:id", )

routers.post("/veiculo", )

routers.put("/veiculo/:id", )

routers.delete("/veiculo/:id", )



//ROTAS MANUTENCOES
routers.get("/manutencao", )

routers.get("/manutencao/:id", )

routers.post("/manutencao", )

routers.put("/manutencao/:id", )

routers.delete("/manutencao/:id", )


export default routers;