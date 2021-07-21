import React, { useState } from 'react';
import { UserTable } from './components/Table/UserTable';
import { AddUserForm } from './components/AddUserTable/AddUserForm';
import { EditUserForm } from './components/EditUserForm/EditUserForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const usersData = [
		{ id: uuidv4(), name: 'Jhon', username: 'floppydiskette' },
		{ id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
		{ id: uuidv4(), name: 'Ana', username: 'Anisphere' },
	];

	const initialFormState = { id: null, name: '', username: '' };

	const [users, setUsers] = useState(usersData);
	const [editing, setEditing] = useState(false);
	const [currentUser, setCurrentUser] = useState(initialFormState);

	//Agregar usuarios
	const addUser = (user) => {
		user.id = uuidv4();
		setUsers([...users, user]);
	};

	//Eliminar usuarios
	const deleteUser = (id) => {
		setEditing(false);
		setUsers(users.filter((user) => user.id !== id));
	};

	//Editar usuarios
	const editRow = (user) => {
		setEditing(true);

		setCurrentUser({ id: user.id, name: user.name, username: user.username });
	};

	const updateUser = (id, updatedUser) => {
		setEditing(false);

		setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
	};

	return (
		<div className="container">
			<h1>CRUD App with Hooks</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<div>
							<h2>Edit user</h2>
							<EditUserForm
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</div>
					) : (
						<div>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</div>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	);
}

export default App;
