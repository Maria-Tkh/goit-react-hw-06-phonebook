// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import contactsActions from '../../redux/actions';
import { Label } from './Filter.styled';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Label>
      <p> Find contact by name</p>
      <input
        type="text"
        value={value}
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </Label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   // onChange: PropTypes.func.isRequired,
// };

export default Filter;
