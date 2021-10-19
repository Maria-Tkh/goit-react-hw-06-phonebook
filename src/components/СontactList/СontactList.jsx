import PropTypes from 'prop-types';
import ContactElement from 'components/СontactElement/СontactElement';
import { connect } from 'react-redux';
import contactsActions from '../../redux/actions';
import { List } from './СontactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactElement
          name={contact.name}
          number={contact.number}
          onClick={() => onDeleteContact(contact.id)}
        />
      ))}
    </List>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  // return allContacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  return allContacts.filter(contact => console.log(contact.name));
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
