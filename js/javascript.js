

// Script for slider
var index = 1;
slideShow(index);

function plusSlides(n) {
    slideShow(index += n);
}

function currentSlide(n) {
    slideShow(index = n);
}

function slideShow(n) {
    var a;
    var slides = document.getElementsByClassName('slides');
    var dots = document.getElementsByClassName('dot');
    if(n > slides.length) {
        index = 1;
    }else if (n < 1) {
        index = slides.length;
    }
    for(a=0; a < slides.length; a++) {
        slides[a].style.display = "none";
    }
    for(a = 0; a < dots.length; a++) {
        dots[a].className = dots[a].className.replace(" active", "");
    }
    slides[index - 1].style.display = "block";
    dots[index - 1].className += " active";
}
// end of slider

// Open slide menu
function openSlideMenu() {
    document.getElementById('side-menu').style.width = '100%';
}
// Close slide menu
function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
}

// Up arrow
(function scrollToTop() {
    var goUp = document.getElementById('up-arrow');

    function setGoUpBtnVisibality() {
        if(window.scrollY <= 150){
            goUp.fadeOut();
        }else {
            goUp.fadeIn();
        }
    }

    window.addEventListener('scroll', setGoUpBtnVisibality);
    goUp.addEventListener('click', function(){
        this.scrollTo(0, 0);
    });
}());

// fade in
function myFadeIn(ele) {
    var elementOpa = Number(getComputedStyle(ele).opacity).toPrecision(2);
    ele.style.opacity = elementOpa;
    if(elementOpa >= 1) {
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

    if(elementOpa <= 0){
        return;
    }

    ele.style.opacity = Number(elementOpa) - 1;
    setTimeout(() => {
        myFadeOut(ele);
    }, 10);
}

Element.prototype.fadeIn = function() {
    myFadeIn(this);
}
Element.prototype.fadeOut = function() {
    myFadeOut(this);
}
// End of Up arrow