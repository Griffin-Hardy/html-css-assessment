console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Submitted successfully!");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function kittenMouse(event) {
	event.preventDefault()

	alert("kitten says you're funny")
}

let kitten = document.querySelector('img')

kitten.addEventListener('mouseover', kittenMouse)