import React, {useState, useEffect} from 'react';
import FunctionContextComponent  from './FunctionContextComponent';
import { ThemeProvider } from './ThemeContext'

export default function Contact() {
	const [count, setCount] = useState(() => 0)
	const [numberDirection, setNumberDirection] = useState(() => "N/A")

	const[resourceType, setResourceType] = useState('pikachu')
	const [items, setItems] = useState([])

	function decrementCount() {
		setCount(prevCount => prevCount-1)
		setNumberDirection(prevNumberDirection => "Decreased:")
		console.log("Decreased:")
	}

	function incrementCount() {
		setCount(prevCount => prevCount+1)
		setNumberDirection(prevNumberDirection => "Increased:")
		console.log("Increased:")
	}

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${resourceType}`)
		.then(response => response.json())
		//.then(json => console.log(json))
		.then(json => setItems(json.abilities))
	},[resourceType])

	return (
		<>
		<h1 class="mt-12 mb-4 text-4xl text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Contact</h1>
		<h2 class="mt-12 mb-8 text-3xl text-center leading-none tracking-tight text-gray-900 md:text-4xl lg:text-3xl dark:text-white">USE STATE HOOK</h2>
		<p class="mt-12 mb-4 text-4xl text-center leading-none">Using useState - passes current value to setter hooks</p>
		<div class="flex justify-center">
			<button onClick={decrementCount} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">-</button>
			<span class="ml-4 mr-2 text-4xl">{numberDirection}</span>
			<span class="mr-4 text-4xl">{count}</span>
			<button onClick={incrementCount} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
		</div>
		<h2 class="mt-12 mb-8 text-3xl text-center leading-none tracking-tight text-gray-900 md:text-4xl lg:text-3xl dark:text-white">USE EFFECT HOOK</h2>
		<p class="mt-12 mb-4 text-4xl text-center leading-none">Using useEffect - calls hook whenever a value changes</p>
		<div class="flex justify-center">
			<button onClick={() => setResourceType('pikachu')} class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded">Pikachu</button>
			<button onClick={() => setResourceType('bulbasaur')} class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded">Bulbasaur</button>
			<button onClick={() => setResourceType('charmander')} class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">Charmander</button>
		</div>
		<h2 class="mt-12 mb-4 text-2xl text-center">{resourceType}</h2>
		<div class="mx-auto w-4/5">
			{items.map(item => {
			return <pre class="flex justify-center">{JSON.stringify(item)}</pre>
			})}
		</div>
		<div class="mx-auto w-4/5">
			<ThemeProvider>
				<FunctionContextComponent />
			</ThemeProvider>
		</div>
		</>
	)
}