import './teams.css';
import Navbar from './Navbar';
import { useState } from 'react';
import FinalSchedule from './FinalSchedule';
import Alert from './Alert';

const Teams = () => {
	const [list, setlist] = useState({
		sname: '',
		startDate: new Date(),
		endDate: new Date(),
		noOfWeeks: '',
	});
	const [dict, setDict] = useState([]);
	const onChange = (e) => {
		e.preventDefault();
		const value = e.target.value;
		const name = e.target.name;
		setlist((previousData) => {
			return {
				...previousData,
				[name]: value,
			};
		});
	};
	const onSubmit = (e) => {
		e.preventDefault();

		const newItem = {
			id: new Date().getTime().toString(),
			sname: list.sname,
			startDate: list.startDate,
			endDate: list.endDate,
			noOfWeeks: list.noOfWeeks,
		};
		setDict([...dict, newItem]);
		console.log(dict);
		setlist({ sname: '', startDate: new Date(), endDate: new Date(), noOfWeeks: '' });
	};

	const removeitem = (id) => {
		setDict(dict.filter((item) => item.id !== id));
	};

	return (
		<div className='main'>
			<Navbar />
			<div className='complete-form'>
				<h2>Create New Schedule</h2>
				<form className='schedule-form' onSubmit={onSubmit}>
					<div className='schedule-name'>
						<h3>Schedule Name</h3>
						<input
							type='text'
							onChange={onChange}
							value={list.sname}
							name='sname'
							placeholder='Enter Schedule Name'
						/>
					</div>
					<div className='middle-content'>
						Start Date:
						<input
							type='date'
							onChange={onChange}
							value={list.startDate}
							name='startDate'
							format='dd/mm/yyyy'
						/>
						End Date:{' '}
						<input
							type='date'
							onChange={onChange}
							value={list.endDate}
							name='endDate'
							format='dd/mm/yyyy'
						/>
						No of Weeks:{' '}
						<input
							type='text'
							onChange={onChange}
							value={list.noOfWeeks}
							name='noOfWeeks'
						/>
					</div>

					<button type='submit' className='create'>
						Create
					</button>
				</form>
				{dict.length > 0 && (
					<div className='schedule'>
						<FinalSchedule items={dict} removeitem={removeitem}></FinalSchedule>
					</div>
				)}
			</div>
		</div>
	);
};
export default Teams;
