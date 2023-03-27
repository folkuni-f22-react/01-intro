import { useState } from 'react'
import './App.css'


const FooBar = () => {
	// State - måste vara överst
	const [x, setX] = useState(1)

	// Man kan förbereda funktioner att använda i JSX
	const decrease = () => setX(x - 1)
	
	let text = x
	if( x % 3 === 0 && x % 5 === 0 ) {
		text = 'foobar'
	} else if( x % 3 === 0 ) {
		text = 'foo'
	} else if( x % 5 === 0 ) {
		text = 'bar'
	}

	return (
		<section>
			<button onClick={() => setX(x + 1)}> +1 </button>
			<button onClick={decrease}> -1 </button>
			<p> {text} </p>
		</section>
	)
}

function App() {
	// const tempList = useState(1)
	// const value = tempList[0], setValue = tempList[1]
	const [value, setValue] = useState(1)
	return (
		<div className="App">
			Hello world!

			<ToggleColor />

			<FooBar />

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

	const toggleColor = () => {
		setColor(color === 'light' ? 'dark' : 'light');
		// if( color === 'light' ) {
		// 	setColor('dark')
		// } else {
		// 	setColor('light')
		// }
	};
	let buttonText = color === 'light' ? 'Byt till mörk' : 'Byt till ljus'

	return (
		<section className={color}>
		Färgad komponent
		<button onClick={() => setColor('dark')}> Byt till mörk färg </button>
		<button onClick={() => setColor('light')}> Byt till ljus färg </button>
		<button onClick={toggleColor}> {buttonText} </button>
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

// let exempel = Parent()
// console.log('Parent component:', exempel)

export default App
