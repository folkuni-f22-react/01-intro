import { useState } from 'react'
import './App.css'

function App() {
	// const tempList = useState(1)
	// const value = tempList[0], setValue = tempList[1]
	const [value, setValue] = useState(1)
	return (
		<div className="App">
			Hello world!

			<ToggleColor />

			<section>
				<h3> React </h3>
				<p> Värdet är: {value}. </p>
				<button onClick={() => { setValue(value + 1) }}> Öka värde </button>
			</section>

			<Parent />
		</div>
	)
}

const ToggleColor = () => {
	const [color, setColor] = useState('light')

	return (
		<section className={color}>
		Färgad komponent
		<button onClick={() => setColor('dark')}> Byt till mörk färg </button>
		</section>
	)
}

// Presentational component: bara presenterar data
const Parent = () => (
	<div> Jag är parent till:
		<Child /> <Child />
	</div>
)
const Child = () => (
	<>
		<p> Jag är ett barn </p>
		<p> Ett busigt barn </p>
	</>
)

let exempel = Parent()
console.log('Parent component:', exempel)

export default App
