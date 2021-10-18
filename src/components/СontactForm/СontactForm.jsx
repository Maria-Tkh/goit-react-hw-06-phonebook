import { Component } from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/actions';
import { Form, Input, Button } from './СontactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleContact = e => {
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.name);
    // console.log(e.currentTarget.value);

    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitContact = e => {
    e.preventDefault();
    //   console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmitContact}>
        <label htmlFor="name">
          Name
          <Input
            value={name}
            onChange={this.handleContact}
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
            onChange={this.handleContact}
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
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) => dispatch(contactsActions.createContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
