import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

export default function FunctionContextComponent() {
	const darkTheme = useTheme()
	const toggleTheme = useThemeUpdate()
	const themeStyles = {
		backgroundColor: darkTheme ? '#333' : '#CCC',
		color: darkTheme ? '#CCC' : '#333',
		padding: '2rem',
		margin: '2rem'
	}
	return (
		<>
			<h2 class="mt-12 mb-8 text-3xl text-center leading-none tracking-tight text-gray-900 md:text-4xl lg:text-3xl dark:text-white">USE CONTEXT HOOK</h2>
			<p class="mt-12 mb-4 text-4xl text-center leading-none">Using useContext - lets you access or consume value from the context provider</p>
			<div class="flex justify-center mt-8">	
				<button onClick={toggleTheme} class="bg-black text-white rounded px-4 py-2">
				<span class="text-1xl">Toggle Theme &#127769;</span></button>
			</div>
			<div style={themeStyles}>Function Theme</div>
			<p mt-12 mb-4 text-2xl text-center leading-none>
			The main difference between useState and useContext is that useState is used for component-level state management, while useContext is used for sharing data between components that are not directly related in the component hierarchy.
			In other words, useState is used to manage the state of a single component, while useContext is used to share data between multiple components that are not directly related, such as siblings or distant ancestors/descendants.
			</p>
		</>
	)
}