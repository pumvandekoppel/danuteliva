const hrImpersonator = document.getElementsByClassName('hr-impersonator')

// bereken hoe breed de pagina is
var widthDiv = hrImpersonator[0].offsetWidth;
console.log("widthDiv:" + widthDiv)

// bereken hoe breed een letter is
var letterWidth = parseFloat(getComputedStyle(hrImpersonator[0]).fontSize) * 27.22 / 56
var letterRatio = parseFloat(getComputedStyle(hrImpersonator[0]).fontSize) / 56

// trek de breedte van twee versiersels hiervanaf en het streepje wat er al staat
var availableSpace = widthDiv - (2 * 43.85  + 27.22) * letterRatio
console.log("availableSpace:" + availableSpace)

// (zorg dat de breedte van de pagina deelbaar is door de letter
// en) bereken hoeveel letters daar in passen
var letterFill = Math.trunc((availableSpace - (availableSpace % letterWidth)) / letterWidth)
console.log("letterFill:" + letterFill)

const pageBreaks = document.getElementsByClassName("hr-impersonator")

function fillHr() {
	console.log("hoi")
	// loop door de pageBreaks 
	for (let i = 0; i < pageBreaks.length; i++) {
		// en voeg de 'hr' in, een aantal keer
		var currentBreak = pageBreaks[i]
		for (let j = 0; j < letterFill; j++) {	
			currentBreak.insertAdjacentText("afterbegin", "􏿢")
		}
		currentBreak.insertAdjacentText("afterbegin", "􏿡")
		currentBreak.insertAdjacentText("beforeend", "􏿣")
		// // en voeg eventueel margins toe
		// const eventualPadding = (availableSpace % letterWidth) / 2
		// // rare irrationele berekening
		// currentBreak.style.paddingLeft = eventualPadding / 38 + "vw"
	}
}

fillHr()

// check of pagina breedte verandert
// zoja voer functie uit
window.addEventListener("resize", function(event) {
	"use strict";
	   window.location.reload();
	fillHr()
})
