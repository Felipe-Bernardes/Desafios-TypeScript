interface IPessoas {
    nome: string,
    idade: number,
    profissao: 'Atriz' | 'Padeiro',
}

const pessoa1: IPessoas = {
    nome: "Maria",
    idade: 29,
    profissao: "Atriz",
}

const pessoa2: IPessoas = {
    nome: "Roberto",
    idade: 19,
    profissao: "Padeiro",
}

const pessoa3: IPessoas = {
    nome: "Laura",
    idade: 32,
    profissao: "Atriz",
}

const pessoa4: IPessoas = {
    nome: "Carlos",
    idade: 19,
    profissao: "Padeiro",
}

console.log(pessoa1, pessoa2, pessoa3, pessoa4)