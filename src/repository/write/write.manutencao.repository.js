import MManutencao from "../../database/manutencoes.schema.js";

export async function cadastrarManutencao(body){
    const novaManutencao = await MManutencao.insertOne(body)
    return novaManutencao
}

export async function atualizarManutencao(id, body){
    const manutencaoAtualizada = await MManutencao.updateOne({_id: id}, {...body})
    return await manutencaoAtualizada
}

export async function deletarManutencao(id){
    const manutencaoDeletada = await MManutencao.deleteOne({ _id: id })
    return await manutencaoDeletada
}