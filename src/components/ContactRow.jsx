import { useState } from "react";

function ContactRow({ contact, updateContact, deleteContact }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: contact.name,
    email: contact.email,
  });

  const handleSave = () => {
    updateContact(contact.id, editData);
    setIsEditing(false);
  };

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3">
        {isEditing ? (
          <input
            type="text"
            value={editData.name}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
            className="border border-gray-300 rounded px-2 py-1 w-full "
          />
        ) : (
          <span className="text-gray-800">{contact.name}</span>
        )}
      </td>

      <td className="p-3">
        {isEditing ? (
          <input
            type="email"
            value={editData.email}
            onChange={(e) =>
              setEditData({ ...editData, email: e.target.value })
            }
            className="border border-gray-300 rounded px-2 py-1 w-full "
          />
        ) : (
          <span className="text-gray-600">{contact.email}</span>
        )}
      </td>

      <td className="p-3 text-center">
        {isEditing ? (
          <div className="space-x-2">
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 transition"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className=" text-white px-3 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => deleteContact(contact.id)}
              className=" text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}

export default ContactRow;
