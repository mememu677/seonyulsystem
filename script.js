let alters = ["온결", "선율"];
let current = 0;

function switchAlter() {
  current = (current + 1) % alters.length;
  document.getElementById("current-alter").textContent = alters[current];
}