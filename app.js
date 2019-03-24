let hopeIndex = 0;
let fearIndex = 0;

// Fisher–Yates shuffle https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  let m = array.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

const hopes = shuffle([
  "to become good at writing",
  "to make things that make people feel less lonely",
  "to meet like-minded people",
  "to re-learn how to be alone",
  "to run a 10K"
]);
const fears = shuffle([
  'that "anyone can create art" is feel-good bullshit, and that I lack artistic talent',
  "of being fired",
  "of bothering my friends",
  "of developing chronic pain",
  "of people on the internet",
  "that I only have friends because they feel bad for me",
  "that my social anxiety makes me come across as rude"
]);

const hopeElement = document.getElementById("hope");
const fearElement = document.getElementById("fear");
const emailElement = document.getElementById("email");

function changeHope() {
  hopeIndex < hopes.length - 1 ? hopeIndex++ : (hopeIndex = 0);
  hopeElement.innerHTML = hopes[hopeIndex];
}

function changeFear() {
  fearIndex < fears.length - 1 ? fearIndex++ : (fearIndex = 0);
  fearElement.innerHTML = fears[fearIndex];
}

function decodeEmail() {
  const a = emailElement.innerHTML;
  const b = atob(a);
  emailElement.innerHTML = b;
  emailElement.onclick = undefined;
  emailElement.onkeydown = undefined;
}

window.onload = function() {
  changeHope();
  changeFear();
  hopeElement.onclick = changeHope;
  hopeElement.onkeydown = function(e) {
    if (e.code === "Enter" || e.code === "Space") changeHope();
  };
  fearElement.onclick = changeFear;
  fearElement.onkeydown = function(e) {
    if (e.code === "Enter" || e.code === "Space") changeFear();
  };
  emailElement.onclick = decodeEmail;
  emailElement.onkeydown = function(e) {
    if (e.code === "Enter" || e.code === "Space") decodeEmail();
  };
};
