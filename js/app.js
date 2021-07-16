// Slider

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 2,
    focus: "center",
    gap: 20,
  }).mount();
});

// Date Picker - Pikaday

var picker = new Pikaday({
  field: document.getElementById("datepicker"),
  minDate: new Date(),
  format: "Do MMM YYYY",
});

// Calculator

const wordLimit = document.querySelector("#wordLimit");
wordLimit.addEventListener("keyup", function () {
  const wordLimitVal = wordLimit.value;

  document.querySelector("#minVal").textContent = `${wordLimitVal / 100} £`;
  document.querySelector("#maxVal").textContent = `${
    (2 * wordLimitVal) / 100
  } £`;
});

// AOS

AOS.init();
