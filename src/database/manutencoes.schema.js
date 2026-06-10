import mongoose from "mongoose";

const manutencaoSchema = {
    idOficina: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    idVeiculo: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    servicos: {
        type: [{
            nome: {
                type: String,
                required: true
            },
            preco: {
                type: Number,
                required: true
            }
        }],
        required: true
    },
    data: {
        type: Date,
        require: true
    },
    valorTotal: {
        type: Number,
        require: true
    }
}

const MManutencao = mongoose.model("manutencoes", manutencaoSchema)

export default MManutencao