import MOficina from "../../database/oficina.schema.js"

export default async function listarOficinas(){
    const listaDeOficinas = await MOficina.find()
    return await listaDeOficinas
}
