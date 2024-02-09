import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const EditContact = ({ contactToEdit, onSave }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editedContact, setEditedContact] = useState({});

  useEffect(() => {
    // Set the initial values when the contactToEdit changes
    setEditedContact(contactToEdit);
    setModalIsOpen(true);
  }, [contactToEdit]);

  const handleEditContact = () => {
    // Pass the edited contact to the parent component
    onSave(editedContact);

    // Close the modal
    setModalIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Edit Contact Modal"
    >
      <h2>Edit Contact</h2>
      <input
        type="text"
        value={editedContact.name || ""}
        onChange={(e) =>
          setEditedContact({ ...editedContact, name: e.target.value })
        }
        placeholder="Name"
      />
      <input
        type="text"
        value={editedContact.email || ""}
        onChange={(e) =>
          setEditedContact({ ...editedContact, email: e.target.value })
        }
        placeholder="Email"
      />
      <input
        type="text"
        value={editedContact.phone || ""}
        onChange={(e) =>
          setEditedContact({ ...editedContact, phone: e.target.value })
        }
        placeholder="Phone"
      />
      <button onClick={handleEditContact}>Save Contact</button>
      <button onClick={() => setModalIsOpen(false)}>Cancel</button>
    </Modal>
  );
};

export default EditContact;
