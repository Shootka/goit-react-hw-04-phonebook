import React, { useState } from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || []);

  const onHandleDelete = (event) => {
    setContacts(contacts.filter(el => el.id !== event.target.id));
    localStorage.setItem('contacts', JSON.stringify(contacts.filter(el => el.id !== event.target.id)));
  };

  const submitHandler = (data) => {
    localStorage.setItem('contacts',
      JSON.stringify([...contacts, { id: Math.floor(Math.random() * 999293).toString(10), ...data }]));
    if (contacts
      .map(el => el.name)
      .includes(data.name)
    ) {
      return alert('already in cotacts');
    } else {
      setContacts([{ id: Math.floor(Math.random() * 999293).toString(10), ...data }, ...contacts]);
    }
  };

  return (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101',
    }}>
      Phonebook
      <Form submitData={submitHandler} />
      <Filter onChange={setFilter} />
      <ContactList title={'Contacts'}
                   filter={filter}
                   setContacts={setContacts}
                   contacts={contacts} deleteItem={onHandleDelete} />
    </div>
  );
};

export default App;
