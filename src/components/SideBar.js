import './sidebar.css';
import dashboard from './icons/dashboard.png';
import tacticsVault from './icons/tacticsVault.png';
import teams from './icons/teams.png';
import schedulegenerator from './icons/schedulegenerator.png';
import weeklytrainingplans from './icons/weeklytrainingplans.png';
import teammetrics from './icons/teammetrics.png';
import customizations from './icons/customizations.png';
import triangle from './icons/triangle.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div>
			<div className='rectangle'>
				<div className='top-content'>
					<h1>Logo</h1>

					<ul className='content'>
						<li>
							<Link to='/empty'>
								<img src={dashboard} alt='' className='icon' />
								Dash Board
							</Link>
						</li>
						<li>
							<Link to='/empty'>
								<img src={tacticsVault} alt='' className='icon' />
								Tactics Vault
							</Link>
						</li>
						<li>
							<Link to='/empty'>
								<img src={teams} alt='' className='icon' />
								Teams
							</Link>
						</li>
						<li>
							<Link to='/schedulegenerator'>
								<img src={schedulegenerator} alt='' className='icon' />
								Schedule Generator
							</Link>
						</li>
						<li>
							<Link to='/empty'>
								<img src={weeklytrainingplans} alt='' className='icon' />
								Weekly Training Plans
							</Link>
						</li>
						<li>
							<Link to='/empty'>
								<img src={teammetrics} alt='' className='icon' />
								Team Metrics
							</Link>
						</li>
						<li>
							<Link to='/empty'>
								<img src={customizations} alt='' className='icon' />
								Customizations
							</Link>
						</li>
					</ul>
				</div>
				<div className='bottom-content'>
					<p>Select Your Team</p>
					<a href='http://google.com'>
						Team Name <img className='triangle' src={triangle} alt='' />
					</a>
				</div>
			</div>
		</div>
	);
};
export default Sidebar;
