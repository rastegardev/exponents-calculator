const displayNumber = document.getElementById("display-number");
const inputBase = document.getElementById("input-number");
const inputExponent = document.getElementById("input-exponent");
const resetBtn = document.getElementById("reset-btn");

inputExponent.addEventListener("keyup", function (event) {
  const num = event.target.value;

  inputBase.addEventListener("keyup", function (event) {
    const exponent = Math.pow(event.target.value, num);
    displayNumber.innerText = exponent;
  });
});

resetBtn.addEventListener("click", function () {
  location.reload();
  displayNumber.innerText = 0;
});