let cosmonaut = document.getElementById("cosmonaut");
let rocket = document.getElementById("rocket");
let table = document.getElementById("table");
let tbody = document.getElementById("tbody");
let tableShips = document.getElementById("tableShips");
let tbodyShips = document.getElementById("tbodyShips");
// people buttons
let peopleBackBtn = document.getElementById("back");
let peopleNextBtn = document.getElementById("next");
// ships button
let shipsBackBtn = document.getElementById("back2");
let shipsNextBtn = document.getElementById("next2");
// search people
let peopleInput = document.getElementById("search-field-people");
let searchBtn = document.getElementById("searchPeople-btn");
//search ships
let shipsInput = document.getElementById("search-field");
let searchShipsBtn = document.getElementById("searchShips-btn");
// planet dom
let planet = document.getElementById("planet");
let tablePlanet = document.getElementById("tablePlanets");
let tbodyPlanet = document.getElementById("tbodyPlanets");
let planetBackBtn = document.getElementById("back3");
let planetNextBtn = document.getElementById("next3");
let planetInput = document.getElementById("search-field-planets");
let searchPlanetBtn = document.getElementById("searchplanets-btn");



//display
table.style.display = "none";
tableShips.style.display = "none";
tablePlanet.style.display = "none";

peopleBackBtn.style.display = "none";
peopleNextBtn.style.display = "none";
shipsBackBtn.style.display = "none";
shipsNextBtn.style.display = "none";
planetBackBtn.style.display = "none";
planetNextBtn.style.display = "none";

const peopleLink = "https://swapi.co/api/people/?page=";
const shipsLink = "https://swapi.co/api/starships/?page=";
const searchPeopleLink ="https://swapi.co/api/people/?search=";
const searchShipsLink = "https://swapi.co/api/starships/?search=";
const planetLink = "https://swapi.co/api/planets/?page=";
const searchPlanetLink = "https://swapi.co/api/planets/?search="

// funkcii za people
cosmonaut.addEventListener('click', function(){

    peopleBackBtn.style.display = "block";
    peopleNextBtn.style.display = "block";
    planetBackBtn.style.display = "none";
    planetNextBtn.style.display = "none";
    shipsBackBtn.style.display = "none";
    shipsNextBtn.style.display = "none";

    async function peopleData() {
        let response = await fetch(peopleLink);
        let data = await response.json();
        cosmonautInfo(data.results)
    }
    peopleData();
})


function cosmonautInfo(peopleArray) {
    tableShips.style.display = "none";
    tablePlanet.style.display = "none";
    tbody.innerHTML = "";
    table.style.display = "block";

    peopleArray.forEach(people => {
        tbody.innerHTML += `
        <tr class="tr-body">
        <td class="td-body"> ${people.name} </td>
        <td class="td-body"> ${people.height} </td>
        <td class="td-body"> ${people.mass} </td>
        <td class="td-body"> ${people.gender} </td>
        <td class="td-body"> ${people.birth_year} </td>
        <td class="td-body"> ${people.films.length} </td>
        </tr>
        `
    });
}

// next button funkcii

  let counter = 1;  
  let incrementCounter = (function() {
    return function() {
      counter += 1;
      return counter;
    };
  })();


peopleNextBtn.addEventListener("click", function() {
    let id = incrementCounter()

    fetch(`${peopleLink}${id}`)
    .then(function(response) {  
        console.log("success");
        return response.json(); 
    })
    .then(function(response) {
        console.log(response.results)
        cosmonautInfo(tbody, response.results); 
    })
    
})

// back button funkcii

let reverseCounter = (function() {
    return function() {
      counter -= 1;
      return counter;
    };
  })();


peopleBackBtn.addEventListener("click", function() {
    let id1 = reverseCounter();

    fetch(`${peopleLink}${id1}`)
    .then(function(response) {  
        console.log("success");
        return response.json(); 
    })
    .then(function(response) {
        console.log(response.results)
        cosmonautInfo(tbody, response.results);
    })
    
})




//funkcii za ships

rocket.addEventListener('click', function(){
    shipsBackBtn.style.display = "block";
    shipsNextBtn.style.display = "block";
    planetBackBtn.style.display = "none";
    planetNextBtn.style.display = "none";
    peopleBackBtn.style.display = "none";
    peopleNextBtn.style.display = "none";

    fetch(shipsLink)
    .then(function(response2) {  
        console.log("success");
        return response2.json(); 
    })
    .then(function(response2) {
        console.log(response2.results)
        shipsInfo(tbodyShips, response2.results)
    })
})


