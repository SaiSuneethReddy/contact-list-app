import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../actions/contactActions';
import UpdateContactForm from './UpdateContactForm';


const ContactList = () => {
  const [contactUpdate, setContactUpdate] = useState(null);

  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleClose = () => {
    setContactUpdate(false);
  }

  return (
    <div className='contactList-container'>
      <h2>Contact List</h2>
      {contacts.contacts.map((contact)=> (
        <div key={contact.id} className='contactList-card'>
          <p> <span className='contactList-card-label'>Name:</span> {contact.name}</p>
          <p> <span className='contactList-card-label'>Email:</span> {contact.email}</p>
          <p> <span className='contactList-card-label'>Phone:</span> {contact.phone}</p>
          <p> <span className='contactList-card-label'>Gender:</span> {contact.gender}</p>
          <p> <span className='contactList-card-label'>Type:</span> {contact.type}</p>
          <div className='contactList-card-buttons-container'>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
            <button onClick={() => setContactUpdate(contact)}>Update Contact</button>
          </div>
          {
            contactUpdate && (contactUpdate.id === contact.id) ? <UpdateContactForm contact={contact} handleClose={handleClose} /> : null
          }
        </div>
      ))}
    </div>
  );
};

export default ContactList;
