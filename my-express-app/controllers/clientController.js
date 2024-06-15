const Client = require("../models/clientModel")

const clientController = {
    addClient: async function (req, res) {
        const { name, lastname, age, address, vehicleBrand, vehicleModel } = req.body
        try {
            const newClient = new Client({ name, lastname, age, address, vehicleBrand, vehicleModel })
            const busqueda = await Client.findOne({name, lastname})
            if(busqueda){
                return res.status(404).send("El cliente ya existe.")
            }
            await newClient.save()
            res.status(200).send("Cliente guardado exitosamente.")
        } catch (error) {
            res.status(500).json({ message: "Ha ocurrido un error al registrar el cliente: " + error })
        }
    },
    getClients: async function (req, res) {
        try {
            const clients = await Client.find()
            res.json(clients)
        } catch (error) {
            res.status(500).send({ message: "Ha ocurrido un error al traer los clientes." })
        }
    },
    deleteClient: async function (req, res) {
        try {
            const clientToDelete = await Client.findByIdAndDelete(req.params.id)
            if (!clientToDelete) {
                res.status(404).send("No se pudo encontrar el cliente.")
            }
            res.status(200).send("Cliente borrado exitosamente.")
        } catch (error) {
            res.status(500).send("Ha ocurrido un error de servidor.")
        }
    },
    updateClient: async function (req, res) {
        try {
            const {name, lastname, age, vehicleBrand, vehicleModel} = req.body
            const updatedClient = await Client.findByIdAndUpdate(req.params.id, {name, lastname, age, vehicleBrand, vehicleModel}, {new:true})
            if(!updatedClient){
                res.status(404).send("No se pudo localizar el cliente.")
            }
            res.json(updatedClient)
        } catch (error) {
            res.status(500).send("Ha ocurrido un error de servidor.")
        }
    }
}

module.exports = clientController