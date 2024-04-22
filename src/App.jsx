import './App.css';
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';
import ContactForm from './components/ContactForm';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoading, selectError } from './redux/selectors';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading}
      {error}
      <ContactList />
    </div>
  );
}

export default App;
