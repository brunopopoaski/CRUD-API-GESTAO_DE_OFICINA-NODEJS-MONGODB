import listarOficinas from "../repository/read/read.oficina.repository.js"

export default async function listarOficinasService(res) {
    try {
        const listaDeOficinas = await listarOficinas()
        return await listaDeOficinas
    } catch (error) {
        return res.status(404).json({mensage: "nenhuma oficina encontrada", error})
    }
}