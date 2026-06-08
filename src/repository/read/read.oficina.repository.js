import MOficina from "../../database/oficina.schema.js"

export async function listarOficinas(){
    const listaDeOficinas = await MOficina.find()
    return await listaDeOficinas
}

export async function listarOficinaPorId(id) {
    const oficina = await MOficina.findById(id)
    return await oficina
}