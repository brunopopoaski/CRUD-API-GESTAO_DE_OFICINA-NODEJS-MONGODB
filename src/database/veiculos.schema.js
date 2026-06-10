import mongoose from "mongoose";

const veiculoSchema = {
    placa: {
        type: String,
        unique: true,
        require: true
    },
    modelo: {
        type: String,
        require: true
    },
    ano: {
        type: Number,
        require: true
    },
    proprietario: {
        type: String,
        require: true
    },
    idManutencoesRealizadas: [
        {
          type: mongoose.Schema.Types.ObjectId,
          required: false,
        },
    ],
}

const MVeiculo = mongoose.model("veiculos", veiculoSchema);

export default MVeiculo