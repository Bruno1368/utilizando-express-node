import http from "http";

const PORT = 3000;

const rotas = {
  "/": "Curso de node.js",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
            // notação de colchete aqui para passar uma variável como pripriedade, normalmente usando ponto, ex: rotas.nome
            //req é um dos parametros, é um objeto com uma propriedade url
  res.end(rotas[req.url]);
});

server.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
