let nomeHeroi = "Rotiv";
let nivelHeroi = "";

for (let contadorXP = 1; contadorXP < 10002; contadorXP++) {
  contadorXP += 0;
  console.log(contadorXP);

  if (contadorXP < 1000) {
    nivelHeroi = "Ferro";
  } else if (contadorXP >= 1001 && contadorXP <= 2000) {
    nivelHeroi = "Bronze";
  } else if (contadorXP >= 2001 && contadorXP <= 5000) {
    nivelHeroi = "Prata";
  } else if (contadorXP >= 5001 && contadorXP <= 7000) {
    nivelHeroi = "Ouro";
  } else if (contadorXP >= 7001 && contadorXP <= 8000) {
    nivelHeroi = "Platina";
  } else if (contadorXP >= 8001 && contadorXP <= 9000) {
    nivelHeroi = "Ascendente";
  } else if (contadorXP >= 9001 && contadorXP <= 10000) {
    nivelHeroi = "Imortal";
  } else if (contadorXP >= 10001) {
    nivelHeroi = "Radiante";
  }
}

console.log("O herói " + nomeHeroi + " está no nível " + nivelHeroi + "!!");
