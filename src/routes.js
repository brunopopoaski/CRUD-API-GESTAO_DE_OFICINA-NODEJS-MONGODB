import { Router } from "express";
import { listarOficinasService, listarCarrosPorOficinaService, cadastrarOficinaService, atualizarOficinaService, deletarOficinaService } from "./service/oficina.service.js"

const routers = Router()


//ROTAS OFICINAS
routers.get("/oficina", async (req, res) => {
    try {
        const listaDeOficinas = await listarOficinasService(res)
        res.status(200).json(listaDeOficinas)
    } catch (error) {
        return res.status(404).json({ mensage: "erro ao buscar uma oficina", error })
    }
})

routers.get("/oficina/:id", async (req, res) => {
    try {
        const id = req.params.id
        const listaDeVeiculos = await listarCarrosPorOficinaService(id)
        res.status(200).json(listaDeVeiculos)
    } catch (error) {
        return res.status(404).json({ mensage: "erro ao buscar os carros da oficina", error })
    }
})

routers.post("/oficina", async (req, res) => {
    try {
        const oficina = req.body
        const novaOficina = await cadastrarOficinaService(oficina)
        res.status(201).json(novaOficina)
    } catch (error) {
        res.status(404).json({ message: "Erro ao cadastrar a oficina", error })
    }
})

routers.put("/oficina/:id", async (req, res) => {
    try {
        const id = req.params.id
        const oficinaAtualizada = req.body
        const oficinaAtt = await atualizarOficinaService(id, oficinaAtualizada)
        res.status(201).json(oficinaAtt)
    } catch (error) {
        res.status(404).json({ message: "Erro ao atualizar a oficina", error })
    }
}
)

routers.delete("/oficina/:id", async (req, res) => {
    try{
        const id = req.params.id
        const oficinaDeletada = await deletarOficinaService(id)
        res.status(200).json(oficinaDeletada)
    }catch (error) {
        res.status(404).json({ message: "Erro ao deletar a oficina", error })
    }
})


/* 

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