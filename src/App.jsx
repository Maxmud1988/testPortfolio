import React from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Works from './components/Works'
import Projects from './components/Projects'
import Contacts from './components/Contacts'





const App = () => {
	return (
		<div>
			<Sidenav />
			<Main />
			<Works />
			<Projects />
			<Contacts />
		</div>
	)
}

export default App