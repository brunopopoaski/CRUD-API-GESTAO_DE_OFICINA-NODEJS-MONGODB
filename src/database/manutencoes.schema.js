import mongoose from "mongoose";

const manutencaoSchema = {
    oficina: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    veiculo: {
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