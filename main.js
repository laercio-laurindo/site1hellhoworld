let nameUser = "";
let elemento = document.querySelector("#nome-usuário");

while(nameUser == ""){
    nameUser = prompt("Qual o seu nome?");
}

if(nameUser == null){
    elemento.textContent = 'Bom ter você por aqui.';
}else{
    elemento.textContent = nameUser;
}