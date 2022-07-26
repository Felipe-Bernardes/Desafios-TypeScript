let InputSoma = document.getElementById('soma') as HTMLInputElement;
let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = "0";

function SomarAoSaldo(soma: string){
    let Somar = Number(campoSaldo.innerText) + Number(soma)
    return campoSaldo.innerHTML = Somar.toString()
    
}

function LimparSaldo(){
    campoSaldo.innerHTML = "0";
}

botaoAtualizar.addEventListener('click', () => {
    SomarAoSaldo(InputSoma.value)
})

botaoLimpar.addEventListener('click', () => {
    LimparSaldo()
})