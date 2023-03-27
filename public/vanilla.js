const button = document.querySelector('#increaseButton')
const para = document.querySelector('#resultPara')

let state = {
	value: 1
}

button.addEventListener('click', () => {
	state.value = state.value + 1
	para.innerText = `Värdet är: ${state.value}.`
})