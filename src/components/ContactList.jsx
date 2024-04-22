import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contactsOps';

import Contact from './Contact';
import { selectFilter, selectContacts, selectFilteredContacts } from '../redux/selectors';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log(contacts);

  const filter = useSelector(selectFilter);

  const visibleContacts = useSelector(selectFilteredContacts);

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <Contact contacts={contact} onDeleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;