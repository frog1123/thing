import React from 'react';
import { BrowserRouter, Routes, Route } from '../node_modules/react-router-dom';

import { default as Users } from './Users';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/users' element={<Users />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
