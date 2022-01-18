import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente("Gabriel", 123456789);

const cliente2 = new Cliente("Juliana", 123789456);


const conta1 = new ContaCorrente(cliente1, 1001);
conta1.depositar(500);

const conta2 = new ContaCorrente(cliente2, 1002);
conta1.transferir(200, conta2);


console.log(ContaCorrente.numeroDeContas);
