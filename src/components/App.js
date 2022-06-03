import React from 'react';
// import { uuid } from 'uuidv4';
import { v4 as uuid } from 'uuid';
import { useState, useEffect } from 'react';

import './App.css';
import Header from './header';
import ContactList from './contactlist';
import AddContact from './addContact';

function App() {
	// const contacts = [
	// 	{
	// 		id: 1,
	// 		name: 'faizan',
	// 		email: 'faizan@gmail.com'
	// 	},
	// 	{
	// 		id: 1,
	// 		name: 'baba',
	// 		email: 'baba@gmail.com'
	// 	}
	// ];
	const LOCAL_STORAGE_KEY = 'contacts';
	const [ contacts, setContacts ] = useState([]);

	const addContactHandler = (contact) => {
		console.log(contact);
		setContacts([ ...contacts, { id: uuid(), ...contact } ]);
	};

	const removeContactHandler = (id) => {
		const newList = contacts.filter((contact) => {
			return contact.id !== id;
		});
		setContacts(newList);
	};

	useEffect(() => {
		const retrieveData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		console.log(retrieveData);
		setContacts(retrieveData);
	}, []);

	useEffect(
		() => {
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
		},
		[ contacts ]
	);
	return (
		<div className="ui container">
			<Header />
			<AddContact addContactHandler={addContactHandler} />
			<ContactList contacts={contacts} getContactId={removeContactHandler} />
		</div>
	);
}

export default App;
