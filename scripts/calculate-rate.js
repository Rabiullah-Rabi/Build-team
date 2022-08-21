//function for collecting value from input field
function getFieldValue(fieldId) {
    const input = document.getElementById(fieldId);
    const rate = input.value;
    if (rate < 0) {
        alert('Rate must be greater than 0');
    }

    else {
        return parseFloat(rate);
    }
}
//function for display the result
function setValue(id, value) {
    const displayId = document.getElementById(id);
    displayId.innerText = value;
}
//calculate Player
function playerExpense() {
    const playersList = document.getElementById('selected-players');
    const totalPlayer = playersList.childElementCount;
    const playerRate = getFieldValue('per-player-rate');
    const playerExpenses = totalPlayer * playerRate;
    return playerExpenses;
}

//show Player expense
document.getElementById('player-total-rate-btn').addEventListener('click', function () {
    setValue('player-total-rate', playerExpense());
})

