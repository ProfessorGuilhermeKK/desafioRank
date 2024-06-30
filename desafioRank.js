function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;

    if (saldoVitorias < 10) {
        return "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        return "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        return "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        return "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        return "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

const vitorias = 88;
const derrotas = 75;
const nivel = calcularNivel(vitorias, derrotas);

console.log(`O herói tem saldo de ${vitorias - derrotas} e está no nível ${nivel}.`);