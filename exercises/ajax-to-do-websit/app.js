
const url = "https://api.vschool.io/jess/todo";

var getAll = function() {
    axios.get(url)
    .then(function(response){
        var loadTodos = function() {
            data.map(function(item){
                var div = document.createElement("div");
                div.addClass("col-sm-3");
                var h3 = document.createElement("h3");
                h3.innerText = item.title;
                div.appendChild(h3);
                document.getElementById("todo-list").appendChild(div);
            })
        }
        console.log(response.data);
    })
        .catch(function(err){
        console.log(err);
    });
}
getAll();