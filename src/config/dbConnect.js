import mongoose from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect(
    "mongodb+srv://admin:admin123@clusterlivros.ndepm0f.mongodb.net/livraria?retryWrites=true&w=majority"
  );

  return mongoose.connection;
}

export default conectaNaDatabase;
