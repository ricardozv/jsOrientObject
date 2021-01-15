
class Client  {
    name;
    cpf;
    rg;
    adress;
}

class acount {
    agencia;
    saldo;

    sacar(valor) {
        if(acount.saldo >= valor)
    }
} 

const conta = new acount();
acount.saldo = 0;
acount.agencia = 001;



const clientOne = new Client();
const clientTwo = new Client();

clientOne.name = "Zumbi dos Palmare";
clientOne.cpf = 123456789;
clientOne.rg = 9876543;
clientOne.adress = "street 18";

clientTwo.name = "Malcom X";
clientTwo.cpf = 157157157;
clientTwo.rg = 17171717171;
clientTwo.adress = "street 4";

console.log(clientOne);
console.log(clientTwo);

