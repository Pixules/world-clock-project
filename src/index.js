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
