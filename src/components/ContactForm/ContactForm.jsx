import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../store/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const formSubmit = evt => {
    evt.preventDefault();

    const name = evt.target.name.value;
    const number = evt.target.number.value;
    const id = nanoid();

    const newContact = {
      id: id,
      name: name,
      number: number,
    };

    dispatch(addContact(newContact));
    evt.target.reset();
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={formSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name"
          required
        />
        <label>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter phone number"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
