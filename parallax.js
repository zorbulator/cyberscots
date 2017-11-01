var scrollAmount = 0.2;
var topOffset = 0;
var top = 0;
for (i=0;i<document.getElementsByClassName("white").length;i++) {
  document.getElementsByClassName("white")[i].style.marginTop = window.innerHeight*(0.3) + "px"; // 30% from top
}
//document.getElementsByClassName('parallax')[1].style.zIndex = "10";
window.onscroll = function() {scroll()};
function scroll(){
  for (i=0;i<document.getElementsByClassName("parallax").length;i++) {
    document.getElementsByClassName("parallax")[i].style.backgroundPosition = "center "+-0.5*window.scrollY+"px"; // move background half of scroll
    //alert(document.getElementsByClassName("parallax")[i].offsetTop);
  }
  for (i=0;i<document.getElementsByClassName("white").length;i++) {
    if (document.getElementsByClassName("white")[i].className.split(' ')[1] == "front") { // second class determines amount of parallaxing
      scrollAmount = 0.3;
    }else if (document.getElementsByClassName("white")[i].className.split(' ')[1] == "farFront") {
      scrollAmount = 0.5;
    }else if (document.getElementsByClassName("white")[i].className.split(' ')[1] == "back") {
      scrollAmount = -0.2;
    }else if (document.getElementsByClassName("white")[i].className.split(' ')[1] == "test") {
      scrollAmount = 1;
    }else {
      scrollAmount = 0.2;
    }
    topOffset = document.getElementsByClassName("white")[i].parentElement.offsetTop; //parent div's offset from top of page
    document.getElementsByClassName("white")[i].style.top = (Math.max(scrollAmount*(window.scrollY - topOffset), -window.innerHeight/2) + (topOffset - window.scrollY)) + "px"; // way too long, only thing that worked
    document.getElementsByClassName("white")[i].style.boxShadow = "-2vh " + ((scrollAmount*(window.scrollY))/5) + "px 10px rgba(0, 0, 0, 0.7)";
    document.getElementsByClassName("white")[i].style.textShadow = "-1vh " + ((scrollAmount*(window.scrollY))/20) + "px 10px rgba(0, 0, 0, 0.2)";
    //alert(document.getElementsByClassName("white")[i].style.boxShadow);
  }
};
scroll();
//setInterval(function(){ alert(document.getElementsByClassName("white")[0].offsetHeight); }, 3000);
