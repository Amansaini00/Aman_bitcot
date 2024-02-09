import React, { useState, useEffect } from "react";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";
import SearchContact from "./Components/SearchContact";
import EditContact from "./Components/EditContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [contactToEdit, setContactToEdit] = useState(null);

  useEffect(() => {
    // Load data from sample.json when the component mounts
    fetch("/sample.json")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) =>
        console.error("Error loading data from sample.json:", error)
      );
  }, []);

  const handleAddContact = (newContact) => {
    // Update the contacts state with the new contact
    setContacts([...contacts, newContact]);
  };

  const handleSearchContact = (searchTerm) => {
    // Filter contacts based on the search term
    const results = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleEditContact = (editedContact) => {
    // Find the index of the contact to edit
    const index = contacts.findIndex((contact) => contact === contactToEdit);

    // Update the contacts state with the edited contact
    setContacts([
      ...contacts.slice(0, index),
      editedContact,
      ...contacts.slice(index + 1),
    ]);

    // Clear the contactToEdit state
    setContactToEdit(null);
  };

  const handleDeleteContact = (contactToDelete) => {
    const updatedContacts = contacts.filter(
      (contact) => contact !== contactToDelete
    );
    setContacts(updatedContacts);
  };

  return (
    <div id="Container">
      <div id="Container-head">
        <h1>Contacts</h1>
        <ContactForm onAddContact={handleAddContact} />
      </div>

      <SearchContact onSearch={handleSearchContact} />
      {contactToEdit ? (
        <EditContact contactToEdit={contactToEdit} onSave={handleEditContact} />
      ) : (
        <ContactList
          contacts={searchResults.length > 0 ? searchResults : contacts}
          onEditContact={setContactToEdit}
          onDeleteContact={handleDeleteContact}
        />
      )}
    </div>
  );
};

export default App;
