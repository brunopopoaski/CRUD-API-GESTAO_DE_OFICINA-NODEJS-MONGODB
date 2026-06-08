import MVeiculo from "../../database/veiculos.schema.js";

export async function listarVeiculos(){
    const listaDeVeiculos = await MVeiculo.find()
    return listaDeVeiculos
}

export async function listarVeiculoPorId(id){
    const veiculo = await MVeiculo.findById(id)
    return veiculo
}