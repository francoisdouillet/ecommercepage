const showCart = document.getElementById("showCart");
const btnCart = document.getElementById("btnCart");
console.log(showCart)
console.log(btnCart)
btnCart.onclick = function () {
  if (showCart.style.display !== "none") {
    showCart.style.display = "none";
  } else {
    showCart.style.display = "block";
  }
};