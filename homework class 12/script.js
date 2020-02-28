function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function() {
        console.log(this.firstName + "\n" + this.lastName)
    }
}

// person1 = new Person("pane", "manaskov", "27");
// console.log(person1);
// person1.getFullName();

function Student(firstName, lastName, age, academyName, studentID){
    Object.setPrototypeOf(this,new Person(firstName, lastName, age))
    this.academyName = academyName;
    this.studentID = studentID;

    this.study = function() {
        console.log(`The student ${this.firstName} is studying in the ${academyName} academy.`)
    }

    this.showAcademy = function(){
        	console.log(this.academyName);
        }

}



let student1 = new Student("Panche", "Manaskov", 27, "Seavus", 1);
console.log(student1);
student1.study();
student1.getFullName();

let student2 = new Student("Petre", "Arsovski", 26, "Seavus", 2);
console.log(student2);

student1.showAcademy();

function DesignStudent(firstName, lastName, age, academyName, studentID, isStudentOfTheMonth){
    Object.setPrototypeOf(this,new Student(firstName, lastName, age, academyName, studentID))
    this.isStudentOfTheMonth = isStudentOfTheMonth;

    this.attendAdobeExam = function() {
        console.log(`The student ${this.firstName} is doing an adobe exam!`)
    
    }
}

let studentDesign = new DesignStudent("Panche", "Manaskov", 27, "DesignAcademy", 1, false)
console.log(studentDesign);
studentDesign.attendAdobeExam();
studentDesign.showAcademy();


function CodeStudent(firstName, lastName, age, academyName, studentID){
    Object.setPrototypeOf(this,new Student(firstName, lastName, age, academyName, studentID))
    this.hasIndividualProject = false;
    this.hasGroupProject = false;

    this.doProject = function(type) {
        if(type === "individual") {
            this.hasIndividualProject = true;
        } else if( type === "group") {
            this.hasGroupProject = true;
        }
    }
}

let studentCode = new CodeStudent("Panche", "Manaskov", 27, "CodeAcademy", 1);
console.log(studentCode);
studentCode.doProject("group");
studentCode.showAcademy();


function NetworkStudent(firstName, lastName, age, academyName, studentID, academyPart){
    Object.setPrototypeOf(this,new Student(firstName, lastName, age, academyName, studentID))
    this.academyPart = academyPart;

    this.attendCiscoExam = function() {
        console.log(`The student ${this.firstName} is doing a cisco exam!`)
    }
}

let studentNetwork = new NetworkStudent("Panche", "Manaskov", 27, "NetworkAcademy", 1, 1);
console.log(studentNetwork);
studentNetwork.attendCiscoExam();
studentNetwork.showAcademy();

Object.getPrototypeOf(studentNetwork);