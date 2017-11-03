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
    scroll();
}