const nome = "Luis Felipe Dias";         
let anoNascimento = 1998;     
const anoAtual = new Date().getFullYear();  
let idade = anoAtual - anoNascimento;  

function apresentarPerfil() {
  if (idade >= 18) {  // corrigido de 27 para 18
    console.log(`Olá, sou o ${nome}.`);
    console.log(`Tenho ${idade} anos.`);
    console.log(`Sou maior de idade.`);
  } else {
    console.log(`Olá, sou o ${nome}.`);
    console.log(`Tenho ${idade} anos.`);
    console.log(`Sou menor de idade.`);
  }
}

apresentarPerfil();
