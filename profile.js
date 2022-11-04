const colorButton = document.querySelector('#color')
const placeButton = document.querySelector('#place')
const ritualButton = document.querySelector('#ritual')


function favColor(evt) {
    evt.preventDefault()

    alert('My favorite color is blue')
}

function favPlace(evt) {
    evt.preventDefault()

    alert('My favorite place is the wasatch mountains')
}

function favRitual(evt) {
    evt.preventDefault()

    alert('My favorite ritual is watching TV with my wife after making dinner')
}


colorButton.addEventListener('click', favColor)
placeButton.addEventListener('click', favPlace)
ritualButton.addEventListener('click', favRitual)