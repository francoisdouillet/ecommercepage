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


const displayImage = document.getElementsByClassName('showImage')
const image = document.getElementsByClassName('main__image--selected')
const image1 = ["./images/image-product-1.jpg","./images/image-product-2.jpg","./images/image-product-3.jpg","./images/image-product-4.jpg"]

for ( i = 0 ; i < displayImage.length ; i++) {
  displayImage[i].addEventListener("click", function() {
    this.style.border = "2px solid hsl(26, 100%, 55%)"
    image.style.backgroundImage = "url("${image1[i]}")"
  });
}



