// academy
function Academy(name, students, subjects, start ,end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = subjects.length * 10;

    this.printStudents = function() {
        console.log(this.students);    
    }
        
    this.printSubjects = function() {
        console.log(this.subjects)
    }
}

let academy1 = new Academy(
    "Sivus",
    ["pane", "kate", "antonij", "radmila"],
    ["html", "css", "js","ajs"],
    "15.09.2019",
    "15.09.2020",
    );

    console.log(academy1);
    // academy1.printStudents();
    // academy1.printSubjects();

// subjects

function Subject(title, isElective, academy, students) {
    this.title = title;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
    this.numberOfClasses = 10;

    this.overrideClasses = function(num) {
        if( num > 3) {
            this.numberOfClasses = num;
        } else {
            alert("You must take at least 3 classes");
        }
    }
}

let subject1 = new Subject(
    "ajs",
    false,
    academy1,
    ["pane", "kate", "antonij","radmila"],
    );

console.log(subject1);
subject1.overrideClasses(15);
academy1.subjects.push(subject1);

// student 

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;

    this.startAcademy = function(academy1, student) {
        this.academy = academy1;
        this.academy.students.push(student)
    }

    this.startSubject = function(subject1, student) {
        if(this.currentSubject !== null) {
            this.completedSubjects.push(this.currentSubject);
        }
       this.academy && this.academy.subjects.forEach(element => {
            if(element.title === subject1.title) {
                this.currentSubject = subject1;
                this.currentSubject.students.push(student);
            }
       })
    }
}
  



let student1 = new Student("pane", "manaskov", 27);
console.log(student1);
student1.startAcademy(academy1, student1);
student1.startSubject(subject1, student1);


let subject2 = new Subject(
    "html",
    false,
    academy1,
    ["pane", "kate", "antonij","radmila"],
    );

// console.log(subject2);
academy1.subjects.push(subject2);

student1.startSubject(subject2, student1);


academy1.printStudents();
academy1.printSubjects();




