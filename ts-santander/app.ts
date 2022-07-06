let botaoAtualizar = document.getElementById('atualizar-saldo')!;
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo')!;

let saldo = 0

function somarAoSaldo(num: number) {
    saldo += num
    campoSaldo.innerHTML = saldo.toString();
    soma.value = ""
    
}

function limparSaldo() {
    saldo = 0;
    campoSaldo.innerHTML = saldo.toString();
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});