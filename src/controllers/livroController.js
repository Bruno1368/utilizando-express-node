import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {
  static async listarlivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      res.status(500).json(`${error.message} - erro na requisição`);
    }
  }
  // juntando livro e autor
  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor)
      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } }
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({ message: "Criado com sucesso", livro: livroCriado });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar livro` });
    }
  }
  static async listarlivroPorId(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (error) {
      res.status(500).json(`${error.message} - erro na requisição`);
    }
  }
  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "livro atualizado" });
    } catch (error) {
      res.status(500).json(`${error.message} - erro na requisição`);
    }
  }

  static async deletarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).send({ message: "Livro deletado com sucesso" });
    } catch (error) {
      res.status(500).send(`${error.message} - Erro ao deletar livro`);
    }
  }

  static async listarLivrosPorEditora(req, res) {
    const editora = req.query.editora
    try {                                           // o primeiro parametro editora é a propriedade editora do livro, o segundo é a variavel editora passada por parametro de query
      const livrosPorEditora = await livro.find({ editora: editora })
      res.status(200).json(livrosPorEditora)
    } catch (error) {
      res.status(500).send(`${error.message} - Livro não localizado`)
    }
  }
}

export default LivroController;
