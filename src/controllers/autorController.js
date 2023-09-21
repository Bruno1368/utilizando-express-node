import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (error) {
      res.status(500).send(`${error.message} - Erro ao listar autores`);
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const autorCadastrado = req.body;
      await autor.create(autorCadastrado);
      res
        .status(200)
        .send({ message: "Criado com sucesso", autor: autorCadastrado });
    } catch (error) {
      res.status(500).send(`${error.message} - Erro ao cadastrar autor`);
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const idAutor = req.params.id;
      const autorEncontrado = await autor.findById(idAutor);
      res.status(200).json(autorEncontrado);
    } catch (error) {
      res.status(500).send(`${error.message} - Autor não localizado`);
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const idAutor = req.params.id;
      const novosDados = req.body;
      await autor.findByIdAndUpdate(idAutor, novosDados);
      res.status(200).json({ Autor: novosDados });
    } catch (error) {
      res.status(500).json(`${error.message} - Erro a oatualziar autor`);
    }
  }

  static async deletarAutor(req, res) {
    try {
      const idAutor = req.params.id;
      await autor.findByIdAndDelete(idAutor);
      res.status(200).send("Autor excluído com sucesso");
    } catch (error) {
      res.status(500).send(`${error.message} - Erro ao excluir Autor`);
    }
  }
}

export default AutorController;
