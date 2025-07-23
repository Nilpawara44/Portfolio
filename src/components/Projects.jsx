import React from 'react';

// Example project data
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React and Tailwind CSS.',
    link: 'https://your-portfolio.com',
    tech: ['React', 'Tailwind CSS'],
  },
  {
    title: 'Todo App',
    description: 'A minimal productivity app to manage daily tasks.',
    link: 'https://todo-app.com',
    tech: ['React', 'Firebase'],
  },
  {
    title: 'E-commerce Store',
    description: 'Full-featured e-commerce site with Stripe integration.',
    link: 'https://mystore.com',
    tech: ['Next.js', 'Stripe', 'Tailwind'],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
              </div>

              <div className="mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-sky-700 text-white text-sm font-medium px-3 py-1 rounded-full mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-center bg-sky-600 hover:bg-sky-700 transition-colors px-4 py-2 rounded-md font-semibold text-white"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
