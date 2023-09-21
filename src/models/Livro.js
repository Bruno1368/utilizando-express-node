// MODELO É UM OBJETO QUE REPRESENTA UMA COLEÇÃO NA BASE DE DADOS

import mongoose from "mongoose";
//autor para ser referenciado
import { autorSchema } from "./Autor.js";
//criação de um novo esquema para adicionar os campos propriedade e o dado do valor da chave
const livroSchema = new mongoose.Schema(
  {
    // criar uma propriedade do tipo objectID, do próprio mongoose
    id: { type: mongoose.Schema.Types.ObjectId },
    // require: true pq a propriedade titulo é obrigadtória, não consegue criar um livro sem titulo
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    //integrando
    autor: autorSchema,
    //esse é o outro parametro do new mongoose.schema
  },
  { versionKey: false }
);
// 1 parametro é o modelo livros criado no banco e referenciado como string
// então é passado o parametro a qual model ose refere e qual o seu schema, esquema
//por exmeplo, os livros criados pelo schema serão enviados para o modelo livros
const livro = mongoose.model("livros", livroSchema);

export default livro;
