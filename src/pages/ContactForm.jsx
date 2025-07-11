import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="max-w-md mx-auto p-8 mt-10 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 mb-4 border rounded"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 mb-4 border rounded"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 mb-4 border rounded"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          required
        ></textarea>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
