import mongoose from "mongoose";

const oficinaSchema = {

    nome: {
        type: String,
        required: true,
      },
  
      endereco: {
        type: String,
        required: true,
      },
  
      especialidades: {
        type: [String],
        required: true,
      },
  
      veiculos: [
        {
          type: mongoose.Schema.Types.ObjectId,
          required: false,
        },
      ],
    }


const MOficina = mongoose.model("oficinas", oficinaSchema);

export default MOficina