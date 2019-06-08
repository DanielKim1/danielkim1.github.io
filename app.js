const emailElement = document.getElementById("email");

function decodeEmail() {
  const a = emailElement.innerHTML;
  const b = atob(a);
  emailElement.innerHTML = b;
  emailElement.onclick = undefined;
  emailElement.onkeydown = undefined;
}

window.onload = function() {
  emailElement.onclick = decodeEmail;
  emailElement.onkeydown = function(e) {
    if (e.code === "Enter" || e.code === "Space") decodeEmail();
  };
};
