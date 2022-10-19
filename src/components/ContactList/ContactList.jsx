import PropTypes from 'prop-types';
import { List, ListItem, ListSpan } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ name, number, id }) => (
      <ListItem key={id}>
        {name}
        <ListSpan>:</ListSpan>
        {number}
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </ListItem>
    ))}
  </List>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
