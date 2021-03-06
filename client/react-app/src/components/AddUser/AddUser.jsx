import React from 'react';
import './AddUser.css';

export const AddUser = () => {
	const addUser = async () => {
		const res = await fetch(`http://localhost:3001/users/`, {
			method: 'POST',
			body: JSON.stringify({ username: document.getElementById('new-user-input').value }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return res.json();
	};
	return (
		<div className='add-user-container'>
			<input id='new-user-input' placeholder='username'></input>
			<button onClick={addUser}>
				<h2>ADD</h2>
			</button>
		</div>
	);
};
