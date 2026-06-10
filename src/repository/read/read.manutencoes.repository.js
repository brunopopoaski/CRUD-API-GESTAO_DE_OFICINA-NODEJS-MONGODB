import MManutencao from "../../database/manutencoes.schema.js";

export async function listarManutencoes(){
    const listaDeManutencoes = await MManutencao.find()
    return listaDeManutencoes
}

export async function listaDeManutencoesPorOficina(id){
    const listaDeManutencoesPorOficina = await MManutencao.find({ idOficina: id })
    return listaDeManutencoesPorOficina
}

export async function listaDeManutencoesPorVeiculo(id){
    const listaDeManutencoesPorVeiculo = await MManutencao.find({ idVeiculo: id })
    return listaDeManutencoesPorVeiculo
}