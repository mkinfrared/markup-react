import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MainView from '../MainView/MainView';

function Content(props) {
	return (
		<div className='content'>
			<Sidebar/>
			<MainView/>
		</div>
	);
}

export default Content;