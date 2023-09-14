class Cliente {
    constructor(nome: string, cpf: string, conta: Conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }
    get nome(): String {
        return this._nome;
    }

    set nome(value: String) {
        this._nome = value;
    }

    get cpf(): String {
        return this._cpf;
    }

    set cpf(value: String) {
        this._cpf = value;
    }

    get conta(): Conta {
        return this._conta;
    }

    set conta(value: Conta) {
        this._conta = value;
    }
    private _nome: String
    private _cpf: String
    private _conta: Conta
}