import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contacts from "../Contacts/Contacts";
import Phonebook from "../Phonebook/Phonebook";
import ContactsFilter from "../ContactsFilter/ContactsFilter";
import Error from "../Error/Error";
import { CSSTransition } from "react-transition-group";
import styles from "./App.module.css";
import pop from "../../transition/pop.module.css";
import { filterContacts } from "../../redux/actions/filterAction";
import { asyncDeleteContact } from "../../redux/actions/contactsAction";
import {
  contactsSelector,
  filterSelector,
  errorSelector,
  getVisibleContacts,
} from "../../redux/selectors/index";

const App = () => {
  const dispatch = useDispatch();
  const contactsArr = useSelector((state) => contactsSelector(state));
  const filtered = useSelector((state) => filterSelector(state));
  const error = useSelector((state) => errorSelector(state));
  const filteredContacts = useSelector((state) => getVisibleContacts(state));

  const handleChangeFilter = (e) => {
    const value = e.target.value;
    dispatch(filterContacts(value));
  };

  const deleteExactContact = (id) => {
    dispatch(asyncDeleteContact(id));
  };

  return (
    <>
      {error ? (
        <Error />
      ) : (
        <div className={styles.Container}>
          <Phonebook />
          <ToastContainer autoClose={3000} />
          {contactsArr.length >= 2 && (
            <CSSTransition timeout={250} classNames={pop}>
              <ContactsFilter
                filter={filtered}
                onHandleChangeFilter={handleChangeFilter}
              />
            </CSSTransition>
          )}
          <Contacts
            filteredContacts={filteredContacts}
            onDeleteContact={deleteExactContact}
          />
        </div>
      )}
    </>
  );
};

export default App;
