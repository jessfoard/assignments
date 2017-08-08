var djSquare = document.getElementById("square");
var scroll = document.getElementById("wholePage");

djSquare.onmouseover = function() {
    djSquare.style.backgroundColor = 'blue';
}

djSquare.onmouseout = function() {
    djSquare.style.backgroundColor = 'darkgrey';
}

djSquare.onmousedown = function() {
    djSquare.style.backgroundColor = 'red';
}

djSquare.onmouseup = function() {
    djSquare.style.backgroundColor = 'yellow';
}

djSquare.ondblclick = function() {
    djSquare.style.backgroundColor = 'green';
}

document.onwheel = function() {
    djSquare.style.backgroundColor = 'orange';
}

document.onkeydown = function(event) {
    if (event.which == 66) {
        djSquare.style.backgroundColor = 'blue';
    } else if (event.which == 82) {
        djSquare.style.backgroundColor = 'red';
    } else if (event.which == 89) {
        djSquare.style.backgroundColor = 'yellow';
    } else if (event.which == 71) {
        djSquare.style.backgroundColor = 'green';
    } else if (event.which == 79) {
        djSquare.style.backgroundColor = 'orange';
    } else {
        djSquare.style.backgroundColor = 'darkgrey';
    }
        
}



