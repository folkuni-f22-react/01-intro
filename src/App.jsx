import { useState } from 'react'
import './App.css'

function App() {
	// const tempList = useState(1)
	// const value = tempList[0], setValue = tempList[1]
	const [value, setValue] = useState(1)
	return (
		<div className="App">
			Hello world!

			<section>
				<h3> React </h3>
				<p> Värdet är: {value}. </p>
				<button onClick={() => { setValue(value + 1) }}> Öka värde </button>
			</section>

		</div>
	)
}

export default App
