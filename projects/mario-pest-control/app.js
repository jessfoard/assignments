var goombasCaught = document.getElementById('goombasCaught');


var subButton = document.getElementById('addGoombas');



subButton.addEventListener('click', function() {
    var outPut = document.getElementById('totalGoombasCaught');
    goombasCaught.innerHTML = outPut;
});







//document.getElementById("addGoombas").addEventListener("click", function () {
//   var totalGoomba = parseInt(document.getElementById("goombasCaught").value);
//    document.getElementById("totalGoombasCaught").textContent = totalGoomba;
//})



//var goombaCost = parseInt(document.getElementById("goombaCoin"));
//goombaCost.innerHTML = outPut;


//document.getElementById("goombasCaught").addEventListener("click", function () {
    //var goombaCount = parseInt(document.getElementById("goombasCaught").value);
    //var goombaTotal = goombasCount * goombaCost;
    //document.getElementById("totalGoombaCost").textContent = goombaTotal;
//})