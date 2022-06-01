import { useState, useEffect } from 'react';
import './Users.css';

export const User = props => {
	const [data, setData] = useState({ user: null, loading: true });

	useEffect(() => {
		async function fetchData() {
			const url = `http://localhost:3001/users/${props.userId}`;
			const response = await fetch(url);
			const data = await response.json();

			setData({ user: data[0], loading: false });

			console.log(data);
		}

		fetchData();
	}, []);

	return (
		<div className='user-container'>
			{data.loading ? (
				<h1>loading...</h1>
			) : (
				<div>
					<h1>Username: {data.user.username}</h1>
					<h1>ID: {data.user._id}</h1>
				</div>
			)}
		</div>
	);
};

// http://localhost:3001/users/6296d52e2d5baf01eb2364a4
