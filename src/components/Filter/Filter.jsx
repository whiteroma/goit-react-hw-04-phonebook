import PropTypes from 'prop-types';
import { FilterLabel } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <FilterLabel htmlFor="filter">
    Find contacts by name{' '}
    <input type="text" value={value} onChange={onChange} />
  </FilterLabel>
);

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
