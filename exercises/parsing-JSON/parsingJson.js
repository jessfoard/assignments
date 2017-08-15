var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        console.log(data);
        console.log(data.objects[0].pokemon[0].name);
        for (var i = 0; i <= data.objects[0].pokemon.length; i++) {;
            //console.log(data.objects[0].pokemon[i].name);
            var newEl = document.createElement("h1");
            document.body.appendChild(newEl);
            newEl.innerHTML = data.objects[0].pokemon[i].name;
        }
    }
}









xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();
