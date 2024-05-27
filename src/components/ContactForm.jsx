import '../index.css';
export const ContactForm = ({ saveName, saveNumber, saveState }) => {
  const handleSubmit = event => {
    event.preventDefault();
    saveState();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-container">
        <p>Name</p>
        <input
          className="input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={saveName}
          required
        />
        <p className="paragraph">Number</p>
        <input
          className="input"
          type="tel"
          name="number"
          pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={saveNumber}
          required
        />
      </div>
      <div>
        <button className="submit-button" type="submit">
          Add Contact
        </button>
      </div>
    </form>
  );
};
