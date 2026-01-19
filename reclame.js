var hidden = new Boolean(true);

function reclame() {
    if (hidden == true) {
        document.getElementsByClassName("self-promotion_shown")[0].style.display = "initial";
        document.getElementsByClassName("self-promotion_hidden")[0].style.display = "none";
        document.getElementById("website-pum").style.display = "initial"
        hidden = false
    }
    else {
        document.getElementsByClassName("self-promotion_shown")[0].style.display = "none";
        document.getElementsByClassName("self-promotion_hidden")[0].style.display= "initial";
        document.getElementById("website-pum").style.display = "none"
        hidden = true
    }
}
