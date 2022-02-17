const showCart = document.getElementById("showCart");
const btnCart = document.getElementById("btnCart");
showCart.style.display = "none"

btnCart.onclick = function () {
  if (showCart.style.display == "none") {
    showCart.style.display = "block";
  } else  {
    showCart.style.display = "none";
  }
};