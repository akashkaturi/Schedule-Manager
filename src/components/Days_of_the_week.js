import './days_of_the_week.css';
import { useState } from 'react';
const DaysOfTheWeek = () => {
	const items = [
		{
			id: 0,
			day: 'Sunday',
		},
		{
			id: 1,
			day: 'Monday',
		},
		{
			id: 2,
			day: 'Tuesday',
		},
		{
			id: 3,
			day: 'Wednesday',
		},
		{
			id: 4,
			day: 'Thursday',
		},
		{
			id: 5,
			day: 'Friday',
		},
		{
			id: 6,
			day: 'Saturday',
		},
	];
	const [style, setstyle] = useState('circle');
	const changeStyle = () => {
		// e.preventDefault();
		// const ele=items.find((item)=>item.id===id)
		setstyle('circle2');
	};
	const [border, setborder] = useState('structure');
	const changeBorder = () => {
		setborder('structure2');
	};

	return (
		<div className='days'>
			{items.map((item) => {
				return (
					<div key={item.id} className={border}>
						<div className={style}></div>
						<div
							onClick={() => {
								changeStyle();
								changeBorder();
							}}
						>
							{item.day}
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default DaysOfTheWeek;
