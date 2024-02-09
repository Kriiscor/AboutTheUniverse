
document.addEventListener('DOMContentLoaded', function () {
const resultVe = document.querySelector('.resultvehicule');
const resultPe = document.querySelector('.resultperson');
const resultPl = document.querySelector('.resultplanet');
  
    fetch('https://swapi.dev/api/vehicles')
      .then(response => response.json())
      .then(data => {
        const totalCount = data.count;
        resultVe.textContent = `Nombre total de véhicules : ${totalCount}`;
      })
      fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(data => {
        const totalCount = data.count;
        resultPe.textContent = `Nombre total de personnes : ${totalCount}`;
      })
      fetch('https://swapi.dev/api/planets')
      .then(response => response.json())
      .then(data => {
        const totalCount = data.count;
        resultPl.textContent = `Nombre total de planetes : ${totalCount}`;
      })
  });
