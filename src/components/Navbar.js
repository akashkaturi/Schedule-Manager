import './navbar.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
	return (
		<div className='main'>
			<div className='navbar'>
				<NavLink to='/teams' >
					Teams
				</NavLink>
				<NavLink to='/empty'>
					U18
				</NavLink>
				<NavLink to='/empty' >
					U19
				</NavLink>
			</div>
			<div className='user'></div>
		</div>
	);
};
export default Navbar;
