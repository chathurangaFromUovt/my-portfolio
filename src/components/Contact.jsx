import React, { useState } from 'react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, just simulate submission
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-4xl font-bold text-center mb-2">Contact Me</h2>
                <p className="text-sm text-center mb-12">chathurangafromuovt@gmail.com</p>

                {submitted ? (
                    <p className="text-blue-500 text-center font-bold text-lg">Thank you! I will get back to you soon.</p>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block mb-2 text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-4 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-4 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-gray-700">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full border border-gray-300 rounded px-4 py-2"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="font-bold bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
}
