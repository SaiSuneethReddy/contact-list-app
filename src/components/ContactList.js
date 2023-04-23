import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../actions/contactActions';
import UpdateContactForm from './UpdateContactForm';


const ContactList = () => {
  const [contactUpdate, setContactUpdate] = useState(false);

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
      {contacts.contacts.map((contact, index )=> (
        <div key={contact.id} className='contactList-card'>
          <p> <span className='contactList-card-label'>Name:</span> {contact.name}</p>
          <p> <span className='contactList-card-label'>Email:</span> {contact.email}</p>
          <p> <span className='contactList-card-label'>Phone:</span> {contact.phone}</p>
          <p> <span className='contactList-card-label'>Gender:</span> {contact.gender}</p>
          <p> <span className='contactList-card-label'>Type:</span> {contact.type}</p>
          <div className='contactList-card-buttons-container'>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
            <button onClick={() => setContactUpdate(true)}>Update Contact</button>
          </div>
          {
            contactUpdate ? <UpdateContactForm contact={contact} index={index} handleClose={handleClose} /> : null
          }
        </div>
      ))}
    </div>
  );
};

export default ContactList;
