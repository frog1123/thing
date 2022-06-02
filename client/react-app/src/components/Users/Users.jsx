import React from 'react';
import { useEffect, useState } from 'react';
import { User } from './User';

export const Users = () => {
	const [data, setData] = useState({ users: null, loading: true });

	useEffect(() => {
		async function fetchData() {
			const url = `http://localhost:3001/users`;
			const response = await fetch(url);
			const data = await response.json();

			setData({ users: data, loading: false });
		}
		fetchData();
	}, []);

	return (
		<div className='users-container'>
			{data.loading ? (
				<h1>loading...</h1>
			) : (
				<div className='users-container-loaded'>
					{data.users.map((value, index) => (
						<User userId={data.users[index]._id} key={index} /> // gets lowest id
					))}
				</div>
			)}
		</div>
	);
};
