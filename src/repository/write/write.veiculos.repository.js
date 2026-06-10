import MVeiculo from "../../database/veiculos.schema.js"

export async function cadastrarVeiculo(placa, modelo, ano, proprietario){
    const novoVeiculo = await MVeiculo.insertOne(
        {
            placa: placa,
            modelo: modelo,
            ano: ano,
            proprietario: proprietario
        }
    )
    return novoVeiculo
}

export async function atualizarVeiculo(id, placa, modelo, ano, proprietario){
    const veiculoAtualizado = await MVeiculo.findByIdAndUpdate(
        id,
            {
                placa: placa,
                modelo: modelo,
                ano: ano,
                proprietario: proprietario
            },
        {new: true}
    )
    return veiculoAtualizado
}

export async function atualizarManutencaoVeiculo(id, body) {
    const veiculoAtualizado = await MVeiculo.updateOne(
        {_id: id},
        {$push: {idManutencoesRealizadas: body}},
        )
        return veiculoAtualizado
}

export async function deletarVeiculo(id){
    const veiculoDeletado = await MVeiculo.findByIdAndDelete(id)
    return veiculoDeletado
}