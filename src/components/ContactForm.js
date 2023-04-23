import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../actions/contactActions';

const ContactForm = () => {
  const dispatch = useDispatch();
  
  const user = { id: 1, name: 'John Doe' };
  dispatch({ type: 'LOGIN', payload: user });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [type, setType] = useState('Personal');

  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);

  const handleNameChange = e => {
      const contactName = e.target.value;
    setName(contactName);
    // Validate contact name
    if(contactName.trim() === '') {
        setNameError('name is required');
        return;
    }
    else if (/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(contactName)) {
        setNameError(null);
    } else {
        setNameError('Name should contain only alphabets and one space in between the words and only one dot is allowed');
    }
  };

  const handleEmailChange = e => {
    const contactEmail = e.target.value;
    setEmail(contactEmail);
    // Validate contactEmail
      if (contactEmail.trim() === '') {
        setEmailError('Email is required');
        return;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) {
        setEmailError('Invalid email format');
        return;
      } else {
        setEmailError(null);
      }
  };

  const handlePhoneChange = e => {
    const contactPhone = e.target.value;
    setPhone(contactPhone);
          // validate contact phone number
          if (contactPhone.trim() === '') {
            setPhoneError('Phone number is required');
            return;
          } else if (!/^\d{10}$/.test(contactPhone)) {
            setPhoneError('Invalid phone number format. Must be 10 digits.');
            return;
          } else {
            setPhoneError(null);
          }
  };

    // to handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameError || emailError || phoneError) {
        return;
    }
  
    const contact = {
      id: new Date().getTime().toString(),
      name,
      email,
      phone,
      gender,
      type
    };

    dispatch(addContact(contact));
    setName('');
    setEmail('');
    setPhone('');
    setGender('');
    setType('Personal');
  };

  return (
      <div className='contactForm-container'>
      <h1>Create contact</h1>
      <form onSubmit={handleSubmit}>
      <div className='contactForm-element'>
        <label>Name:</label>
        <input type="text" className='contactForm-input-feild' value={name} onChange={handleNameChange} required/>
        {nameError && <div className='contactForm-input-feild-error'>{nameError}</div>}
      </div>
      <div className='contactForm-element'>
        <label>Email:</label>
        <input type="email" className='contactForm-input-feild' value={email} onChange={handleEmailChange} required/>
        {emailError && <div className='contactForm-input-feild-error'>{emailError}</div>}
      </div>
      <div className='contactForm-element'>
        <label>Phone:</label>
        <input className='contactForm-input-feild' type="text" value={phone} onChange={handlePhoneChange} required/>
        {phoneError && <div className='contactForm-input-feild-error'>{phoneError}</div>}
    </div> 
      <div className='contactForm-element'>
        <label>Gender:</label>
        <input className='contactForm-input-feild' type="radio" id="male" name="gender" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} required/>
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} />
        <label htmlFor="female">Female</label>
      </div>
      <div className='contactForm-element'>
        <label>Type:</label>
        <select className='contactForm-input-feild' value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Personal">Personal</option>
          <option value="Business">Business</option>
        </select>
      </div>
      <button type="submit" className='contactForm-submit-button'>Add Contact</button>
    </form>
    </div>
  );
};

export default ContactForm;
