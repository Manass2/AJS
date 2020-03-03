// people dom
let cosmonaut = document.getElementById("cosmonaut");
let table = document.getElementById("table");
let tbody = document.getElementById("tbody");
let peopleBackBtn = document.getElementById("back");
let peopleNextBtn = document.getElementById("next");
let peopleInput = document.getElementById("search-field-people");
let btnSort = document.getElementById("sort");
let pageDisplay = document.getElementById("pagedItems");

// ships dom

let rocket = document.getElementById("rocket");
let tableShips = document.getElementById("tableShips");
let tbodyShips = document.getElementById("tbodyShips");
let shipsBackBtn = document.getElementById("back2");
let shipsNextBtn = document.getElementById("next2");
let shipsInput = document.getElementById("search-field");
let shipsPageDisplay = document.getElementById("pagedItemsShips");
let btnsortShips = document.getElementById("sortShips");

// planet dom

let planet = document.getElementById("planet");
let tablePlanet = document.getElementById("tablePlanets");
let tbodyPlanet = document.getElementById("tbodyPlanets");
let planetBackBtn = document.getElementById("back3");
let planetNextBtn = document.getElementById("next3");
let planetInput = document.getElementById("search-field-planets");
let planetPagesDisplay = document.getElementById("pagedItemsPlanets");
let btnSortPlanet = document.getElementById("sortPlanet");

let loading = document.getElementById("loading"); 
loading.style.display = "none";

//display
table.style.display = "none";
tableShips.style.display = "none";
tablePlanet.style.display = "none";

peopleBackBtn.style.display = "none";
peopleNextBtn.style.display = "none";
shipsBackBtn.style.display = "none";
shipsNextBtn.style.display = "none";
planetBackBtn.style.display="none";
planetNextBtn.style.display="none";

// links
let peopleLink = "https://swapi.co/api/people/?page=";
let searchPeopleLink ="https://swapi.co/api/people/?search=";
let shipsLink = "https://swapi.co/api/starships/?page=";
let searchShipsLink = "https://swapi.co/api/starships/?search=";
let planetLink = "https://swapi.co/api/planets/?page=";
let searchPlanetLink = "https://swapi.co/api/planets/?search="

// people data
let data = [];
let counter = 1;
let searchedPeople = [];

// ships data
let shipsData = [];
let shipsCounter = 1;
let searchShips = [];

// planet data
let planetData = [];
let planetCounter = 1;
let searchPlanet = [];


// people funkcii

cosmonaut.addEventListener("click", () =>{
    loading.style.display = "block";
    peopleBackBtn.style.display = "block";
    peopleNextBtn.style.display = "block";
    pageDisplay.style.display = "block";
    shipsBackBtn.style.display = "none";
    shipsNextBtn.style.display = "none";
    shipsPageDisplay.style.display ="none"
    planetBackBtn.style.display="none";
    planetNextBtn.style.display="none";
    planetPagesDisplay.style.display = "none"
    peopleData()
})


async function peopleData() {
    let response = await fetch(`${peopleLink}${counter}`);
    data = await response.json();
    cosmonautInfo(data.results);
    addPagingButtons()
}

function cosmonautInfo(peopleArray) {
    loading.style.display = "none";
    tbody.innerHTML = "";
    table.style.display = "block";
    tablePlanet.style.display = "none";
    tableShips.style.display = "none";

    peopleArray.forEach(people => {
        tbody.innerHTML += `
        <tr class="tr-body">
        <td class="td-body"> ${people.name} </td>
        <td class="td-body"> ${people.height} </td>
        <td class="td-body"> ${people.mass} </td>
        <td class="td-body"> ${people.gender} </td>
        <td class="td-body"> ${people.birth_year} </td>
        <td class="td-body"> ${people.films.length} </td>
        <td><input type="button" onclick="deleteRow(this)" id="btnDelete" class="btnDelete" value="Delete" </td>
        </tr>
        `
    });
}

// people next and previous btns

peopleNextBtn.addEventListener("click", () => {
    counter++;
    peopleData();
})

peopleBackBtn.addEventListener("click", () => {
    counter--;
    peopleData();
    
})

// search people 

async function searchPeople() {
    let response = await fetch(`${searchPeopleLink}${peopleInput.value}`);
    searchedPeople = await response.json();
    cosmonautInfo(searchedPeople.results);
}

peopleInput.addEventListener("input", () => {
    peopleBackBtn.style.display = "block";
    peopleNextBtn.style.display = "block";
    pageDisplay.style.display = "block";
    tableShips.style.display = "none";
    shipsBackBtn.style.display = "none";
    shipsNextBtn.style.display = "none";
    shipsPageDisplay.style.display ="none"
    planetBackBtn.style.display = "none"
    planetNextBtn.style.display = "none"
    planetPagesDisplay.style.display = "none"
    searchPeople()
})

