// Crie uma funcao que recebe como parametro a quantidade de vitorias e derrotas de um jogador

// Input
let win = 100;
let lose = 50;

// Process

// Processamento do saldo de vitorias
function getRankedData(win, lose) {
    return win - lose;
}

// Processamento do sistema de niveis

function getNivel(saldoVitorias) {
    if (saldoVitorias <= 10) {
        return "Ferro";
    } else if (saldoVitorias <= 20) {
        return "Bronze";
    } else if (saldoVitorias <= 50) {
        return "Prata";
    } else if (saldoVitorias <= 80) {
        return "Ouro";
    } else if (saldoVitorias <= 90) {
        return "Diamante";
    } else if (saldoVitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

//output

for (let i = 0; i < 3; i++) {
    let saldoVitorias = getRankedData(win, lose);
    let nivel = getNivel(saldoVitorias);

    console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível ${nivel}.`);

    win += 50;
    lose += 10;
}

