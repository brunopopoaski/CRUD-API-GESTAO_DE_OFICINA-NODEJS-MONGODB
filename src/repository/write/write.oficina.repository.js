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
        return oficinaAtualizada
}

export async function atualizarOficinaVeiculo(id, body) {
    const oficinaAtualizada = await MOficina.updateOne(
        {_id: id},
        {$push: {veiculos: body}},
        )
        console.log(oficinaAtualizada);
        return oficinaAtualizada//pareiiiii aqui e deu boa e chega por hoje
}

export async function deletarOficina(id) {
        const oficinaDeletada = await MOficina.findByIdAndDelete(id)
        return await oficinaDeletada
}