import MOficina from "../../database/oficina.schema.js"

export default async function listarOficinas(){
    const listaDeOficinas = MOficina.findAll({})
    return listaDeOficinas
}
