import React, { Component } from 'react'
import './App.css'
import ClassCounterOne from './components/ClassCounterOne'
import HookCounterOne from './components/HookCounterOne'
import ClassMouse from './components/ClassMouse'
import HookMouse from './components/HookMouse'
import HookMouse1 from './components/HookMouse1'
import MouseContainer from './components/MouseContainer'
import IntervalClassCounter from './components/IntervalClassCounter'
import IntervalHookCounter from './components/IntervalHookCounter'
import DataFetching from './components/DataFetching'

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <ClassCounterOne /> */}
				{/* <HookCounterOne /> */}
				{/* <ClassMouse></ClassMouse> */}
				{/* <HookMouse></HookMouse> */}
				<MouseContainer />
				{/* <IntervalClassCounter></IntervalClassCounter> */}
				{/* <IntervalHookCounter></IntervalHookCounter> */}
				{/* <DataFetching /> */}
				{/* <HookMouse1/> */}
			</div>
		)
	}
}

export default App
