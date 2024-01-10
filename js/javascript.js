// Loading animation
const loader = document.querySelector(".loader");
const main = document.querySelector(".main");
function loadingAnimation() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    main.style.display = "block";
    setTimeout(() => {
      main.style.opacity = 1;
    }, 20);
  }, 1300);
}
loadingAnimation();

// Header Scrollable
const header_scroll = document.querySelector("header");
window.addEventListener("scroll", function () {
  header_scroll.classList.toggle("header_sticky", this.window.scrollY > 0);
});

// Header link
const link = document.querySelectorAll(".link");
function activeLink() {
  link.forEach((ele) => {
    ele.classList.remove("active");
  });
  this.classList.add("active");
}
link.forEach((ele) => {
  ele.addEventListener("click", activeLink);
});

// Active nav links when scroll the page
let sections = document.querySelectorAll(".section_active");
let navLinks = document.querySelectorAll(".navLinks");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".navLinks[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// Script for slider
var index = 1;
slideShow(index);

function plusSlides(n) {
  slideShow((index += n));
}

function currentSlide(n) {
  slideShow((index = n));
}

function slideShow(n) {
  var a;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    index = 1;
  } else if (n < 1) {
    index = slides.length;
  }
  for (a = 0; a < slides.length; a++) {
    slides[a].style.display = "none";
  }
  for (a = 0; a < dots.length; a++) {
    dots[a].className = dots[a].className.replace(" active", "");
  }
  slides[index - 1].style.display = "block";
  dots[index - 1].className += " active";
}
// end of slider

// Open slide menu
function openSlideMenu() {
  document.getElementById("side-menu").style.width = "100%";
}
// Close slide menu
function closeSlideMenu() {
  document.getElementById("side-menu").style.width = "0";
}

// Up arrow
(function scrollToTop() {
  var goUp = document.getElementById("up-arrow");

  function setGoUpBtnVisibality() {
    if (window.scrollY <= 150) {
      goUp.fadeOut();
    } else {
      goUp.fadeIn();
    }
  }

  window.addEventListener("scroll", setGoUpBtnVisibality);
  goUp.addEventListener("click", function () {
    this.scrollTo(0, 0);
  });
})();

// fade in
function myFadeIn(ele) {
  var elementOpa = Number(getComputedStyle(ele).opacity).toPrecision(2);
  ele.style.opacity = elementOpa;
  if (elementOpa >= 1) {
    return;
  }

  ele.style.opacity = Number(elementOpa) + 1;
  setTimeout(() => {
    myFadeIn(ele);
  }, 10);
}
// fade out
function myFadeOut(ele) {
  var elementOpa = Number(getComputedStyle(ele).opacity).toPrecision(2);

  if (elementOpa <= 0) {
    return;
  }

  ele.style.opacity = Number(elementOpa) - 1;
  setTimeout(() => {
    myFadeOut(ele);
  }, 10);
}

Element.prototype.fadeIn = function () {
  myFadeIn(this);
};
Element.prototype.fadeOut = function () {
  myFadeOut(this);
};
// End of Up arrow

// our portfolio
var all_btn = document.getElementById("all_btn");
var app_btn = document.getElementById("app_btn");
var card_btn = document.getElementById("card_btn");
var web_btn = document.getElementById("web_btn");
var ele = document.getElementsByClassName("single-img");

all_btn.onclick = function () {
  for (a in ele) {
    ele[a].style.display = "grid";
    all_btn.style.backgroundColor = "#3EC1D5";
    all_btn.style.borderColor = "#3EC1D5";
    app_btn.style.backgroundColor = "transparent";
    card_btn.style.backgroundColor = "transparent";
    web_btn.style.backgroundColor = "transparent";
  }
};

app_btn.onclick = function () {
  for (var a in ele) {
    if (ele[a].className == "single-img porapp") {
      ele[a].style.display = "grid";
      app_btn.style.backgroundColor = "#3EC1D5";
      app_btn.style.borderColor = "#3EC1D5";
      all_btn.style.backgroundColor = "transparent";
      card_btn.style.backgroundColor = "transparent";
      web_btn.style.backgroundColor = "transparent";
    } else {
      ele[a].style.display = "none";
    }
  }
};

