import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';


function Footer() {
  return (
    <div className='w-full bg-gradient-to-r from-slate-600 to-slate-900 '>
      <h3>Desingned By : <span className='font-bold text-gray-400'>Nilesh Pawara</span></h3>
      <div>
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
      </div>
    </div>
  )
}

export default Footer
