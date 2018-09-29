import React, {Component} from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<hr/>
				<Content/>
				<hr/>
				<Footer/>
			</div>
		);
	}
}

export default App;
