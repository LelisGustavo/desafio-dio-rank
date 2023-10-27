// Declaração das variáveis
let victories = 102 
let defeats = 1 
let winRate = rank(victories, defeats)
// ========================================================================================================

// Função que recebe os números de vitórias e derrotas e retorna o calculo
function rank(victories, defeats) {

    let result = victories - defeats
    return result

}

// Função que recebe o retorno do rank do usuário e retorna o seu tier/elo
function tier(winRate) {

    // Variáveis utilizadas dentro da função
    let lvl = ""
    let message = `O Herói tem de saldo ${winRate} vitórias e está no Tier/Elo `

    if (winRate < 10) {
        lvl = "Ferro"
        console.log(message + lvl)
    }
    else if (winRate >= 11 && winRate <= 20) {
        lvl = "Bronze"
        console.log(message + lvl)
    }
    else if (winRate >= 21 && winRate <= 50) {
        lvl = "Prata"
        console.log(message + lvl)
    }
    else if (winRate >= 51 && winRate <= 80) {
        lvl = "Ouro"
        console.log(message + lvl)
    }
    else if (winRate >= 81 && winRate <= 90) {
        lvl = "Diamante"
        console.log(message + lvl)
    }
    else if (winRate >= 91 && winRate <= 100) {
        lvl = "Lendário"
        console.log(message + lvl)
    }
    else if (winRate >= 101) {
        lvl = "Imortal"
        console.log(message + lvl)
    }

}
// ========================================================================================================

// Chamando a função e retornando no terminal o resultado
tier(winRate)