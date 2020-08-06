var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
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

if (document.body.getElementsByClassName("about-me-back")[0]) {
  var i = 1;
  window.addEventListener(
    "scroll",
    function () {
      moveBackground();
    },
    false
  );
}

function moveBackground() {
  var speed = 90;
  var back = document.body.getElementsByClassName("about-me-back")[0];
  var str = window.getComputedStyle(back, null).backgroundPosition;
  var res = str.split(" ");
  var one = parseInt(res[0].slice(0, -2));
  var two = parseInt(res[2].slice(0, -2));
  var newPosOne = 10 * (speed / 100) + one;
  var newPosTwo = two - 10 * (speed / 100);
  if (newPosOne > 0 && newPosTwo < 0) {
    newPosOne = 0;
    newPosTwo = 0;
  }
  back.style.backgroundPosition = `${newPosOne}px 0px, ${newPosTwo}px 0px`;
}

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
