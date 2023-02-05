import mongoose from "mongoose";

export async function connectToDatabase() {
    try {

        const dbConnect = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Conectado ao banco de dados ${dbConnect.connection.name}`);

    } catch (error) {
        console.log(error);
    }
}