// When the user clicks on the button, open the modal 
function openSettings() {
    document.getElementById('settingsModal').style.display = "block";
}

function closeSettings() {
    document.getElementById('settingsModal').style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById('settingsModal')) {
        document.getElementById('settingsModal').style.display = "none";
    }
}

function checkChange() {
    localStorage.setItem("textShadows", document.getElementById('tSSlider').checked);
    localStorage.setItem("shadows", document.getElementById('sSlider').checked);
    localStorage.setItem("movement", document.getElementById('mSlider').checked);
    scroll();
}

function load() {
    if (localStorage.getItem("textShadows") === null) {
        localStorage.setItem("textShadows", 'true');
    }
    if (localStorage.getItem("shadows") === null) {
        localStorage.setItem("shadows", 'true');
    }
    if (localStorage.getItem("movement") === null) {
        localStorage.setItem("movement", 'true');
    }
    document.getElementById('tSSlider').checked = localStorage.getItem("textShadows") == 'true';
    document.getElementById('sSlider').checked = localStorage.getItem("shadows") == 'true';
    document.getElementById('mSlider').checked = localStorage.getItem("movement") == 'true';
    checkChange();
    scroll();
}
window.onload = function() {
    setTimeout(function(){
        load();
        document.getElementById("loader").style.display = "none";
        document.getElementById("contentDiv").style.display = "block";
        scroll();
        showSlides(slideIndex);
     }, 100);
}