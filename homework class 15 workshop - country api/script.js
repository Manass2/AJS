const input = document.getElementById("search");
const buttonSearch = document.getElementById("buttonSearch");
const table = document.getElementById("table");
const thead = document.getElementById("thead");
const tbody = document.getElementById("tbody");
const loader = document.getElementById("loader");

const nameSort = document.getElementById("nameSort");
const areaSort = document.getElementById("areaSort");
const populationSort = document.getElementById("populationSort");

let link = "https://restcountries.eu/rest/v2/name/";
let data = [];

loader.style.display="none";

buttonSearch.addEventListener("click", contryData)

    async function contryData() {
        loader.style.display="block";
        let response = await fetch(`${link}${input.value}`);
        // let response = await fetch(`https://restcountries.eu/rest/v2/all`);
        data = await response.json();
        console.log(data);
        countryInfo(data);
        }

    function countryInfo(dataOfContry) {
        loader.style.display="none";
        input.value = ""
        tbody.innerHTML = "";
         dataOfContry.forEach(country =>{
            tbody.innerHTML += `
            <tr>
               <th scope="row"> <img src="${country.flag}" class="flags" "> </th>
               <td>${country.name}</td>
               <td>${country.population}</td>
               <td>${country.capital}</td>
               <td>${country.area}</td>
               <td>${country.currencies[0].code}</td>
               <td>${country.languages[0].name}</td>
           </tr>
      `
         })
    };

    // name sorting

    let sorting = false;

    nameSort.addEventListener("click", function(){
        sorting = !sorting;
        sorting ? descending() : ascending();
    });
    
    function descending() {
        let sortDescending = data.sort((user1, user2) => user2.name.localeCompare(user1.name)); 
        countryInfo(sortDescending);
    }
    
    function ascending() {
        let sortAscending = data.sort((user1, user2) => user1.name.localeCompare(user2.name));
        countryInfo(sortAscending);
    };

    // area sorting

    let sorting2 = false;

    areaSort.addEventListener("click", function(){
        sorting2 = !sorting2;
        sorting2 ? descendingA() : ascendingA();
    });
    
    function descendingA() {
        let sortDescending2 = data.sort((user1, user2) => user2.area - user1.area);
        countryInfo(sortDescending2);
    }
    
    function ascendingA() {
        let sortAscending2 = data.sort((user1, user2) => user1.area - user2.area);
        countryInfo(sortAscending2);
    };


      // population sorting

      let sorting3 = false;

      populationSort.addEventListener("click", function(){
          sorting3 = !sorting3;
          sorting3 ? descendingP() : ascendingP();
      });
      
      function descendingP() {
          let sortDescending3 = data.sort((user1, user2) => user2.population - user1.population);
          countryInfo(sortDescending3);
      }
      
      function ascendingP() {
          let sortAscending3 = data.sort((user1, user2) => user1.population - user2.population);
          countryInfo(sortAscending3);
      };