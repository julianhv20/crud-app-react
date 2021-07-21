import React, { useState } from 'react';

export const AddUserForm = ({ addUser }) => {
	const initialFormState = { id: null, name: '', username: '' };
	const [user, setUser] = useState(initialFormState);

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setUser({ ...user, [name]: value });

		/* console.log(event.target); */
	};

	const handleOnSubmit = (event) => {
		event.preventDefault();
		if (!user.name || !user.username) return;

		addUser(user);
		setUser(initialFormState);
	};

	return (
		<form onSubmit={handleOnSubmit}>
			<label>Name</label>
			<input
				type="text"
				name="name"
				value={user.name}
				onChange={handleInputChange}
			/>

			<label>Username</label>
			<input
				type="text"
				name="username"
				value={user.username}
				onChange={handleInputChange}
			/>

			<button>Add new user</button>
		</form>
	);
};
