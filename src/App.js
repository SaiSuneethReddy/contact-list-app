import React from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import ContactStats from './components/ContactStats';
import './styles/contacts.scss'

function App() {
  return (
    <div className="App">
      <ContactStats />
      <div className='contacts-container'>
        <ContactForm />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
