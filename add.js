function keyPress(value){
    const screenElement = document.getElementById("input");
    if(value == 'clear'){
        screenElement.value = ' ';
    }else{
        screenElement.value += value;
    }
}
function calculate(){
    const screenElement = document.getElementById("input");
    screenElement.value = eval(screenElement.value);
}
function clear(){
    const screenElement = document.getElementById("input");
    screenElement.value = 'ans';
}