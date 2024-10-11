const display = document.getElementById("display");

function apear(input){
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
