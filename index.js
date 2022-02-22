/* Display cart on homepage */
const showCart = document.getElementById("showCart");
const btnCart = document.getElementById("btnCart");

btnCart.onclick = function () {
  if (showCart.style.transform == "scale(1)") {
    showCart.style.transform = "scale(0)";
  } else {
    showCart.style.transform = "scale(1)";
  }
};

/* Slider image */
const image = document.querySelectorAll(".main__image--choose a");
const imageBtn = [...image];
let imageId = 1;

imageBtn.forEach((imageItem) => {
  imageItem.addEventListener("click", (event) => {
    event.preventDefault();
    imageId = imageItem.dataset.id;
    document.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");
    slideImage();
  });
});

function slideImage() {
  const displayWith = document.querySelector(
    ".displayImage img:first-child"
  ).clientWidth;
  document.querySelector(".displayImage").style.transform = `translateX(${
    -(imageId - 1) * displayWith
  }px)`;
}

/* Quantity increase decrease */

document.getElementById("decrease").setAttribute("disabled", "disabled");

document.getElementById("increase").addEventListener("click", function () {
  let valueInput = document.getElementById("quantity").value;
  valueInput++;
  document.getElementById("quantity").value = valueInput;
  if (valueInput > 1) {
    document.getElementById("decrease").removeAttribute("disabled", "disabled");
  }
});

document.getElementById("decrease").addEventListener("click", function () {
  let valueInput = document.getElementById("quantity").value;
  valueInput--;
  document.getElementById("quantity").value = valueInput;
  if (valueInput == 1) {
    document.getElementById("decrease").setAttribute("disabled", "disabled");
  }
});

/* Add to basket */

const buttonCart = document.getElementById("cart");

buttonCart.addEventListener("click", function () {
  const objectBasket = {
    image: document.getElementById("imageProduct").src,
    title: document.getElementById("titleProduct").textContent,
    price: document.getElementById("priceProduct").textContent,
    quantity: document.getElementById("quantity").value,
  };

  const priceReplace = objectBasket.price.replace("$", "").replace(".00", "");
  const price = parseInt(priceReplace, 10);
  const quantity = parseInt(objectBasket.quantity, 10);
  const total = quantity * price;

  const div = document.createElement("div");
  div.classList.add("cartHeader");
  div.innerHTML = `<div class="cartHeader__item">
    <img src="${objectBasket.image}">
    <div>
      <p>${objectBasket.title}</p>
      <p>${objectBasket.price} x ${objectBasket.quantity} <span>$${total}.00</span></p>
    </div>
</div><button>Checkout</button>`;
  showCart.appendChild(div);
});
