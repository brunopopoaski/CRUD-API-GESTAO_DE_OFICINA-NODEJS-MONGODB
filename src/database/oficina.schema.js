import mongoose from "mongoose";

const oficinaSchema = {

    name: {
        type: String,
        required: true,
      },
  
      address: {
        type: String,
        required: true,
      },
  
      specialties: {
        type: [String],
        required: true,
      },
  
      vehicles: [
        {
          type: mongoose.Schema.Types.ObjectId,
        },
      ],
    }


const MOficina = mongoose.model("oficinas", oficinaSchema);

export default MOficina