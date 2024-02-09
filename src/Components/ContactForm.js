import React, { useState } from "react";
import Modal from "react-modal";

const ContactForm = ({ onAddContact }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleAddContact = () => {
    // Create a new contact object
    const newContact = { name, email, phone };

    // Update the parent component with the new contact
    onAddContact(newContact);

    // Clear the input fields
    setName("");
    setEmail("");
    setPhone("");

    // Close the modal
    setModalIsOpen(false);
  };

  return (
    <div>
      <button className="add-btn" onClick={() => setModalIsOpen(true)}>
        <i className="fas fa-plus"></i>
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Add Contact"
      >
        <h2>Add Contact</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <button onClick={handleAddContact}>Add Contact</button>
        <button onClick={() => setModalIsOpen(false)}>Cancel</button>
      </Modal>
    </div>
  );
};

export default ContactForm;
