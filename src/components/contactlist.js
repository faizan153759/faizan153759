import React from 'react';
import ContactCard from './contactCard';

const contactlist = (props) => {
	const deleteConactHandler = (id) => {
		props.getContactId(id);
	};

	const renderContactList = props.contacts.map((contact) => {
		return <ContactCard contact={contact} clickHander={deleteConactHandler} key={contact.id} />;
	});
	return <div className="ui celled list">{renderContactList}</div>;
};

export default contactlist;