card_btn.onclick = function () {
  for (a in ele) {
    if (ele[a].className == "single-img procard") {
      ele[a].style.display = "grid";
      card_btn.style.backgroundColor = "#3EC1D5";
      card_btn.style.borderColor = "#3EC1D5";
      all_btn.style.backgroundColor = "transparent";
      app_btn.style.backgroundColor = "transparent";
      web_btn.style.backgroundColor = "transparent";
    } else {
      ele[a].style.display = "none";
    }
  }
};

web_btn.onclick = function () {
  for (a in ele) {
    if (ele[a].className == "single-img proweb") {
      ele[a].style.display = "grid";
      web_btn.style.backgroundColor = "#3EC1D5";
      web_btn.style.borderColor = "#3EC1D5";
      all_btn.style.backgroundColor = "transparent";
      card_btn.style.backgroundColor = "transparent";
      app_btn.style.backgroundColor = "transparent";
    } else {
      ele[a].style.display = "none";
    }
  }
};

// Photo Gallery
let gallery_model = document.getElementById("gallery_model");
let closeBtn = document.getElementById("close");
let model = document.getElementById("img01");

let por_text1 = document.getElementById("por_text1");
let por_img1 = document.getElementById("por_img1");
por_text1.onclick = function () {
  gallery_model.style.display = "block";
  model.src = por_img1.src;
};

let por_text2 = document.getElementById("por_text2");
let por_img2 = document.getElementById("por_img2");
por_text2.onclick = function () {
  gallery_model.style.display = "block";
  model.src = por_img2.src;
};

let por_text3 = document.getElementById("por_text3");
let por_img3 = document.getElementById("por_img3");
por_text3.onclick = function () {
  gallery_model.style.display = "block";
  model.src = por_img3.src;
};

let por_text4 = document.getElementById("por_text4");
let por_img4 = document.getElementById("por_img4");
por_text4.onclick = function () {
  gallery_model.style.display = "block";
  model.src = por_img4.src;
};

let por_text5 = document.getElementById("por_text5");
let por_img5 = document.getElementById("por_img5");
por_text5.onclick = function () {
  gallery_model.style.display = "block";
  model.src = por_img5.src;
};

let por_text6 = document.getElementById("por_text6");
let por_img6 = document.getElementById("por_img6");
por_text6.onclick = function () {
  gallery_model.style.display = "block";
  model.src = por_img6.src;
};

closeBtn.onclick = function () {
  gallery_model.style.display = "none";
};

// Tribute Section
var tir_btn1 = document.getElementById("tri_btn1");
var tir_btn2 = document.getElementById("tri_btn2");
var tir_btn3 = document.getElementById("tri_btn3");
var tir_btn4 = document.getElementById("tri_btn4");
var tir_btn5 = document.getElementById("tri_btn5");
var tri_slider = document.querySelector(".tri_slider");

tir_btn1.onclick = function () {
  this.style.background = "#3EC1D5";
  tir_btn2.style.background = "#ddd";
  tir_btn3.style.background = "#ddd";
  tir_btn4.style.background = "#ddd";
  tir_btn5.style.background = "#ddd";
  tri_slider.style.marginLeft = "0px";
};

tir_btn2.onclick = function () {
  this.style.background = "#3EC1D5";
  tir_btn1.style.background = "#ddd";
  tir_btn3.style.background = "#ddd";
  tir_btn4.style.background = "#ddd";
  tir_btn5.style.background = "#ddd";
  tri_slider.style.marginLeft = "-1130px";
};

tir_btn3.onclick = function () {
  this.style.background = "#3EC1D5";
  tir_btn1.style.background = "#ddd";
  tir_btn2.style.background = "#ddd";
  tir_btn4.style.background = "#ddd";
  tir_btn5.style.background = "#ddd";
  tri_slider.style.marginLeft = "-2240px";
};

tir_btn4.onclick = function () {
  this.style.background = "#3EC1D5";
  tir_btn1.style.background = "#ddd";
  tir_btn2.style.background = "#ddd";
  tir_btn3.style.background = "#ddd";
  tir_btn5.style.background = "#ddd";
  tri_slider.style.marginLeft = "-3360px";
};

tir_btn5.onclick = function () {
  this.style.background = "#3EC1D5";
  tir_btn1.style.background = "#ddd";
  tir_btn2.style.background = "#ddd";
  tir_btn3.style.background = "#ddd";
  tir_btn4.style.background = "#ddd";
  tri_slider.style.marginLeft = "-4485px";
};
