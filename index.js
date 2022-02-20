const showCart = document.getElementById("showCart");
const btnCart = document.getElementById("btnCart");

showCart.style.display = "none"

btnCart.onclick = function () {
  if (showCart.style.display == "none") {
    showCart.style.display = "block";
    showCart.style.border = "1px solid red"
  } else  {
    showCart.style.display = "none";
  }
};

const image = document.querySelectorAll('.main__image--choose a')
const imageBtn = [... image];
let imageId = 1;

imageBtn.forEach((imageItem) => {
  imageItem.addEventListener('click', (event) => {
    event.preventDefault();
    imageId = imageItem.dataset.id;
    document.querySelector('.active').classList.remove("active")
    event.target.classList.add('active')
    slideImage();
  })
})

function slideImage() {
  const displayWith = document.querySelector('.displayImage img:first-child').clientWidth;
  document.querySelector('.displayImage').style.transform = `translateX(${- (imageId -1) * displayWith}px)`
}

window.addEventListener('resize', slideImage);