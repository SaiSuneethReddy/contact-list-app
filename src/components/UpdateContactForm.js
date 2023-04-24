import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../actions/contactActions';

const UpdateContactForm = ({ contact, handleClose }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(contact.name);
    const [email, setEmail] = useState(contact.email);
    const [phone, setPhone] = useState(contact.phone);
    const [gender, setGender] = useState(contact.gender);
    const [type, setType] = useState(contact.type);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedContact = {
            name,
            email,
            phone,
            gender,
            type
        };
        const index = contact.id;
        dispatch(updateContact(index, updatedContact));
        handleClose();
    };

    return (
        <div className='contactForm-container'>
            <h1>Update Form</h1>
            <form onSubmit={handleSubmit}>
                <div className='contactForm-element'>
                    <label>Name:</label>
                    <input type="text" className='contactForm-input-feild' value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className='contactForm-element'>
                    <label>Email:</label>
                    <input type="email" className='contactForm-input-feild' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='contactForm-element'>
                    <label>Phone:</label>
                    <input className='contactForm-input-feild' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div className='contactForm-element'>
                    <label>Gender:</label>
                    <input className='contactForm-input-feild' type="radio" id="male" name="gender" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} required />
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

                <button type="submit">Save and Close</button>
                <button onClick={handleClose}>Close</button>
            </form>
        </div>
    );
};

export default UpdateContactForm;
