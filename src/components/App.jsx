import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  return (
    <section>
      <div>
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </section>
  );
};

export default App;
