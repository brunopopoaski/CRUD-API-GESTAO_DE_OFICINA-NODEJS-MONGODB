import { isObjectIdOrHexString } from "mongoose"
import MOficina from "../../database/oficina.schema.js"

export async function cadastrarOficina(body) {
        const novaOficina = await MOficina.insertOne(body)
        return await novaOficina
}

export async function atualizarOficina(id, body) {
    const oficinaAtualizada = await MOficina.findByIdAndUpdate(//insertOne
         id,
         body,
            { new: true }
        )
}

export async function deletarOficina(id) {
        const oficinaDeletada = await MOficina.findByIdAndDelete(id)
        return await oficinaDeletada
}