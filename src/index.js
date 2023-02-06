function updateTime() {
  let firstCityElement = document.querySelector("#first-location");
  if (firstCityElement) {
    let firstCityDate = firstCityElement.querySelector(".date");
    let firstCityTimeElement = firstCityElement.querySelector(".time");
    let firstCityTime = moment().tz("America/Los_Angeles");

    firstCityDate.innerHTML = firstCityTime.format("MMMM Do YYYY");
    firstCityTimeElement.innerHTML = firstCityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let secondCityElement = document.querySelector("#second-location");
  if (secondCityElement) {
    let secondCityDate = secondCityElement.querySelector(".date");
    let secondCityTimeElement = secondCityElement.querySelector(".time");
    let secondCityTime = moment().tz("Australia/Adelaide");

    secondCityDate.innerHTML = secondCityTime.format("MMMM Do YYYY");
    secondCityTimeElement.innerHTML = secondCityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

function showSelectedCountry(event) {
  if (event.target.value.length > 0) {
    let currentTimeZone = event.target.value;
    let cityName = currentTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(event.target.value);
    let cityElement = document.querySelector("#locations");
    cityElement.innerHTML += `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>`;
  }
}

let citySelect = document.querySelector("#cities");

citySelect.addEventListener("change", showSelectedCountry);
