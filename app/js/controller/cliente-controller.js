class ClienteController {
    constructor() {
        this.inputNome = document.querySelector("#nome");
        this.inputCPF = document.querySelector("#cpf");
        this.inputConta = document.querySelector("#conta");
        this.clientes = new Clientes();
    }
    inserir(e) {
        e.preventDefault();
        const nome = this.inputNome.value;
        const cpf = this.inputCPF.value;
        const numeroConta = this.inputConta.value;
        const contas = new Contas();
        const conta = contas.pesquisar(numeroConta);
        const novoCliente = new Cliente(nome, cpf, conta);
        this.inserirClienteNoHTML(novoCliente);
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
