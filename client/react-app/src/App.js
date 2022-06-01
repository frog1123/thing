import { User } from './components/Users/User';
import { Users } from './components/Users/Users';
import { AddUser } from './components/AddUser/AddUser';

function App() {
	return (
		<div>
			<h1 className='header-txt'>Hello, world</h1>
			<AddUser />
			<Users />
		</div>
	);
}

export default App;
