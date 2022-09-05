// let slideIndex = 1;
// let totalSlides = 4;
// let img1 = document.getElementById("img0")
// let img2 = document.getElementById("img1")
// let img3 = document.getElementById("img2")
// let img4 = document.getElementById("img3")
// function nextSlide(){
//     document.getElementById("img" + slideIndex).classList.remove("current");
//     slideIndex += 1
//     document.getElementById("img" + slideIndex).classList.add("current");
//     if(slideIndex != 4){
//         btnNext.disabled = false;
//     }
//     else{
//         btnNext.disabled = true;
//     }

//     // let arr = new Array(img1, img2, img3, img4)
//     // arr.indexOf("img" + slideIndex).classList.remove("current")
//     // slideIndex += 1
//     // arr.indexOf("img" + slideIndex).classList.add("current")
// }
// function prevSlide(){
//     document.getElementById("img" + totalSlides).classList.remove("current");
//     totalSlides -= 1
//     document.getElementById("img" + totalSlides).classList.add("current");
//     if(totalSlides != 1){
//         btnPrev.disabled = false;
//     }
//     else{
//         btnPrev.disabled = true;
//     }
// }

// const = document

const btnPrev = document.querySelector("#prev");
const btnNext = document.querySelector("#next");
const imgSlider = document.querySelector(".image-slider");
index = 0;

const images = ["peach.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];

function slide(index) {
  imgSlider.style.backgroundImage = `url(./img/${images[index]})`;
}

btnNext.addEventListener("click", () => {
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
  slide(index);
});
btnPrev.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  slide(index);
});
