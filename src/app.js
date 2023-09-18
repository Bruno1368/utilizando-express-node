import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) =>{
  console.error("Erro de conexão", erro)
})

conexao.once("open", () => {
  console.log("Conexão com o banco feita com sucesso")
})

const app = express();
app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: "O senhor dos anéis",
  },
  {
    id: 2,
    titulo: "A revolução dos bichos",
  },
];

function buscaLivro(id) {
  return livros.findIndex((livro) => {
    return livro.id === Number(id);
  });
}

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params);
  livros[index].titulo = req.body.titulo;
  res.status(200).send("Livro excluido com sucesso");
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  //metodo splice, primeiro parametro o indice do livro com o id passado como parametro e 1, pois é o único livro que queremos excluir
  livros.splice(index, 1);
  res.status(200).send("Livro excluído com sucesso");
});

export default app;
