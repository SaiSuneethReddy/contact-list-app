import React from 'react';
import { useSelector } from 'react-redux';

function ContactStats() {
  const contacts = useSelector(state => state.contacts);

  return (
    <>
      <p style={{ color: 'red', fontSize : 18, textAlign: 'center' }}>Total Contacts: {contacts.totalCount}</p>

      <div className='contactStats-container'>
        <div className='contactStats-gender-count'>
          <p>Male Contacts: {contacts.maleCount}</p>
          <p>Female Contacts: {contacts.femaleCount}</p>
        </div>
        <div className='contactStats-contact-type-count'>
          <p>Personal Contacts: {contacts.personalCount}</p>
          <p>Business Contacts: {contacts.businessCount}</p>
        </div>
      </div>
    </>
  );
}

export default ContactStats;
