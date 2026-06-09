import { listarVeiculos, listarVeiculoPorId } from "../repository/read/read.veiculos.repository.js"
import {cadastrarVeiculo, atualizarVeiculo, deletarVeiculo} from "../repository/write/write.veiculos.repository.js"

export async function listarVeiculosService() {
    const listaDeVeiculos = await listarVeiculos()
    return await listaDeVeiculos
}

export async function listarManutencoesPorVeiculoService(id) {
    try {
        if (!id) {
            throw new Error("Id de veiculo informado inválido:" + error.message)
        }
        const veiculo = await listarVeiculoPorId(id)
        const listaDeManutencoes = await veiculo.manutencoesRealizadas
        return await listaDeManutencoes

    } catch (error) {

    }
}

export async function cadastrarVeiculoService(body) {
    try {
        if (!body.placa || !body.modelo || !body.ano || !body.proprietario || !body.manutencoesRealizadas) {
            throw new Error("Digite todos os parametros necessarios para cadastrar um veiculo" + error.message)
        }
        const novaOficina = await cadastrarVeiculo(body)
        return await novaOficina
    } catch (error) {
        throw new Error("Erro ao cadastrar um veiculo" + error.message)
    }
}

export async function atualizarVeiculoService(id, body) {
    try {
        if (!body.placa || !body.modelo || !body.ano || !body.proprietario || !body.manutencoesRealizadas) {
            throw new Error("Digite todos os parametros necessarios para atualizar um veiculo" + error.message)
        }
        const veiculoAtualizado = await atualizarVeiculo(id, body)
        return veiculoAtualizado
    } catch (error) {

    }
}

export async function deletarVeiculoService(id){
    try {
        if (!id){
            throw new Error("Digite um id para excluir um veiculo" + error.message)
        }
        const veiculoDeletado = await deletarVeiculo(id)
        return await veiculoDeletado
    } catch (error) {
        
    }
}