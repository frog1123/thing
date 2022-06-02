import React from 'react';

import { Users } from './components/Users/Users';
import { AddUser } from './components/AddUser/AddUser';

function UsersPage() {
	return (
		<div>
			<h1 className='header-txt'>Users</h1>
			<AddUser />
			<Users />
		</div>
	);
}

export default UsersPage;
