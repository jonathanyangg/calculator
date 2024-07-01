const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
    
}

document.body.addEventListener("keydown", (ev) => {
    if (ev.key === 'Enter'){
        ev.preventDefault()
        calculate();
    }
});