const Reform = require("../models/reformModel")
const Client = require("../models/clientModel")

const reformController = {
    addReform: async function (req, res) {
        const { clientId } = req.params
        const { description, amount, date } = req.body
        try {
            //convertir fecha a formato ISO
            const [day, month, year] = date.split("/")
            const reformDate = new Date(`${year}-${month}-${day}`)

            if (isNaN(reformDate)) {
                return res.status(400).json({ message: "Formato de fecha no convencional." })
            }
            const client = await Client.findById(clientId)
            if (!client) {
                return res.status(404).send("No se ha encontrado el cliente.")
            }

            const newReform = new Reform({ clientId, description, amount, date: reformDate })
            await newReform.save()
            client.reforms.push(newReform._id)
            await client.save()

            res.status(200).send("Reforma: '" + description + "' realizada exitosamente.")
        } catch (error) {
            res.status(500).send("Ha ocurrido un error, intentalo otra vez: " + error)
        }
    },
    getReformById: async function (req, res) {
        const { reformId } = req.params
        try {
            const reform = await Reform.findById(reformId)
            if (!reform) {
                return res.status(404).send("No se ha encontrado el trabajo o reforma realizada.")
            }
            res.status(200).json({ reform })
        } catch (error) {
            res.status(500).send("Ha ocurrido un error, vuelve a intentarlo otra vez: " + error)
        }
    }
}

module.exports = reformController