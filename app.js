const arrayFriends = [];
let friendsInList = 0;

const drawButton = document.querySelector(".button-draw");
function adicionarAmigo() {
  const inputElement = document.querySelector(".input-wrapper > input");
  if (inputElement.value == "") {
    alert("Nome de amigo não inserido!\nEscreva um nome de amigo antes de adicionar.");
  }

  let inputText = inputElement.value;
  arrayFriends.push(inputText);
  drawButton.disabled = false;
  const friendsUlElement = document.getElementById("listaAmigos");
  for (let i = friendsInList; i < arrayFriends.length; i++) {
    friendsUlElement.innerHTML += `<li>${arrayFriends[friendsInList]}</li>`;
    friendsInList++;
  }
  console.log(inputText);
  inputElement.value = "";
  inputText = "";
}

function sortearAmigo() {
  if (arrayFriends.length == 0) {
    alert("Nenhum amigo adicionado! Adicione um amigo antes de sortear.");
  }
  else {
    const numeroAleatorio = Math.floor(Math.random() * arrayFriends.length);
    console.log(numeroAleatorio);
    const drawFriend = document.getElementById("resultado");
    drawFriend.innerHTML = `<li>O amigo secreto sorteado é: ${arrayFriends[numeroAleatorio]}</li>`;
  }
}