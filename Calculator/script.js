// value add karne ke liye function

function append(value){

    document.getElementById("screen").value += value;

}

/* poora screen clear */

function clearScreen(){

    document.getElementById("screen").value = "";

}

// last value remove karega

function removeOne(){

    let current = document.getElementById("screen").value;

    document.getElementById("screen").value = current.slice(0,-1);

}

/* calculation logic */

function calculate(){

    let data = document.getElementById("screen").value;

    let result = eval(data);

    document.getElementById("screen").value = result;

}