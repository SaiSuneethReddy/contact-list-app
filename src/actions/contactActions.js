export const addContact = (contact) => {
  console.log('im from addContact');
  return {
    type: 'ADD_CONTACT',
    payload: contact
  }
}

export const deleteContact = (id) => {
  console.log('im from deleteContact');
  return {
    type: 'DELETE_CONTACT',
    payload: id
  }
}

export const updateContact = (contact) => {
  console.log('im from updateContact');
  return {
    type: 'UPDATE_CONTACT',
    payload: contact
  }
}
