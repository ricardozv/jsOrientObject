this.name = "Nome do contexto da criação";

const getName = () => this.name;

function getName() {
    return this.name;
}

const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn,
    getName 
}

console.log(user.getNameArrowFn());
console.log(user.getName());