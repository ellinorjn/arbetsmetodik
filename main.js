const objectInput = document.getElementById('object');
const numberInput = document.getElementById('number');
const submitButton = document.getElementById('submitButton');
const outputDiv = document.getElementById('output');
const form = document.getElementById('form');

submitButton.addEventListener('click', handleForm);

form.addEventListener('submit', function(event){
    event.preventDefault(); 
});

function handleForm(){
    let numberOfObjects = parseInt(numberInput.value, 10);
    const objectInputValue = objectInput.value;
    let convertedObjectInputValue = checkInputValue(objectInputValue, numberOfObjects);
    let output = ``;
    
    if (numberOfObjects === 0) {
        output += `<p>There are no ${convertedObjectInputValue}</p>`;
    } else if (numberOfObjects === 1) {
        output += `<p>There is 1 ${convertedObjectInputValue}</p>`;
    } else {
        output += `<p>There are ${numberOfObjects} ${convertedObjectInputValue}</p>`;
    }
    outputDiv.innerHTML = output;
}

function checkInputValue(inputValue, number){
    if (inputValue.slice(-1) != "s" && number != 1) {
        return inputValue + "s";
    } else if (inputValue.slice(-1) == "s" && number === 1) {
        return inputValue.slice(0, -1); 
    } else {
        return inputValue;
    }
}