import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js"

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const app = express();
routes(app)



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
