import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/actions';
import { Label } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      <p> Find contact by name</p>
      <input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
