import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-black text-white px-4 py-16 flex flex-col items-center justify-center">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-center">Contact Me</h1>

      {/* Social Icons */}
      <div className="flex space-x-6 mb-12">
        <a
          href="https://github.com/nilpawara44"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-fuchsia-500 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/nilesh-pawara-15513917b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-fuchsia-500 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-fuchsia-500 transition duration-300"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Contact Form */}
      <form
        action=""
        className="w-full max-w-md bg-white/90 dark:bg-gray-800/90 text-black dark:text-white rounded-xl shadow-lg backdrop-blur-sm p-8 space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="yourname@example.com"
            className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message..."
            className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-sky-700 to-fuchsia-600 hover:from-fuchsia-600 hover:to-sky-700 transition-all text-white font-semibold px-6 py-2 rounded-md shadow-md"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
