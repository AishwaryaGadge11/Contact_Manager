import { useState } from "react";

export default function ContactList({ contacts, deleteContact, updateContact }) {
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", email: "" });

  const handleEdit = (contact) => {
    setEditId(contact.id);
    setEditForm({ name: contact.name, email: contact.email });
  };

  const handleSave = (id) => {
    updateContact(id, editForm);
    setEditId(null);
  };

  const handleCancel = () => {
    setEditId(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Contacts</h2>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td className="p-2 border text-center">{contact.id}</td>
              <td className="p-2 border">
                {editId === contact.id ? (
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) =>
                      setEditForm({ ...editForm, name: e.target.value })
                    }
                    className="border p-1 rounded w-full"
                  />
                ) : (
                  contact.name
                )}
              </td>
              <td className="p-2 border">
                {editId === contact.id ? (
                  <input
                    type="email"
                    value={editForm.email}
                    onChange={(e) =>
                      setEditForm({ ...editForm, email: e.target.value })
                    }
                    className="border p-1 rounded w-full"
                  />
                ) : (
                  contact.email
                )}
              </td>

              <td className="p-2 border text-center space-x-2">
                {editId === contact.id ? (
                  <>
                    <button
                      onClick={() => handleSave(contact.id)}
                      className="text-green-600 hover:underline"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="text-gray-500 hover:underline"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(contact)}
                      className="text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteContact(contact.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
