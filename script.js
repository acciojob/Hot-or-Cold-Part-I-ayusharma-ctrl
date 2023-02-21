//your code here
var input = document.getElementById('guess')
var respond = document.getElementById('respond')
var btn = document.getElementById('btn')
var num = document.getElementById('num')

function showRandom(){
	const randomNum = getRandom(-20, 20);
	num.textContent = randomNum
	if(input.value===randomNum){
		respond.textContent = "Hot"
	}
	else{
		respond.textContent = "Cold"
	}
	input.value = ""
}

btn.addEventListener('click',showRandom)

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
