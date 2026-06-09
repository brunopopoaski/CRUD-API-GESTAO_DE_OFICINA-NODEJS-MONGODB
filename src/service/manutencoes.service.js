import cadastrarManutencao from "../repository/write/write.manutencao.repository.js"
import { atualizarOficinaVeiculo } from "../repository/write/write.oficina.repository.js"
import { atualizarManutencaoVeiculo } from "../repository/write/write.veiculos.repository.js"

export default async function cadastrarNovaManutencaoService(body){
    try {
        if(!body.oficina || !body.veiculo || !body.servicos || !body.data || !body.valorTotal){
            throw new Error("Digite todas as informações necessarias para cadastrar uma manutenção" + error.message)
        }

        const novaManutencao = await cadastrarManutencao(body)
        const idOficina = body.oficina
        const idVeiculoParaOficina = await novaManutencao.veiculo.toString()
        const atualizandoArrayVeiculos = await atualizarOficinaVeiculo(idOficina, idVeiculoParaOficina)


        const idVeiculo = body.veiculo
        const idManutencaoParaVeiculo = await novaManutencao._id
        const atualizandoArrayManutencoesRealizadas = await atualizarManutencaoVeiculo(idVeiculo, idManutencaoParaVeiculo)

        return await novaManutencao
    } catch (error) {
        throw new Error("Erro ao cadastrar a uma manutenção" + error.message)
    }
}
