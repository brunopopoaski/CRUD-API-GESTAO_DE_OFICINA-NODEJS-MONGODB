import MOficina from "../../database/oficina.schema.js"

export async function cadastrarOficina(nome, endereco, especialidades) {
        const novaOficina = await MOficina.insertOne(
        {
                nome: nome,
                endereco: endereco,
                especialidades: especialidades
        })
        return await novaOficina
}

export async function atualizarOficina(id, nome, endereco, especialidades) {
        const oficinaAtualizada = await MOficina.findByIdAndUpdate(//insertOne
                id,
                {
                        nome: nome,
                        endereco: endereco,
                        especialidades: especialidades
                },
                { new: true })
        return oficinaAtualizada
}

export async function atualizarOficinaVeiculo(id, body) {
        const oficinaAtualizada = await MOficina.updateOne(
                { _id: id },
                { $push: { idVeiculos: body } },
        )
        return oficinaAtualizada
}

export async function deletarOficina(id) {
        const oficinaDeletada = await MOficina.findByIdAndDelete(id)
        return await oficinaDeletada
}