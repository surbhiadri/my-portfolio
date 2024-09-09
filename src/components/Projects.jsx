import React, { useState } from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null); // Track the selected image
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility

  // Function to open modal with clicked image
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded cursor-pointer"
                onClick={() => openModal(project.image)} // On image click, open modal
              />
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-white"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal} // Close the modal when the backdrop is clicked
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected Project"
              className="max-w-full max-h-screen"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black p-2 rounded-full"
              onClick={closeModal} // Close the modal when the button is clicked
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
