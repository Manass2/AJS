mainBtn = document.getElementById("mainBtn");
btnGroup = document.getElementById("allbtn")
button1 = document.getElementById("higherthen3");
button2 = document.getElementById("female5");
button3 = document.getElementById("maleSkopjeOver18");
button4 = document.getElementById("femaleOver24");
button5 = document.getElementById("maleBover2");
table = document.getElementById("table");

button1.style.display = "none"
button2.style.display = "none"
button3.style.display = "none"
button4.style.display = "none"
button5.style.display = "none"


mainBtn.addEventListener('click', () => {
    mainBtn.style.display = "none";
    button1.style.display = "block"
    button2.style.display = "block"
    button3.style.display = "block"
    button4.style.display = "block"
    button5.style.display = "block"


    fetch("https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class4/students.json")
    .then(function(response) {  
        console.log("success");
        return response.json(); 
    })
    .then(function(response) {
        button1.addEventListener('click', () => {
            higher3(table, response); 
        })
        button2.addEventListener('click', () => {
            smartFemale(table, response); 
        })
        button3.addEventListener('click', () => {
            maleInSkopje(table, response); 
        })
        button4.addEventListener('click', () => {
            femaleOver24(table, response); 
        })
        button5.addEventListener('click', () => {
            maleB(table, response); 
        })

    })

})




function higher3(table, students1) {
    table.innerHTML = "";
    let smartStudent = students1.filter(student1 => student1.averageGrade > 3)
    smartStudent.forEach(student => {
        table.innerHTML += `
        <tr>
            <td> ${student.firstName} ${student.lastName} with an average grade of ${student.averageGrade}
        </tr> `
    });
         
     };
     
function smartFemale(table, students2) {
    table.innerHTML = "";
    let smartGirls = students2
        .filter(student2 => student2.averageGrade === 5)
        .filter(student2 => student2.gender === "Female")

    smartGirls.forEach(student => {
        table.innerHTML += `
            <tr>
                <td> ${student.firstName} is ${student.gender} with an average grade of ${student.averageGrade} 
            </tr> `
        });
};

function maleInSkopje(table, students3) {
    table.innerHTML = "";
    let maleOver18 = students3
        .filter(student3 => student3.city === "Skopje")
        .filter(student3 => student3.age > 18)
        .filter(student3 => student3.gender = "Male");

    maleOver18.forEach(student => {
        table.innerHTML += `
            <tr>
                <td> ${student.firstName} ${student.lastName} is ${student.gender}, lives in ${student.city} and is ${student.age} years old
            </tr> `
        });
};


function femaleOver24(table, students4) {
    table.innerHTML = "";
    let femaleGrade24 = students4
        .filter(student4 => student4.gender === "Female")
        .filter(student4 => student4.age > 24);

    femaleGrade24.forEach(student => {
        table.innerHTML += `
            <tr>
                <td> ${student.firstName} ${student.lastName} is a ${student.age} year old ${student.gender} with an average grade of ${student.averageGrade}
            </tr> `
        });
};

  
function maleB(table, students5) {
    table.innerHTML = "";
    let maleOver2 = students5
        .filter(student5 => student5.gender === "Male")
        .filter(student5 => student5.averageGrade > 2)
        .filter(student5 => student5.firstName.startsWith("B"))

    maleOver2.forEach(student => {
        table.innerHTML += `
            <tr>
                <td> ${student.firstName} ${student.lastName} is a ${student.age} year old ${student.gender} with an average grade of ${student.averageGrade}
            </tr> `
        });
};