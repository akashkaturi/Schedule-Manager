import './finalschedule.css';
import DaysOfTheWeek from './Days_of_the_week';
import { FaEdit, FaTrash, FaArrowDown } from 'react-icons/fa';
const FinalSchedule = (props) => {
	return (
		<div>
			{props.items.map(({ id, sname, startDate, endDate, noOfWeeks }) => {
				const date1 = new Date(startDate);
				const date2 = new Date(endDate);
				const diffTime = Math.abs(date2 - date1);
				const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
				const weeks = Math.floor(diffDays / 7);
				return (
					<div key={id} className='schedule'>
						<div className='top'>
							<div className='title'>
								<h3>{sname}</h3>
								<p className='duration'>{weeks} weeks | 12 sessions</p>
							</div>
							<div className='top-right'>
								<button className='edit-btn'>
									{' '}
									<FaEdit />
								</button>
								<button onClick={() => props.removeitem(id)}>
									<FaTrash />
								</button>
								<button>
									<FaArrowDown />
								</button>
							</div>
						</div>
						<div className='middle'>
							<div className='dates'>
								<div className='startdate'>
									<p className='datetitle'>START DATE</p>
									<p className='dateValue'>{startDate}</p>
								</div>
								<div className='enddate'>
									<p className='datetitle'>END DATE</p>
									<p className='dateValue'>{endDate}</p>
								</div>
							</div>
							<div className='button'>
								<button>Update</button>
							</div>
						</div>
						<div className='bottom'>
							<DaysOfTheWeek />
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default FinalSchedule;
