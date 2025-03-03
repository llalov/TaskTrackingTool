import React, { useState } from "react";

export default function TaskCreate() {
    const [formData, setFormData] = useState({
        title: "",
        assignee: "",
        createdBy: "",
        originalEstimate: "",
        remainingEstimate: "",
        description: "",
        dateCreated: new Date().toISOString().substring(0, 10), // Default to today
        status: "not started", // Default status
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to API)
        console.log("Task Created:", formData);
        // Reset form after submission
        setFormData({
            title: "",
            assignee: "",
            createdBy: "",
            originalEstimate: "",
            remainingEstimate: "",
            description: "",
            dateCreated: new Date().toISOString().substring(0, 10),
            status: "not started",
        });
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Create a Task
            </h2>
          </div>
    
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                  Title
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="title"
                    id="task-title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
    
              <div>
                <label htmlFor="assignee" className="block text-sm/6 font-medium text-gray-900">
                  Assignee
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="assignee"
                    id="task-assignee"
                    value={formData.assignee}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
    
              <div>
                <label htmlFor="createdBy" className="block text-sm/6 font-medium text-gray-900">
                  Created By
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="createdBy"
                    id="task-createdBy"
                    value={formData.createdBy}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
    
              <div>
                <label htmlFor="originalEstimate" className="block text-sm/6 font-medium text-gray-900">
                  Original Estimate
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="originalEstimate"
                    id="task-originalEstimate"
                    value={formData.originalEstimate}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
    
              <div>
                <label htmlFor="remainingEstimate" className="block text-sm/6 font-medium text-gray-900">
                  Remaining Estimate
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="remainingEstimate"
                    id="task-remainingEstimate"
                    value={formData.remainingEstimate}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
    
              <div>
                <label htmlFor="description" className="block text-sm/6 font-medium text-gray-900">
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    name="description"
                    id="task-description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  ></textarea>
                </div>
              </div>
    
              <div>
                <label htmlFor="dateCreated" className="block text-sm/6 font-medium text-gray-900">
                  Date Created
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="dateCreated"
                    id="task-dateCreated"
                    value={formData.dateCreated}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
    
              <div>
                <label htmlFor="status" className="block text-sm/6 font-medium text-gray-900">
                  Status
                </label>
                <div className="mt-2">
                  <select
                    name="status"
                    id="task-status"
                    value={formData.status}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="not started">Not Started</option>
                    <option value="in progress">In Progress</option>
                    <option value="ready for testing">Ready for Testing</option>
                    <option value="in testing">In Testing</option>
                    <option value="done">Done</option>
                  </select>
                </div>
              </div>
    
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      );
}