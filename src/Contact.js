import React, {useState} from 'react';

export default function Contact() {
	function buttonClick() {
		console.log("Hello")
		return 0
	}

	const [count, setCount] = useState(() => 0)
	const [numberDirection, setNumberDirection] = useState(() => "N/A")

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

	return (
		<>
		<h1 class="mt-12 mb-4 text-4xl text-center  leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Contact</h1>
		<h2 class="mt-12 mb-8 text-3xl text-center leading-none tracking-tight text-gray-900 md:text-4xl lg:text-3xl dark:text-white">USE STATE HOOK</h2>
		<div class="flex justify-center">
			<button onClick={decrementCount} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">-</button>
			<span class="ml-4 mr-2 text-4xl">{numberDirection}</span>
			<span class="mr-4 text-4xl">{count}</span>
			<button onClick={incrementCount} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
		</div>
		</>
	)
}