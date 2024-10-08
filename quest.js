let xpDoHeroi = 5001
const nickname = "Xibiuzin"
let lvlDoHeroi

if (xpDoHeroi >= 0 && xpDoHeroi <= 1000) {
    lvlDoHeroi = "Ferro"
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    lvlDoHeroi = "Bronze"
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    lvlDoHeroi = "Prata"
} else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
    lvlDoHeroi = "Ouro"
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
    lvlDoHeroi = "Platina"
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    lvlDoHeroi = "Ascendente"
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
    lvlDoHeroi = "Imortal"
} else if (xpDoHeroi >= 1000) {
    lvlDoHeroi = "Radiante"
}

console.log("O Herói " + nickname + " está no nível " + lvlDoHeroi + "!")