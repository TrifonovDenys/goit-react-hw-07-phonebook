import React from "react";
import css from './ContactList.module.css'
import { useSelector } from "react-redux";
import { getContacts, getFilter, getState} from "redux/selectors";
import Contact from "components/Contact/Contact";

const ContactList = () => {

  const contacts = useSelector(getContacts);
  console.log(contacts);
  const filter = useSelector(getFilter);
  console.log(filter);
  const state = useSelector(getState);
  console.log(state);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <ul className={css.list}>
      {filteredContacts && filteredContacts.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact key={contact.id} contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