function shipsInfo(tbodyShips, shipsArray) {
    tablePlanet.style.display = "none";
    table.style.display = "none";
    tbodyShips.innerHTML = "";
    tableShips.style.display = "block";
    
    for(i = 0; i < shipsArray.length; i++) {
        tbodyShips.innerHTML += `
        <tr class="tr-body">
        <td class="td-body"> ${shipsArray[i].name} </td>
        <td class="td-body"> ${shipsArray[i].model} </td>
        <td class="td-body"> ${shipsArray[i].manufacturer} </td>
        <td class="td-body"> ${shipsArray[i].cost_in_credits} </td>
        <td class="td-body"> ${parseInt(shipsArray[i].crew) + parseInt(shipsArray[i].passengers)} </td>
        <td class="td-body"> ${shipsArray[i].starship_class} </td>
        </tr>
        `
    }

}


// next button funkcii

let counterShip = 1;
let shipsIncrementCounter = (function() {
    return function() {
      counterShip += 1;
      return counterShip;
    };
  })();



shipsNextBtn.addEventListener("click", function() {
    let id3 = shipsIncrementCounter()

    fetch(`${shipsLink}${id3}`)
    .then(function(response2) {  
        console.log("success");
        return response2.json(); 
    })
    .then(function(response2) {
        console.log(response2.results)
        shipsInfo(tbodyShips, response2.results)
    })
    
})

// back button funkcii

let reverseCounterShips = (function() {
    return function() {
      counterShip -= 1;
      return counterShip;
    };
  })();


shipsBackBtn.addEventListener("click", function() {
    let id = reverseCounterShips();

    fetch(`${shipsLink}${id}`)
    .then(function(response2) {  
        console.log("success");
        return response2.json(); 
    })
    .then(function(response2) {
        console.log(response2.results)
        shipsInfo(tbodyShips, response2.results)
    })
    
})


// search people funkcii

searchBtn.addEventListener('click', function(){
    peopleBackBtn.style.display = "none";
    peopleNextBtn.style.display = "none";
    shipsBackBtn.style.display = "none";
    shipsNextBtn.style.display = "none";
    planetBackBtn.style.display = "none";
    planetNextBtn.style.display = "none";

    fetch(`${searchPeopleLink}${peopleInput.value}`)
    .then(function(responsePeople) {  
        console.log("success");
        return responsePeople.json(); 
    })
    .then(function(responsePeople) {
        console.log(responsePeople.results[0])
        searchedPeople(tbody, responsePeople.results[0])
    })
})



function searchedPeople(tbody, searchedPeopleArray) {

    peopleInput.value = "";
    tableShips.style.display = "none";
    tablePlanet.style.display = "none";
    tbody.innerHTML = "";
    table.style.display = "block";

        tbody.innerHTML += `
        <tr class="tr-body">
        <td class="td-body"> ${searchedPeopleArray.name} </td>
        <td class="td-body"> ${searchedPeopleArray.height} </td>
        <td class="td-body"> ${searchedPeopleArray.mass} </td>
        <td class="td-body"> ${searchedPeopleArray.gender} </td>
        <td class="td-body"> ${searchedPeopleArray.birth_year} </td>
        <td class="td-body"> ${searchedPeopleArray.films.length} </td>
        </tr>
        `
    }


// search ships funkcii

searchShipsBtn.addEventListener('click', function(){
    peopleBackBtn.style.display = "none";
    peopleNextBtn.style.display = "none";
    shipsBackBtn.style.display = "none";
    shipsNextBtn.style.display = "none";
    planetBackBtn.style.display = "none";
    planetNextBtn.style.display = "none";

    fetch(`${searchShipsLink}${shipsInput.value}`)
    .then(function(responseShips) {  
        console.log("success");
        return responseShips.json(); 
    })
    .then(function(responseShips) {
        console.log(responseShips.results[0])
        searchedShips(tbodyShips, responseShips.results[0])
        
    })
})


