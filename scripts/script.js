const selectedPlayerArray = [];
function showSelectedPlayers() {
    const selectedPlayers = document.getElementById('selected-players');
    selectedPlayers.innerHTML = "";
    for (let i = 0; i < selectedPlayerArray.length; i++) {
        const name = selectedPlayerArray[i];
        const li = document.createElement('li');
        li.setAttribute('class', 'my-2');
        li.innerHTML = name;
        selectedPlayers.appendChild(li);
    }
}
function selectPlayer(selected) {
    //Add to list the selected player
    const playerName = selected.parentNode.children[0].innerText;
    if (selectedPlayerArray.length < 5) {
        selectedPlayerArray.push(playerName);
        //disable select btn
        selected.setAttribute('disabled', true);
        selected.classList.add('bg-gray-100', "text-black");
        selected.innerText = "Selected";
    }
    else {
        alert("You can select Maximum 5 players.")
    }
    // display the selected player 
    showSelectedPlayers();
}
