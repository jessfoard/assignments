var person = {firstName:"Jess", lastName:"Foard", age:43}
    function () {
        return person.firstName + "" + person.lastName;
    }

var classRoom = ["people", "desks", "computers"]

var laptop = {
    name: "macBookPro",
    color: "space gray",
    size: 15,
    worthIt: false,
    battery: function() {
        for (var i=100; i > 0; i--){
            console.log("battery status OK");
        }
        return "you are going to die";
    }
}