function searchedShips(tbodyShips, searchedshipsArray) {
    
    shipsInput.value = "";
    table.style.display = "none";
    tablePlanet.style.display = "none";
    tbodyShips.innerHTML = "";
    tableShips.style.display = "block";
    
        tbodyShips.innerHTML += `
        <tr class="tr-body">
        <td class="td-body"> ${searchedshipsArray.name} </td>
        <td class="td-body"> ${searchedshipsArray.model} </td>
        <td class="td-body"> ${searchedshipsArray.manufacturer} </td>
        <td class="td-body"> ${searchedshipsArray.cost_in_credits} </td>
        <td class="td-body"> ${parseInt(searchedshipsArray.crew) + parseInt(searchedshipsArray.passengers)} </td>
        <td class="td-body"> ${searchedshipsArray.starship_class} </td>
        </tr>
        `
}

// planet funkcii 

planet.addEventListener('click', function(){
    planetBackBtn.style.display = "block";
    planetNextBtn.style.display = "block";
    peopleBackBtn.style.display = "none";
    peopleNextBtn.style.display = "none";
    shipsBackBtn.style.display = "none";
    shipsNextBtn.style.display = "none";
    
    fetch(planetLink)
    .then(function(responsePlanet) {  
        console.log("success");
        return responsePlanet.json(); 
    })
    .then(function(responsePlanet) {
        console.log(responsePlanet.results)
        planetInfo(tbodyPlanet, responsePlanet.results); 
    })
})

function planetInfo(tbodyPlanet, planetArray) {
    table.style.display = "none";
    tableShips.style.display = "none";
    tbodyPlanet.innerHTML = "";
    tablePlanet.style.display = "block";
    
    for(i = 0; i < planetArray.length; i++) {
        tbodyPlanet.innerHTML += `
        <tr class="tr-body">
        <td class="td-body"> ${planetArray[i].name} </td>
        <td class="td-body"> ${planetArray[i].rotation_period} </td>
        <td class="td-body"> ${planetArray[i].orbital_period} </td>
        <td class="td-body"> ${planetArray[i].climate} </td>
        <td class="td-body"> ${planetArray[i].gravity} </td>
        <td class="td-body"> ${planetArray[i].population} </td>
        </tr>
        `
    }

}

let counterPlanet = 1;  
let planetIncrementCounter = (function() {
  return function() {
    counterPlanet += 1;
    return counterPlanet;
  };
})();


planetNextBtn.addEventListener("click", function() {
  let id = planetIncrementCounter()

  fetch(`${planetLink}${id}`)
  .then(function(responsePlanet) {  
      console.log("success");
      return responsePlanet.json(); 
  })
  .then(function(responsePlanet) {
      console.log(responsePlanet.results)
      planetInfo(tbodyPlanet, responsePlanet.results); 
  })
  
});


let reverseCounterPlanet = (function() {
    return function() {
      counterPlanet -= 1;
      return counterPlanet;
    };
  })();


planetBackBtn.addEventListener("click", function() {
    let id = reverseCounterPlanet();

    fetch(`${planetLink}${id}`)
    .then(function(responsePlanet) {  
        console.log("success");
        return responsePlanet.json(); 
    })
    .then(function(responsePlanet) {
        console.log(responsePlanet.results)
        planetInfo(tbodyPlanet, responsePlanet.results)
    })
    
})

searchPlanetBtn.addEventListener('click', function(){
    peopleBackBtn.style.display = "none";
    peopleNextBtn.style.display = "none";
    shipsBackBtn.style.display = "none";
    shipsNextBtn.style.display = "none";
    planetBackBtn.style.display = "none";
    planetNextBtn.style.display = "none";

    fetch(`${searchPlanetLink}${planetInput.value}`)
    .then(function(responsePlanet) {  
        console.log("success");
        return responsePlanet.json(); 
    })
    .then(function(responsePlanet) {
        console.log(responsePlanet.results[0])
        searchPlanet(tbodyPlanet, responsePlanet.results[0])
        
    })
})


function searchPlanet(tbodyPlanet, planetArraySearch) {
    planetInput.value = "";
    table.style.display = "none";
    tableShips.style.display = "none";
    tbodyPlanet.innerHTML = "";
    tablePlanet.style.display = "block";
    
        tbodyPlanet.innerHTML += `
        <tr class="tr-body">
        <td class="td-body"> ${planetArraySearch.name} </td>
        <td class="td-body"> ${planetArraySearch.rotation_period} </td>
        <td class="td-body"> ${planetArraySearch.orbital_period} </td>
        <td class="td-body"> ${planetArraySearch.climate} </td>
        <td class="td-body"> ${planetArraySearch.gravity} </td>
        <td class="td-body"> ${planetArraySearch.population} </td>
        </tr>
        `
    

}