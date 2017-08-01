
document.getElementById("addGoombas").addEventListener("click", function () {
   var totalGoomba = parseInt(document.getElementById("goombasCaught").value);
    document.getElementById("totalGoombasCaught").textContent = totalGoomba;
})



var goombaCost = parseInt(document.getElementById("goombaCoin").textContent);



//document.getElementById("goombasCaught").addEventListener("click", function () {
    //var goombaCount = parseInt(document.getElementById("goombasCaught").value);
    //var goombaTotal = goombasCount * goombaCost;
    //document.getElementById("totalGoombaCost").textContent = goombaTotal;
//})