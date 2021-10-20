import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import actions from '../../redux/actions';
import { Form, Input, Button } from './СontactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const allContacts = useSelector(getContacts);

  const handleContact = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmitContact = e => {
    e.preventDefault();
    newContact();
    setName('');
    setNumber('');
  };

  const newContact = () => {
    const contactToCheck = {
      name,
      number,
    };
    allContacts.some(contact => contact.name === contactToCheck.name)
      ? alert(`${contactToCheck.name} is already in contacts`)
      : dispatch(actions.createContact(name, number));
  };

  return (
    <Form onSubmit={handleSubmitContact}>
      <label htmlFor="name">
        Name
        <Input
          value={name}
          onChange={handleContact}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов.
             Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label htmlFor="number">
        Number
        <Input
          value={number}
          onChange={handleContact}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы,
             тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <div>
        <Button type="submit">Add contact</Button>
      </div>
    </Form>
  );
};

export default ContactForm;
