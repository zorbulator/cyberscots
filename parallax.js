var scrollAmount = 0.2;
var topOffset = 0;
for (i=0;i<document.getElementsByClassName("white").length;i++) {
  document.getElementsByClassName("white")[i].style.marginTop = window.innerHeight*(0.3) + "px"; // 30% from top
}
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
      scrollAmount = -0.2
    }else {
      scrollAmount = 0.2;
    }
    topOffset = document.getElementsByClassName("white")[i].parentElement.offsetTop; //parent div's offset from top of page
    document.getElementsByClassName("white")[i].style.marginTop = scrollAmount*window.scrollY + window.innerHeight*(0.3) - topOffset*0.3 + "px";
    document.getElementsByClassName("white")[i].style.boxShadow = "-2vh " + ((scrollAmount*(window.scrollY))/5) + "px 10px rgba(0, 0, 0, 0.7)";
    document.getElementsByClassName("white")[i].style.textShadow = "-1vh " + ((scrollAmount*(window.scrollY))/15) + "px 5px rgba(0, 0, 0, 0.3)";
    //alert(document.getElementsByClassName("white")[i].style.boxShadow);
  }
};
scroll();
//setInterval(function(){ alert("-1vh " + (((scrollAmount*window.scrollY)/15) - topOffset*0.3) + "px 5px rgba(0, 0, 0, 0.3)"); }, 3000);