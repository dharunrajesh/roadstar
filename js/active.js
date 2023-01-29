

  //attempt number 3 

//declare variables for current slide, images, dots element and caption text shown
var slideIndex,slides,dots,captionText;
function initGallery(){
    slideIndex = 0;
    //The slides variable will hold the current imageHolder div
    slides=document.getElementsByClassName("imageHolder");
    //This accesss the first slide and displays teh image
    slides[slideIndex].style.opacity=1;

    //retrieve caption text and place in a variable
    captionText=document.querySelector(".captionTextHolder .captionText");
    //retrieve caption text and place in the caption
    captionText.innerText=slides[slideIndex].querySelector(".captionText").innerText;

    //disable nextPrevBtn if slide count is one
    if(slides.length<2){
        var nextPrevBtns=document.querySelector(".leftArrow,.rightArrow");
        nextPrevBtns.style.display="none";
        for (i = 0; i < nextPrevBtn.length; i++) {
            nextPrevBtn[i].style.display="none";
        }
    }

    //add dots
    dots=[];
    var dotsContainer=document.getElementById("dotsContainer"),i;
    for (i = 0; i < slides.length; i++) {
        var dot=document.createElement("span");
        dot.classList.add("dots");
        dotsContainer.append(dot);
        //move depending on what dot is pressed
        dot.setAttribute("onclick","moveSlide("+i+")");
        dots.push(dot);
    }

    //displays the current active dot on the slideshow
    dots[slideIndex].classList.add("active");
}
initGallery();
function plusSlides(n) {
    moveSlide(slideIndex+n);
}

//function to move slide, n is slide index
function moveSlide(n){
    var i;
    var current,next;
    //stores css class for current and next slides
    var moveSlideAnimClass={
          forCurrent:"",
          forNext:""
    };
    var slideTextAnimClass;

    //if current index is greater than slideindex = right button, if less, left button
    if(n>slideIndex) {
      //if n is greater the slides will loop
        if(n >= slides.length){n=0;}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
        slideTextAnimClass="slideTextFromTop";
    }else if(n<slideIndex){
        if(n<0){n=slides.length-1;}
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightPrevSlide";
        slideTextAnimClass="slideTextFromBottom";
    }

    //no action performed when n is not equal to slide index, only executed when arrows pressed
    if(n!=slideIndex){
        next = slides[n];
        current=slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "imageHolder";
            slides[i].style.opacity=0;
            dots[i].classList.remove("active");
        }

        //add properties depending on button pressed
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        dots[n].classList.add("active");
        slideIndex=n;
        captionText.style.display="none";
        captionText.className="captionText "+slideTextAnimClass;
        captionText.innerText=slides[n].querySelector(".captionText").innerText;
        captionText.style.display="block";
    }

}

//changes every 3 seconds
var timer=null;
function setTimer(){
    timer=setInterval(function () {
        plusSlides(1) ;
    },3000);
}
setTimer();



//This is for the nav bar, onlick will interact with the menu
function showMenu() {
    var b = document.getElementById("bar");
    var t = document.getElementById("times");
    var m = document.getElementById("mob-menu");
    b.style.display = "none";
    t.style.display = "block";
    m.style.display = "block";
  }
  
  function closeMenu() {
    var b = document.getElementById("bar");
    var t = document.getElementById("times");
    var m = document.getElementById("mob-menu");
    b.style.display = "block";
    t.style.display = "none";
    m.style.display = "none";
  }

// Testomonial 



//Contact form

function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    //If the fields pass the codnitional statement the form is validated. Otherwise an error message is placed in div
    var text;
    if(name.length < 2){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 5){
      text = "The subject must be more than 5 characters";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length < 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 20){
      text = "Please Enter More Than 20 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }

