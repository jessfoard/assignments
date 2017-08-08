var employees = [];

function User (name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status || 'Full Time';
    this.printEmployeeForms = function () {
        console.log('Name: ' + this.name, 'Job Title: ' + this.jobTitle, 'Salary: ' + this.salary, 'Status: ' + this.status);
    }
}

var emp1 = new User('Bob,', 'V-school instructor,', '$3000/hr,', 'Part Time');
//emp1.jobTitle();
emp1.printEmployeeForms();

var emp2 = new User('Jess,', 'Trans Manager,', 'Exempt,', 'Contract');
emp2.printEmployeeForms();

var emp3 = new User('Brock,', 'Warehouser,', '$$/hr,');
emp3.printEmployeeForms();

employees.push(emp1, emp2, emp3);

console.log(employees);