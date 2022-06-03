import React from 'react';
import user from '../images/user.png';
const ContactCard = (props) => {
	const { name, email, id } = props.contact;
	return (
		<div className="item">
			<img className="ui avatar image" src={user} alt="img" />
			<div className="content">
				<div className="header">{name}</div>
				<div>{email}</div>
			</div>

			<i
				className="trash alternate outline icon"
				style={{ color: 'red' }}
				onClick={() => props.clickHander(id)}
			/>
		</div>
	);
};
export default ContactCard;
