import MVeiculo from "../../database/veiculos.schema.js"

export async function cadastrarVeiculo(body){
    const novoVeiculo = await MVeiculo.insertOne(body)
    return novoVeiculo
}

export async function atualizarVeiculo(id, body){
    const veiculoAtualizado = await MVeiculo.findByIdAndUpdate(
        id,
        body,
        {new: true}
    )
    return veiculoAtualizado
}

export async function atualizarManutencaoVeiculo(id, body) {
    const veiculoAtualizado = await MVeiculo.updateOne(
        {_id: id},
        {$push: {manutencoesRealizadas: body}},
        )
        return veiculoAtualizado
}

export async function deletarVeiculo(id){
    const veiculoDeletado = await MVeiculo.findByIdAndDelete(id)
    return veiculoDeletado
}