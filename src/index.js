function updateTime() {
  let firstCityElement = document.querySelector("#first-location");
  let firstCityDate = firstCityElement.querySelector(".date");
  let firstCityTimeElement = firstCityElement.querySelector(".time");
  let firstCityTime = moment().tz("America/Los_Angeles");

  firstCityDate.innerHTML = firstCityTime.format("MMMM Do YYYY");
  firstCityTimeElement.innerHTML = firstCityTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let secondCityElement = document.querySelector("#second-location");
  let secondCityDate = secondCityElement.querySelector(".date");
  let secondCityTimeElement = secondCityElement.querySelector(".time");
  let secondCityTime = moment().tz("Australia/Adelaide");

  secondCityDate.innerHTML = secondCityTime.format("MMMM Do YYYY");
  secondCityTimeElement.innerHTML = secondCityTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);

function showSelectedCountry(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM Do, YYYY h:mm a");

    alert(`It is ${currentTime} in ${event.target.value}`);
  }
}

let citySelect = document.querySelector("#cities");

citySelect.addEventListener("change", showSelectedCountry);
