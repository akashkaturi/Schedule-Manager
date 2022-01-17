import Sidebar from './components/SideBar';
import RightContent from './components/RightContent';
import Teams from './components/Teams';
import './App.css';
import Empty from './components/Empty';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Sidebar />
				{/* <RightContent /> */}
				<Routes>
					<Route exact path='/empty' element={<Empty />} />
					<Route exact path='/teams' element={<Teams />} />
					<Route exact path='/schedulegenerator' element={<RightContent />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
