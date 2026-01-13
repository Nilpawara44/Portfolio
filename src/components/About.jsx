import React from 'react'

function About() {
  return (
  <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white shadow-lg rounded-2xl p-8">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          About Me
        </h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          I am a motivated Computer Science student with a strong foundation in
          programming and software development. I am proficient in C++, Java,
          and Python, with a solid understanding of Object-Oriented Programming
          (OOP) concepts. I enjoy building web applications using modern
          front-end technologies and continuously learning new tools and
          technologies.
        </p>

        {/* Personal Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-700">
              <span className="font-semibold">Name:</span> Ilesh Pawara
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Phone:</span> 8999093368
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> nilpawara1@gmail.com
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              <span className="font-semibold">Location:</span> Vadgaon, Shahada
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">District:</span> Nandurbar (425444)
            </p>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Skills & Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "C++",
              "Java",
              "Python",
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "SQL",
              "MySQL",
              "Git",
              "GitHub",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
