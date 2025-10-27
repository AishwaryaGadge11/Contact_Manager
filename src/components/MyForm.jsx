import { useState } from "react";

export default function MyForm({ addContact }) {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return alert("Please fill all fields");
    addContact(form);
    setForm({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex gap-2">
      <input
        type="text"
        placeholder="Name"
        className="border p-2 rounded flex-1"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded flex-1"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <button
        type="submit"
        className="bg-gray-700 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
}
