//import http from "http";
import "dotenv/config.js"
import app from "./src/app.js";

const PORT = 3000;

const rotas = {
  "/": "Curso de node.js",
  "/livros": "Livro de programacao",
};

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
