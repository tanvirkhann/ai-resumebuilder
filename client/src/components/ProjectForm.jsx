import { Plus, Trash2 } from "lucide-react";
import React from "react";

const ProjectForm = ({ data, onChange }) => {
  
  // ✅ Add a new blank project object
  const addProject = () => {
    const newProject = {
      name: "",
      type: "",
      description: "",
      url: "",
    };
    onChange([...data, newProject]);
  };

  // ✅ Remove project by index
  const removeProject = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  // ✅ Update a specific field of a project by index
  const updateProject = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div>
      
      {/* Header + Add Project Button */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
          <p className="text-sm text-gray-500">Add your projects</p>
        </div>

        <button
          onClick={addProject}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 transition"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </button>
      </div>

      {/* Project Inputs Rendering */}
      <div className="space-y-4 mt-6">
        {data.map((project, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-3 bg-white">

            {/* Title + Delete Button */}
            <div className="flex justify-between items-start">
              <h4 className="font-medium text-gray-800">Project #{index + 1}</h4>
              <button
                onClick={() => removeProject(index)}
                className="text-red-500 hover:text-red-700 transition"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            {/* Inputs */}
            <div className="grid  gap-3">

              <input
                type="text"
                value={project.name}
                onChange={(e) => updateProject(index, "name", e.target.value)}
                placeholder="Project Name"
                className="px-3 py-2 text-sm rounded-lg"
              />

              <input
                type="text"
                value={project.type}
                onChange={(e) => updateProject(index, "type", e.target.value)}
                placeholder="Project Type"
                className="px-3 py-2 text-sm rounded-lg"
              />

              <textarea
                rows={4}
                value={project.description}
                onChange={(e) => updateProject(index, "description", e.target.value)}
                placeholder="Describe your project..."
                className="px-3 py-2 text-sm rounded-lg"
              />

              <input
                type="text"
                value={project.url}
                onChange={(e) => updateProject(index, "url", e.target.value)}
                placeholder="Project URL"
                className="px-3 py-2 text-sm rounded-lg"
              />

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectForm;
