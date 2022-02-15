import { Cliente } from "./Cliente.js"
import { Gerente } from "./funcionarios/Gerente.js"
import { Diretor } from "./funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Lucas", 10000, 12345678900);
diretor.cadastrarSenha("12345")
const gerente = new Gerente("Vitor", 5000, 112345612300);

const estaLogado = SistemaAutenticacao.login(diretor, diretor._senha);

console.log(diretor)
console.log(estaLogado);