var slideIndex = 1;
document.getElementsByClassName("about-me-back")[0].style.height = `${document.getElementById("about-me").clientHeight}px`;
// console.log(document.body.clientWidth);
window.onscroll = function () {scrollFunction()};
window.onresize = function () {document.getElementsByClassName("about-me-back")[0].style.height = `${document.getElementById("about-me").clientHeight}px`};

function scrollFunction() {
  var h = document.documentElement.scrollTop - document.getElementById("about-me").offsetTop; 
  if(h >= -300 && h<= 0){
    var dis = ((300-Math.abs(h)) / 300) * 70;
    if (document.body.clientWidth > 1024) {
      dis = ((300-Math.abs(h)) / 300) * 100;
    }
    var angle = ((300-Math.abs(h)) / 300) * 120;
    document.getElementsByClassName("cube")[0].style.transform = `translateZ(-100px) translateX(${dis}%) rotateX(${angle}deg) rotateY(${angle}deg) rotateZ(${angle}deg)`;
    document.getElementsByClassName("cube2")[0].style.transform = `translateZ(-100px) translateX(-${dis}%) rotateX(-${angle}deg) rotateY(-${angle}deg) rotateZ(-${angle}deg)`;
  }
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    for(var i = 0; i < 5; i++) {
      document.getElementsByClassName("nav-item")[i].style.padding = "1.4em 1em";
    }
    if(document.documentElement.clientWidth > 768){ 
      document.getElementsByClassName("logo")[0].style.height = "30px";
      document.getElementsByClassName("logo")[0].style.width = "28px";
    } else {
      document.getElementsByClassName("logo")[1].style.height = "30px";
      document.getElementsByClassName("logo")[1].style.width = "28px";
    }
    document.getElementById("navbar").style.backgroundColor = "#00ffda";
    document.getElementById("navbar").style.boxShadow = "0 8px 6px -8px black";
    document.getElementById("navbar").style.borderBottom = "solid 3px #be00cc";
  } else {
    for(var i = 0; i < 5; i++) {
      document.getElementsByClassName("nav-item")[i].style.padding = "2.8em 1em";
    }
    if(document.documentElement.clientWidth > 1440){ 
      document.getElementsByClassName("logo")[0].style.height = "80px";
      document.getElementsByClassName("logo")[0].style.width = "78px";
    } else if (document.documentElement.clientWidth > 768 && document.documentElement.clientWidth < 1441) {
      document.getElementsByClassName("logo")[0].style.height = "70px";
      document.getElementsByClassName("logo")[0].style.width = "68px";
    } else {
      document.getElementsByClassName("logo")[1].style.height = "70px";
      document.getElementsByClassName("logo")[1].style.width = "68px";
    }
    document.getElementById("navbar").style.backgroundColor = "";
    document.getElementById("navbar").style.boxShadow = "";
    document.getElementById("navbar").style.borderBottom = "";
  }
}

function plusDivs1(n) {
  showDivs1((slideIndex += n));
}

function plusDivs2(n) {
  showDivs2((slideIndex += n));
}

function showDivs1(n) {
  var i;
  var x = document.getElementsByClassName("slides-1");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

showDivs1(slideIndex);

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("slides-2");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

showDivs2(slideIndex);

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
