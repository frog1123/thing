import React from 'react';
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
		}
		fetchData();
	}, []);

	return (
		<div className='user-container'>
			{data.loading ? (
				<h1>loading...</h1>
			) : (
				<div>
					<h2>Username: {data.user.username}</h2>
					<h3>ID: {data.user._id}</h3>
					<h3>Account created: {data.user.createdAt}</h3>
					<h3>Last updated: {data.user.updatedAt}</h3>
				</div>
			)}
		</div>
	);
};

// http://localhost:3001/users/6296d52e2d5baf01eb2364a4
