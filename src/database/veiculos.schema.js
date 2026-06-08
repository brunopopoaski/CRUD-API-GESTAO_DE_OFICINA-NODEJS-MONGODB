import mongoose from "mongoose";

const veiculoSchema = {
    placa: {
        type: String,
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
    manutencoesRealizadas: [
        {
          type: mongoose.Schema.Types.ObjectId,
          required: false,
        },
    ],
}

const MVeiculo = mongoose.model("veiculos", veiculoSchema);

export default MVeiculo