// people btns

async function peoplePagedData(page) {
    let url = `${peopleLink}${page}`;
    let response = await fetch(url);
    data = await response.json();
    cosmonautInfo(data.results);
}

function addPagingButtons() {
    pageDisplay.innerHTML = ""
    for(let i = 0; i < data.count / 10; i++) {

        pageDisplay.innerHTML += `
            <button class="page-buttons" value="${i + 1}">${i + 1}</button>
        `;    
    }

    let buttons = document.getElementsByClassName(`page-buttons`);
    for( let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", event => {
            peoplePagedData(event.target.value)
            
        })
    }
}

//delete
function deleteRow(row) {
    let i = row.parentNode.parentNode.rowIndex;
    table.deleteRow(i);
    data.results.splice(i-1, 1);
}


//sort

let sorting = false;

btnSort.addEventListener("click", function(){
    sorting = !sorting;
    sorting ? descend() : ascend();
});

function descend() {
    
    let sortDescending = data.results.sort((user1, user2) => user2.name.localeCompare(user1.name)); // Descending
    cosmonautInfo(sortDescending);
}

function ascend() {
    let sortAscending = data.results.sort((user1, user2) => user1.name.localeCompare(user2.name)); // Ascending
    cosmonautInfo(sortAscending);
}


// ------- ships funckii --------

rocket.addEventListener("click", () => {
    loading.style.display = "block";
    shipsBackBtn.style.display = "block";
    shipsNextBtn.style.display = "block";
    shipsPageDisplay.style.display ="block"
    peopleBackBtn.style.display = "none";
    peopleNextBtn.style.display = "none";
    pageDisplay.style.display = "none";
    planetBackBtn.style.display="none";
    planetNextBtn.style.display="none";
    planetPagesDisplay.style.display = "none"
    ships()
    
})

async function ships() {
    let response = await fetch(`${shipsLink}${shipsCounter}`);
    shipsData = await response.json();
    showShips(shipsData.results)
    shipsPagingButtons()
}

function showShips(shipsArray) {
    loading.style.display = "none";
    table.style.display = "none";
    tablePlanet.style.display = "none";
    tbodyShips.innerHTML = "";
    tableShips.style.display = "block";

    shipsArray.forEach(ships => {
        tbodyShips.innerHTML += `
        <tr class="tr-body">
        <td class="td-body"> ${ships.name} </td>
        <td class="td-body"> ${ships.model} </td>
        <td class="td-body"> ${ships.manufacturer} </td>
        <td class="td-body"> ${ships.cost_in_credits} </td>
        <td class="td-body"> ${parseInt(ships.crew) + parseInt(ships.passengers)} </td>
        <td class="td-body"> ${ships.starship_class} </td>
        <td><input type="button" onclick="deleteShipsRow(this)" id="btnDeleteShips" class="btnDelete" value="Delete" </td>
        </tr>
        `
    });
}

// ships next and previous btns

shipsNextBtn.addEventListener("click", () => {
    shipsCounter++;
    ships();
})

shipsBackBtn.addEventListener("click", () => {
    shipsCounter--;
    ships();
    
})

// search ships

async function searchingShips() {
    let response = await fetch(`${searchShipsLink}${shipsInput.value}`);
    searchedShips = await response.json();
    showShips(searchedShips.results);
}

shipsInput.addEventListener("input", () => {
    shipsBackBtn.style.display = "block";
    shipsNextBtn.style.display = "block";
    shipsPageDisplay.style.display ="block"
    table.style.display = "none";
    peopleBackBtn.style.display = "none";
    peopleNextBtn.style.display = "none";
    pageDisplay.style.display = "none";
    planetBackBtn.style.display = "none"
    planetNextBtn.style.display = "none"
    planetPagesDisplay.style.display = "none"
    searchingShips();
})

// ships btns

async function shipsPagedData(page) {
    let url = `${shipsLink}${page}`;
    let response = await fetch(url);
    shipsData = await response.json();
    showShips(shipsData.results);
    
}

function shipsPagingButtons() {
    shipsPageDisplay.innerHTML = ""
    for(let i = 0; i < shipsData.count / 10; i++) {

        shipsPageDisplay.innerHTML += `
            <button class="page-buttons-ships" value="${i + 1}">${i + 1}</button>
        `;    
    }

    let buttonsShips = document.getElementsByClassName(`page-buttons-ships`);
    for( let i = 0; i < buttonsShips.length; i++){
        buttonsShips[i].addEventListener("click", event => {
            shipsPagedData(event.target.value)
            
        })
    }
}

