
let container = document.createElement("div");
container.className = "container";
document.body.append(container);

let row = document.createElement("div");
row.className = "row";
container.append(row);

// fetching data 

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((e) => {
      let capital = e.capital;
      if (capital == undefined) {
        capital = "N/A";
      }
      let region = e.region;
      let latLng = e.latlng;
      let CountryName = e.name.common;
      let flag = e.flags.png;
      let countryCode = e.cca3;
      let mainCard = document.createElement("div");
      mainCard.className = "col-lg-4 col-sm-12 p-3 maindiv";
      let subcard = document.createElement("div");
      subcard.className = "card";
      subcard.innerHTML = `<h3
      class="text-center bg-black text-white p-2"
      id="countryName">${CountryName}</h3>
        <img
        class="card-img img-fluid img-thumbnail"
        src="${flag}"
        alt="Card image"
        style="height:250px; width="10%";"
        />
        <div class="text-center fs-6 p-1  text-white" id="capital" >
       <b> Capital :</b> ${capital}</div>
        <div class="text-center fs-6 p-1  text-white" id="region"><b>Region :</b> ${region}</div>
        <div class="text-center fs-6 p-1  text-white" id="countryCode">
        <b> Country Code :</b> ${countryCode}
        </div>
        <div class="text-center fs-6 p-1  text-white" id="latlng">
        <b>  Coordinates : </b>${latLng}
        </div>
        <div class="d-flex align-items-center justify-content-center p-1   text-white">
        <button type="button" class="fs-6 btn btn-outline-light btn-primary" data-set="${CountryName}">
        <b> Click for Weather</b>
        </button>
    </div>`;
      mainCard.append(subcard);
      row.append(mainCard);
    });
  });

document.addEventListener("click", (e) => {
  if (e.target.type == "button") {
    if (e.target.innerText == "Click for Weather") {
      let displayCountry = e.target.dataset.set;
      getWeather(displayCountry)
        .then((weatherData) => {
          e.target.innerHTML = weatherData;
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      e.target.innerText = "Click for Weather";
    }
  }
});

function getWeather(location) {
  const apiKey = "6a4098ac14c46bf2991503838060f984";
 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let displayData = `Temp : ${data.main.temp} °C,  Condition : ${data.weather[0].main}`;
      return displayData;
    });
}