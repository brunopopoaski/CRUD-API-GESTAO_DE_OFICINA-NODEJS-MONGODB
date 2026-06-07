import listarOficinas from "../repository/read/read.oficina.repository.js"
import { cadastrarOficina, atualizarOficina, deletarOficina } from "../repository/write/write.oficina.repository.js"

export async function listarOficinasService(res) {
    try {
        const listaDeOficinas = await listarOficinas()
        return await listaDeOficinas
    } catch (error) {
        throw new Error("Erro ao listar as oficinas: " + error.message)
    }
}

export async function listarCarrosPorOficinaService(id) {
    try {
        if (!id) {
            throw new Error("ID da oficina é necessário para listar os carros")
        }
        const oficina = await listarOficinaPorId(id)
        const listaDeVeiculos = oficina.veiculos
        return await listaDeVeiculos
    } catch (error) {
        throw new Error("Erro ao listar os carros da oficina: " + error.message)
    }
}

export async function cadastrarOficinaService(body) {
    try {
        if (!body.nome || !body.endereco || !body.especialidades) {
            throw new Error("Dados incompletos para cadastro da oficina")
        }
        const novaOficina = await cadastrarOficina(body)
        return await novaOficina
    } catch (error) {
        throw new Error("Erro ao cadastrar a oficina: " + error.message)
    }
}

export async function atualizarOficinaService(id, body) {
    try {
        if (!id || !body.nome || !body.endereco || !body.especialidades){
            throw new Error("Dados incompletos para atualização da oficina")
        }
        const oficinaAtualizada = await atualizarOficina(id, body)
        return await oficinaAtualizada
    } catch (error) {
        throw new Error("Erro ao atualizar a oficina: " + error.message)
    }
}

export async function deletarOficinaService(id) {
    try {
        if (!id) {
            throw new Error("ID da oficina é necessário para deletar")
        }
        const oficinaDeletada = await deletarOficina(id)
        return await oficinaDeletada
    } catch (error) {
        throw new Error("Erro ao deletar a oficina: " + error.message)
    }
}