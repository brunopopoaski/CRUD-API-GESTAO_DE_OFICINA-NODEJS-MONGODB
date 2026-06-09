import MManutencao from "../../database/manutencoes.schema.js";

export default async function cadastrarManutencao(body){
    const novaManutencao = await MManutencao.insertOne(body)
    return novaManutencao
}