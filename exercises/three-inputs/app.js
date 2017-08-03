//var buttonOn = document.getElementById("submit");
//buttonOn.addEventListener("click", function () {
//    console.log("hello")
//});











var firstName = document.getElementById('firstNameIpt');
var lastName = document.getElementById('lastNameIpt');
var age = document.getElementById('ageIpt');
var subButton = document.getElementById('submit');
var outPutBox = document.getElementById('printInfo');

function Person (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.printInfo = function (){
        return 'First Name: ' + this.firstName, 'Last Name: ' + this.lastName, 'Age: ' + this.age;
    }
}

var person1 = new Person(document.getElementById('firstNameIpt'));





subButton.addEventListener('click', function() {
    console.log('Hello');
    outPutBox.textContent = person1.printInfo.value();
    
});







//var firstName = document.getElementById('firstNameIpt');
//var lastName = document.getElementById('lastNameIpt');
//var age = document.getElementById('ageIpt');
//
//var outPutBox = document.getElementById('printInfo');
//var subButton = document.getElementById('submit');
//
//
//subButton.addEventListener('click', function(){
//    console.log("hello");
//});