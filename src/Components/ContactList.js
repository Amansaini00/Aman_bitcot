import React, { useState } from "react";
import Modal from "react-modal";

const ContactList = ({ contacts, onEditContact, onDeleteContact }) => {
  const [viewedContact, setViewedContact] = useState(null);

  const handleEditClick = (contact) => {
    // Pass the contact to the parent component for editing
    onEditContact(contact);
  };

  const handleViewClick = (contact) => {
    // Set the contact to be viewed
    setViewedContact(contact);
  };

  const handleDeleteClick = (contact) => {
    // Pass the contact to the parent component for deletion
    onDeleteContact(contact);
  };

  return (
    <div>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.phone}
            <button
              className="edit-btn"
              onClick={() => handleEditClick(contact)}
            >
              <i className="fas fa-edit"></i>
            </button>
            <button
              className="view-btn"
              onClick={() => handleViewClick(contact)}
            >
              <i className="fas fa-eye"></i>
            </button>
            <button
              className="delete-btn"
              onClick={() => handleDeleteClick(contact)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </li>
        ))}
      </ul>
      <Modal
        isOpen={viewedContact !== null}
        onRequestClose={() => setViewedContact(null)}
        contentLabel="Contact Details"
      >
        <h2>View Contact</h2>
        <p>Name: {viewedContact?.name}</p>
        <p>Email: {viewedContact?.email}</p>
        <p>Phone: {viewedContact?.phone}</p>
        <button onClick={() => setViewedContact(null)}>Close</button>
      </Modal>
    </div>
  );
};

export default ContactList;
