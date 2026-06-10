import { cadastrarManutencao, atualizarManutencao, deletarManutencao } from "../repository/write/write.manutencao.repository.js"
import { listarManutencoes, listaDeManutencoesPorOficina, listaDeManutencoesPorVeiculo } from "../repository/read/read.manutencoes.repository.js"
import { atualizarOficinaVeiculo } from "../repository/write/write.oficina.repository.js"
import { atualizarManutencaoVeiculo } from "../repository/write/write.veiculos.repository.js"
import { listarOficinaPorId } from "../repository/read/read.oficina.repository.js"
import { listarVeiculoPorId } from "../repository/read/read.veiculos.repository.js"

export async function cadastrarNovaManutencaoService(body) {
    try {
        if (!body.idOficina || !body.idVeiculo || !body.servicos || !body.data || !body.valorTotal) {
            throw new Error("Digite todas as informações necessarias para cadastrar uma manutenção" + error.message)
        }
        //validacoes se oficina e veiculo inputados existem.
        const oficinaExiste = await listarOficinaPorId(body.idOficina)
        if (!oficinaExiste) {
            throw new Error("Digite uma oficina existente para cadastrar uma manutenção" + error.message)
        }
        const veiculoExiste = await listarVeiculoPorId(body.idVeiculo)
        if (!veiculoExiste) {
            throw new Error("Digite um veiculo existente para cadastrar uma manutenção" + error.message)
        }

        const novaManutencao = await cadastrarManutencao(body.idOficina, body.idVeiculo, body.servicos, body.data, body.valorTotal)
        //
        const idOficina = body.idOficina
        const idVeiculoParaOficina = await novaManutencao.idVeiculo
        const atualizandoArrayVeiculos = await atualizarOficinaVeiculo(idOficina, idVeiculoParaOficina)
        //
        const idVeiculo = body.idVeiculo
        const idManutencaoParaVeiculo = await novaManutencao._id
        const atualizandoArrayManutencoesRealizadas = await atualizarManutencaoVeiculo(idVeiculo, idManutencaoParaVeiculo)
        //
        return await novaManutencao
    } catch (error) {
        throw new Error("Erro ao cadastrar a uma manutenção" + error.message)
    }
}

export async function listarManutencoesService() {
    try {
        const listaDeManutencoes = await listarManutencoes()
        return listaDeManutencoes
    } catch (error) {
        throw new Error("Erro ao listar as manutenções" + error.message)
    }
}

export async function atualizarManutencaoService(id, body) {
    try {
        if (!id || !body.idOficina || !body.idVeiculo || !body.servicos || !body.data || !body.valorTotal) {
            throw new Error("Digite todas as informações necessarias para atualizar uma manutenção" + error.message)
        }
        //validacoes se oficina e veiculo inputados existem.
        const oficinaExiste = await listarOficinaPorId(body.idOficina)
        if (oficinaExiste) {
            throw new Error("Digite uma oficina existente para cadastrar uma manutenção" + error.message)
        }
        const veiculoExiste = await listarVeiculoPorId(body.idVeiculo)
        if (veiculoExiste) {
            throw new Error("Digite um veiculo existente para cadastrar uma manutenção" + error.message)
        }
        const manutencaoAtualizada = await atualizarManutencao(id, body.idOficina, body.idVeiculo, body.servicos, body.data, body.valorTotal)
        return await manutencaoAtualizada
    } catch (error) {
        throw new Error("Erro ao atualizar a uma manutenção" + error.message)
    }
}

export async function deletarManutencaoService(id) {
    try {
        if (!id) {
            throw new Error("Digite um id para excluir uma manutenção" + error.message)
        }
        const manutencaoDeletada = await deletarManutencao(id)
        return manutencaoDeletada
    } catch (error) {

    }
}

export async function listaDeManutencoesPorOficinaService(id) {
    try {
        if (!id) {
            throw new Error("Digite um id para listar as manutenções de uma oficina" + error.message)
        }
        const listaDeManutencoes = await listaDeManutencoesPorOficina(id)
        return await listaDeManutencoes
    } catch (error) {
        throw new Error("Erro ao listar as manutenções de uma oficina" + error.message)
    }
}

export async function listaDeManutencoesPorVeiculoService(id) {
    try {
        if (!id) {
            throw new Error("Digite um id para listar as manutenções de uma veiculo" + error.message)
        }
        const listaDeManutencoes = await listaDeManutencoesPorVeiculo(id)
        return await listaDeManutencoes
    } catch (error) {
        throw new Error("Erro ao listar as manutenções de uma veiculo" + error.message)
    }
}
