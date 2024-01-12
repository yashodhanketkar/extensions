const art = document.getElementById("art");
const plot = document.getElementById("plot");
const characters = document.getElementById("characters");
const extra = document.getElementById("extra");
const result = document.getElementById("result");
const resetButton = document.getElementById("resetButton");

art.value = 0;
plot.value = 0;
characters.value = 0;
extra.value = 0;
result.value = 0.0;

const resetValue = () => {
  art.value = 0;
  extra.value = 0;
  plot.value = 0;
  characters.value = 0;
  result.value = 0;
};

const caluculate = () => {
  result.value =
    parseInt(art.value) +
    parseInt(plot.value) +
    parseInt(characters.value) +
    parseFloat(extra.value);
};

resetButton.addEventListener("click", resetValue);
art.addEventListener("change", caluculate);
plot.addEventListener("change", caluculate);
characters.addEventListener("change", caluculate);
extra.addEventListener("change", caluculate);
