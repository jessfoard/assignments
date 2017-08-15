var goombaCoin = document.getElementById("goombaCoin");
var goombasCaught = document.getElementById('goombasCaught');
var subButton = document.getElementById('addGoombas');
//var outPut = document.getElementById('totalGoombaCost');
var totalGoombaCost = function() {
    return 5 * goombasCaught.value;
}

subButton.addEventListener('click', function() {
    //var totalGoombaCost = 5 * goombasCaught.value;
    //var totalCost = totalGoombaCost ;
    document.getElementById("totalGoombaCost").innerHTML = totalGoombaCost.value;
    
    subButton.addEventListener(totalGoombaCost);
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