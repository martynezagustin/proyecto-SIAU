const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://agustinmartinezmedina1:9Rmaszrg7vvNNKQ@cluster0.64mjwgi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Conectado a la base de datos.");
    } catch (error) {
        console.error("Ha ocurrido un error al conectarse: " + error);
        process.exit(1)
    }
}

module.exports = connectDB

