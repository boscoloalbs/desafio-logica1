// Primeiro Desafio do Curso de Lógica de Programação da DIO 

//Declaração das variáveis 
let nomeHeroi = "Stryker"
let xpHeroi = Math.floor(Math.random() * (15001 - 1000) + 1000)

//Teste de Condições para verificar em qual nível o herói está
switch (true){
    case xpHeroi < 1000:
        console.log("O Herói de nome: ",nomeHeroi , " com a XP de ", xpHeroi, "está no nível FERRO")
    break

    case xpHeroi >= 1000 && xpHeroi < 2000:
        console.log("O Herói de nome: ",nomeHeroi , " com a XP de ", xpHeroi, "está no nível BRONZE")
    break
    
    case xpHeroi >= 2001 && xpHeroi < 5001:
        console.log("O Herói de nome: ",nomeHeroi , " com a XP de ", xpHeroi, "está no nível PRATA")
    break

    case xpHeroi >= 5001 && xpHeroi < 7000:
        console.log("O Herói de nome: ",nomeHeroi , " com a XP de ", xpHeroi, "está no nível OURO")
    break

    case xpHeroi >= 7001 && xpHeroi < 8000:
        console.log("O Herói de nome: ",nomeHeroi , " com a XP de ", xpHeroi, "está no nível PLATINA")
    break

    case xpHeroi >= 8001 && xpHeroi < 9000:
        console.log("O Herói de nome: ",nomeHeroi , " com a XP de ", xpHeroi, "está no nível ASCENDENTE")
    break

    case xpHeroi >= 9001 && xpHeroi < 10001:
        console.log("O Herói de nome: ",nomeHeroi , " com a XP de ", xpHeroi, "está no nível IMORTAL")
    break

    case xpHeroi >= 10001:
        console.log("O Herói de nome: ",nomeHeroi , " com a XP de ", xpHeroi, "está no nível RADIANTE")
    break
}



