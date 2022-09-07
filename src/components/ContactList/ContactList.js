import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts, title, filter, deleteItem }) => {
  const filteredContacts = contacts.filter(el => {
    return el?.name?.toLowerCase().includes(filter?.toLowerCase() || '');
  });
  return (
    <ul>
      {title}
      {filteredContacts?.map((contact) => {
        return <ContactListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
          onClick={deleteItem}
        />;
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  title: PropTypes.string,
  deleteItem: PropTypes.func,
};

export default ContactList;
