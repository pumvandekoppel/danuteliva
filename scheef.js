const theThumbnails = document.getElementsByTagName("img")

function randomRotation(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function scheef() {
    for (let myName of theThumbnails) {
        const randomDegree = randomRotation(-4.49, 4.34)
        myName.style.transform = "rotate(" + randomDegree + "deg)";
    }
}

scheef()
