import MManutencao from "../../database/manutencoes.schema.js";

export async function cadastrarManutencao(oficina, veiculo, servicos, data, valorTotal) {
    const novaManutencao = await MManutencao.insertOne(
        {
            idOficina: oficina,
            idVeiculo: veiculo,
            servicos: servicos,
            data: data,
            valorTotal: valorTotal
        }
    )
    return novaManutencao
}

export async function atualizarManutencao(id, oficina, veiculo, servicos, data, valorTotal) {
    const manutencaoAtualizada = await MManutencao.updateOne(
        { _id: id },
        {
            idOficina: oficina,
            idVeiculo: veiculo,
            servicos: servicos,
            data: data,
            valorTotal: valorTotal
        })
    return await manutencaoAtualizada
}

export async function deletarManutencao(id) {
    const manutencaoDeletada = await MManutencao.deleteOne({ _id: id })
    return await manutencaoDeletada
}