import listarOficinas from "../repository/read/read.oficina.repository.js"
import cadastrarOficina from "../repository/write/write.oficina.repository.js"

export async function listarOficinasService(res) {
    try {
        const listaDeOficinas = await listarOficinas()
        return await listaDeOficinas
    } catch (error) {
        throw new Error("Erro ao cadastrar a oficina: " + error.message)
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

        }
    }
}
////parei aquiiiiiiiiiiiiiiiiiiiii 04/07/2024