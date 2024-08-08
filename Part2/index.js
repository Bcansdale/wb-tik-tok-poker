const inputID = document.querySelector('#inputID')
const inputColor = document.querySelector('#inputColor')

console.log(inputID);
console.log(inputColor);

function setCard() {
    const card = document.querySelector(`#${inputID.value}`)
    card.style.color = inputColor.value;
}

document.querySelector('#editCardButton').addEventListener('click', setCard)