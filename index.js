const showCart = document.getElementById("showCart");
const btnCart = document.getElementById("btnCart");


btnCart.onclick = function () {
  if (showCart.style.transform == "scale(1)") {
    showCart.style.transform = "scale(0)";
  } else  {
    showCart.style.transform = "scale(1)";
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

document.getElementById('decrease').setAttribute('disabled', 'disabled')

document.getElementById('increase').addEventListener("click", function(){
  let valueInput = document.getElementById('quantity').value;
  valueInput++;
  document.getElementById('quantity').value = valueInput;
  if(valueInput > 1){
    document.getElementById('decrease').removeAttribute('disabled', 'disabled')
  }
})

document.getElementById('decrease').addEventListener("click", function(){
  let valueInput = document.getElementById('quantity').value;
  valueInput--;
  document.getElementById('quantity').value = valueInput;
  if(valueInput == 1){
    document.getElementById('decrease').setAttribute('disabled', 'disabled')
  }
})