import '../index.css';
export const ContactList = ({ contacts, deleteEvent }) => {
  return (
    <ul className="list">
      {contacts.map(contact => {
        return (
          <li className="list-item" key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <button
              className="delete-button"
              type="button"
              onClick={() => deleteEvent(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
