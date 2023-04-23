import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../actions/contactActions';

const UpdateContactForm = ({ contact, handleClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedContact = {
      name,
      email,
      phone
    };
    const index = contact.id;
    dispatch(updateContact(index, updatedContact));
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <button type="submit">Update</button>
      <button onClick={handleClose}>Close</button>
    </form>
  );
};

export default UpdateContactForm;
