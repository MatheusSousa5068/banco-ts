class ClienteEspecial  extends Cliente{
    private clientes: Array<Cliente>

    constructor(nome: string, cpf: string, conta: Conta) {
        super(nome, cpf, conta)
        this.clientes = new Array<Cliente>();
    }

    inserir(cliente: Cliente): void {
        this.clientes.push(cliente)
    }

    remover(cpf: string): void {
        const clienteARemover: Cliente = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf
    (clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }

    listar(): Array<Cliente> {
        return this.clientes
    }

    pesquisar(cpf: string): Cliente {
        return this.clientes.find(cliente => cliente.cpf === cpf)
    }
}