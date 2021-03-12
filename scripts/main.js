console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})


navElement.addEventListener("click", (event) => {
	if (event.target.id === "showGreen") {
		filterLegos("Green")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

navElement.addEventListener("change", (event => {
	if(event.target.id === "material-selector") {
		const material = event.target.value;
		filterLegoMaterial(material)
	}

}))

const legoIdElement = document.querySelector("#legoIdElement")
legoIdElement.addEventListener("keyup", event => {
    if (event.key === 'Enter') {
        const legoIdValue = (event.target.value)
        // console.log("user wants to see", legoIdValue)
        filterLegoIdValue(legoIdValue);
    } 
})
const filterLegoIdValue = (whatFilter) => {
    const filterArray = useLegos().filter(singleLego => {
        if (singleLego.LegoId === (whatFilter)) {
            return singleLego;
        } 
    })
    if (filterArray.length === 0) {
        document.getElementById("all-legos").innerHTML = "<h3>We couldn't find your lego :(</h3>"
    } else {
        makeLegoList(filterArray);
    }
}


const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

const filterLegoMaterial = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.Material.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}


const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	})

}

startEIA();