//delete
function deleteShipsRow(row) {
    let i = row.parentNode.parentNode.rowIndex;
    tableShips.deleteRow(i);
    shipsData.results.splice(i-1, 1);
}


//sort

let sortingShips = false;

btnsortShips.addEventListener("click", function(){
    sortingShips = !sortingShips;
    sortingShips ? descendShips() : ascendShips();
});

function descendShips() {
    
    let sortDescending = shipsData.results.sort((user1, user2) => user2.name.localeCompare(user1.name)); // Descending
    showShips(sortDescending);
}

function ascendShips() {
    let sortAscending = shipsData.results.sort((user1, user2) => user1.name.localeCompare(user2.name)); // Ascending
    showShips(sortAscending);
}


// ----------  planet funkcii -----------

planet.addEventListener("click", () =>{
    loading.style.display = "block";
    planetBackBtn.style.display="block";
    planetNextBtn.style.display="block";
    planetPagesDisplay.style.display="block";
    peopleBackBtn.style.display = "none";
    peopleNextBtn.style.display = "none";
    pageDisplay.style.display = "none";
    shipsBackBtn.style.display = "none";
    shipsNextBtn.style.display = "none";
    shipsPageDisplay.style.display ="none"
    planetCall()
})

async function planetCall() {
    let response = await fetch(`${planetLink}${planetCounter}`);
    planetData = await response.json();
    showPlanet(planetData.results)
    planetPagingButtons()
}

function showPlanet(planetArray) {
    tbodyPlanet.innerHTML = "";
    tablePlanet.style.display = "block";
    loading.style.display = "none";
    tableShips.style.display = "none";
    table.style.display = "none";

    planetArray.forEach(planet => {
        tbodyPlanet.innerHTML += `
        <tr class="tr-body">
        <td class="td-body"> ${planet.name} </td>
        <td class="td-body"> ${planet.rotation_period} </td>
        <td class="td-body"> ${planet.orbital_period} </td>
        <td class="td-body"> ${planet.climate} </td>
        <td class="td-body"> ${planet.gravity} </td>
        <td class="td-body"> ${planet.population} </td>
        <td><input type="button" onclick="deletePlanetRow(this)" id="btnDeletePlanet" class="btnDelete" value="Delete" </td>
        </tr>
        `
    });
}

// next and previous btns

planetNextBtn.addEventListener("click", () => {
    planetCounter++;
    planetCall() ;
})

planetBackBtn.addEventListener("click", () => {
    planetCounter--;
    planetCall() ;
    
})

// search

async function findShips() {
    let response = await fetch(`${searchPlanetLink}${planetInput.value}`);
    searchedPlanet = await response.json();
    showPlanet(searchedPlanet.results);
}

planetInput.addEventListener("input", () => {
    tablePlanet.style.display = "block"
    planetBackBtn.style.display = "block"
    planetNextBtn.style.display = "block"
    planetPagesDisplay.style.display = "block"
    peopleBackBtn.style.display = "none";
    peopleNextBtn.style.display = "none";
    pageDisplay.style.display = "none";
    table.style.display="none";
    tableShips.style.display = "none";
    shipsBackBtn.style.display = "none";
    shipsNextBtn.style.display = "none";
    shipsPageDisplay.style.display ="none"
    findShips()
})


// Planet btns

async function planetPagedData(page) {
    let url = `${planetLink}${page}`;
    let response = await fetch(url);
    planetData = await response.json();
    showPlanet(planetData.results);
    
}

function planetPagingButtons() {
    planetPagesDisplay.innerHTML = ""
    for(let i = 0; i < planetData.count / 10; i++) {

        planetPagesDisplay.innerHTML += `
            <button class="page-buttons-planet" value="${i + 1}">${i + 1}</button>
        `;    
    }

    let buttonsPlanet = document.getElementsByClassName(`page-buttons-planet`);
    for( let i = 0; i < buttonsPlanet.length; i++){
        buttonsPlanet[i].addEventListener("click", event => {
            planetPagedData(event.target.value)
            
        })
    }
}

//delete
function deletePlanetRow(row) {
    let i = row.parentNode.parentNode.rowIndex;
    tablePlanet.deleteRow(i);
    planetData.results.splice(i-1, 1);
}

//sort

let sortingPlanet = false;

btnSortPlanet.addEventListener("click", function(){
    sortingPlanet = !sortingPlanet;
    sortingPlanet ? descendPlanet() : ascendPlanet();
});

function descendPlanet() {
    
    let sortDescending = planetData.results.sort((user1, user2) => user2.name.localeCompare(user1.name)); // Descending
    showPlanet(sortDescending);
}

function ascendPlanet() {
    let sortAscending = planetData.results.sort((user1, user2) => user1.name.localeCompare(user2.name)); // Ascending
    showPlanet(sortAscending);
}