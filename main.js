const display = document.getElementById("display");

function appear(input){
    display.value += input;
    adjustScroll();
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value)
    } catch{
        display.value = "Error"
    }
}

function adjustScroll() {
    display.scrollLeft = display.scrollWidth;
}

function clearLastDigit() {
    display.value = display.value.slice(0, -1); 
}

document.addEventListener('keydown', function(event){
    const isNumber = /^[0-9]$/i.test(event.key);
    const operator = ['+', '-', '/', '*'];
    if(isNumber || operator.includes(event.key)){
        appear(event.key);
    }

    if(event.key === 'Enter'){
        calculate();
    }

    if(event.key === 'Backspace'){
        clearLastDigit();
    }
});