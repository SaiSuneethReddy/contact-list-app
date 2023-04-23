const initialState = {
  contacts: [],
  totalCount: 0,
  maleCount: 0,
  femaleCount: 0,
  personalCount: 0,
  businessCount: 0,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      const newContact = {
        id: state.contacts.length + 1,
        ...action.payload,
      };
      return {
        ...state,
        contacts: [...state.contacts, newContact],
        ['totalCount']: state['totalCount'] + 1,
        [newContact.gender.toLowerCase() + 'Count']: state[newContact.gender.toLowerCase() + 'Count'] + 1,
        [newContact.type.toLowerCase() + 'Count']: state[newContact.type.toLowerCase() + 'Count'] + 1,
      };

    case 'DELETE_CONTACT':
      const updatedContacts = state.contacts.filter(contact => contact.id !== action.payload);
      const deletedContact = state.contacts.find(contact => contact.id === action.payload);
      return {
        ...state,
        contacts: updatedContacts,
        ['totalCount']: state['totalCount'] - 1,
        [deletedContact.gender.toLowerCase() + 'Count']: state[deletedContact.gender.toLowerCase() + 'Count'] - 1,
        [deletedContact.type.toLowerCase() + 'Count']: state[deletedContact.type.toLowerCase() + 'Count'] - 1,
      };

    case 'UPDATE_CONTACT':
      const { index, updatedContact } = action.payload;
      const updatedContactss = state.contacts.map(contact => {

        if (contact.id === index) {

          return { ...contact, ...action.payload.updatedContact };
        }
      return contact;
      });
      return { ...state, contacts: updatedContactss };

    default:
      return state;
  }
};

export default contactReducer;
