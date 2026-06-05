import { Router } from "express";
import {listarOficinasService, cadastrarOficinaService} from "./service/oficina.service.js"

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


routers.post("/oficina", async (req, res) => {
    try {
        const oficina = req.body
        console.log(oficina);
        const novaOficina = await cadastrarOficinaService(oficina)
        res.status(201).json(novaOficina)
        console.log(novaOficina);
    } catch (error) {
        res.status(404).json({ message: "Erro ao cadastrar a oficina", error })
    }
} )


/* 
routers.get("/oficina/:id", )


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

 */

export default routers;