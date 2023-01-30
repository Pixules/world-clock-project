function showSelectedCountry(event) {
  if (event.target.value === "paris") {
    alert(
      `It is ${moment()
        .tz("Europe/Paris")
        .format("dddd, MMMM Do, YYYY h:mm a")} in Paris, Europe`
    );
  }
  if (event.target.value === "tokyo") {
    alert(
      `It is ${moment()
        .tz("Asia/Tokyo")
        .format("dddd, MMMM Do, YYYY h:mm a")} in Tokyo, Japan`
    );
  }
  if (event.target.value === "sydney") {
    alert(
      `It is ${moment()
        .tz("Australia/Sydney")
        .format("dddd, MMMM Do, YYYY h:mm a")} in Sydney, Australia`
    );
  }
}

let citySelect = document.querySelector("#cities");

citySelect.addEventListener("change", showSelectedCountry);
