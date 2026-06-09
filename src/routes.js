import { Router } from "express";
import { listarOficinasService, listarCarrosPorOficinaService, cadastrarOficinaService, atualizarOficinaService, deletarOficinaService } from "./service/oficina.service.js"
import { listarVeiculosService, listarManutencoesPorVeiculoService, cadastrarVeiculoService, atualizarVeiculoService, deletarVeiculoService } from "../src/service/veiculos.service.js"
import { cadastrarNovaManutencaoService, listarManutencoesService, atualizarManutencaoService, deletarManutencaoService, listaDeManutencoesPorOficinaService, listaDeManutencoesPorVeiculoService } from "../src/service/manutencoes.service.js"


const routers = Router()

//ROTAS OFICINAS
routers.get("/oficina", async (req, res) => {
    try {
        const listaDeOficinas = await listarOficinasService()
        res.status(200).json(listaDeOficinas)
    } catch (error) {
        return res.status(404).json({ mensage: "erro ao buscar as oficinas cadastradas", error })
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
    try {
        const id = req.params.id
        const oficinaDeletada = await deletarOficinaService(id)
        res.status(200).json(oficinaDeletada)
    } catch (error) {
        res.status(404).json({ message: "Erro ao deletar a oficina", error })
    }
})




//ROTAS VEICULOS
routers.get("/veiculo", async (req, res) => {
    try {
        const listaDeVeiculos = await listarVeiculosService()
        res.status(200).json(listaDeVeiculos)
    } catch (error) {
        res.status(404).json({ message: "erro ao buscar os veiculos cadastrados", error })
    }
})

routers.get("/veiculo/:id", async (req, res) => {
    try {
        const id = req.params.id
        const listaDeManutencoes = await listarManutencoesPorVeiculoService(id)
        res.status(200).json(listaDeManutencoes)//terminar para trazer a manutencao feita
    } catch (error) {
        res.status(404).json({ message: "erro ao buscar as manutenções do veiculo informado", error })
    }
})

routers.post("/veiculo", async (req, res) => {
    try {
        const novoVeiculo = req.body
        const veiculoCriado = await cadastrarVeiculoService(novoVeiculo)
        res.status(201).json(veiculoCriado)
    } catch (error) {
        return res.status(404).json({ mensage: "erro ao cadastrar um veiculo", error })
    }
})

routers.put("/veiculo/:id", async (req, res) => {
    try {
        const id = req.params.id
        const veiculoAtualizado = req.body
        const veiculoAtt = await atualizarVeiculoService(id, veiculoAtualizado)
        res.status(201).json(veiculoAtt)
    } catch (error) {
        res.status(404).json({ message: "Erro ao atualizar um veiculo", error })
    }
})

routers.delete("/veiculo/:id", async (req, res) => {
    try {
        const id = req.params.id
        const veiculoDeletado = await deletarVeiculoService(id)
        res.status(200).json(veiculoDeletado)
    } catch (error) {
        res.status(404).json({ message: "Erro ao deletar o veiculo", error })
    }
})


//ROTAS MANUTENCOES
routers.get("/manutencao", async (req, res) => {
    try {
        const listaDeManutencoes = await listarManutencoesService()
        res.status(200).json(listaDeManutencoes)
    } catch (error) {
        res.status(404).json({ message: "Erro ao listar as manutenções", error })
    }
})

routers.post("/manutencao", async (req, res) => {
    try {
        const novaManutencao = req.body
        const manutencaoCriada = await cadastrarNovaManutencaoService(novaManutencao)
        res.status(201).json(manutencaoCriada)
    } catch (error) {
        res.status(404).json({ message: "Erro ao cadastrar uma manutenção", error })
    }
})

routers.put("/manutencao/:id", async (req, res) => {
    try {
        const id = req.params.id
        const manutencaoAtualizada = req.body
        const manutencaoAtt = await atualizarManutencaoService(id, manutencaoAtualizada)
        res.status(201).json(manutencaoAtt)
    } catch (error) {
        res.status(404).json({ message: "Erro ao atualizar uma manutenção", error })
    }
})

routers.delete("/manutencao/:id", async (req, res) => {
    try {
        const id = req.params.id
        const manutencaoDeletada = await deletarManutencaoService(id)
        res.status(200).json(manutencaoDeletada)
    } catch (error) {
        res.status(404).json({ message: "Erro ao excluir uma manutenção", error })
    }
})

routers.get("/manutencao/oficina/:id", async (req, res) => {
    try {
        const idOficina = req.params.id
        const listaDeManutencoesPorOficina = await listaDeManutencoesPorOficinaService(idOficina)
        res.status(200).json(listaDeManutencoesPorOficina) 
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar uma manutenção por oficina", error })
    }
})

routers.get("/manutencao/veiculo/:id", async (req, res) => {
    try {
        const idVeiculo = req.params.id
        const listaDeManutencoesPorVeiculo = await listaDeManutencoesPorVeiculoService(idVeiculo)
        res.status(200).json(listaDeManutencoesPorVeiculo) 
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar uma manutenção por Veiculo", error })
    }
})

export default routers;