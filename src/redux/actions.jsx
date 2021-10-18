import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
// import types from './types';

const createContact = createAction('createContact', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

console.log(createContact('wow'));
// const createContact = (name, number) => ({
//   type: types.CREATE_CONTACT,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },

//  contacts.some(contact => contact.name === newContact.name)
//   ? alert(`${newContact.name} is already in contacts`)
//   : setContacts( prevState => [newContact, ...prevState],
//   )
// });

const deleteContact = createAction('deleteContact');

// const deleteContact = contactId => ({
//   type: types.DELETE_CONTACT,
//   payload: contactId,
// });

const changeFilter = createAction('changeFilter');

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// eslint-disable-next-line import/no-anonymous-default-export
export default { createContact, deleteContact, changeFilter };
