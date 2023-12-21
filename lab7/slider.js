let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

let slideCount = sliderImages.length;

let currentSlide = 1;

let slideNumber = document.getElementById("slide-number");

let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

//handle click on next & prev
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//create bullets
bulletsList = document.createElement("ul");
bulletsList.setAttribute("id", "bulletsList");

for (let i = 1; i <= slideCount; i++) {
  let item = document.createElement("li");
  item.setAttribute("data-index", i);
  item.appendChild(document.createTextNode(i));
  bulletsList.appendChild(item);
}

document.getElementById("indicators").appendChild(bulletsList);

let createdUl = document.getElementById("bulletsList");

let bullets = Array.from(document.querySelectorAll("bulletsList li"));

for (let i = 0; i < bullets.length; i++) {
  bullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
  };

  theCheker();
}

theCheker();

//functiotns

function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theCheker();
  }
}
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theCheker();
  }
}

function theCheker() {
  slideNumber.textContent = "slide #" + currentSlide + " of " + slideCount;

  removeActive();

  sliderImages[currentSlide - 1].classList.add("active");

  createdUl.children[currentSlide - 1].classList.add("active");

  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (currentSlide == slideCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

function removeActive() {
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });

  bullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
