import { useState } from "react";
import { contactsData } from "./contactsData";
import ContactList from "./components/ContactList";
import ContactForm from "./components/MyForm";

function App() {
  const [contacts, setContacts] = useState(contactsData);

  const addContact = (contact) => {
    const newContact = {
      id: contacts.length + 1, 
      ...contact,
    };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    if (confirm("Are you sure you want to delete this contact?")) {
      setContacts(contacts.filter((item) => item.id !== id));
    }
  };

  const updateContact = (id, updatedContact) => {
    setContacts(
      contacts.map((item) => (item.id === id ? { ...item, ...updatedContact } : item))
    );
  };

  return (
    <div className="max-w-xl mx-auto mt-10 border rounded shadow">
      <h1 className="text-2xl font-bold text-center py-4 border-b">
      MY Contacts
      </h1>
      <ContactForm addContact={addContact} />
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        updateContact={updateContact}
      />
    </div>
  );
}

export default App;
