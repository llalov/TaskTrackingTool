import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import tasksAPI from "../../api/tasks-api";

const initialValues = {
  title: "",
  assignee: "",
  createdBy: "",
  originalEstimate: "",
  remainingEstimate: "",
  description: "",
  dateCreated: new Date().toISOString().substring(0, 10),
  status: "not started",
};

export default function TaskEdit() {
    const navigate = useNavigate();
    const {taskId} = useParams(); 
    const [task, setTask] = useState({});
    const [formData, setFormData] = useState(initialValues);

    useEffect(() => {
      (async () => {
          const result = await tasksAPI.getOne(taskId);
          setTask(result);
      })();
    }, [taskId])

    //Reinitialize
    useEffect(() => {
        if (task && Object.keys(task).length > 0) {
            setFormData(task);
        }
    }, [task])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
          await tasksAPI.update(taskId, formData);
        }
        catch(err) {
          if(err.message === 'Forbidden'){
            alert(`You don't have permissions to update this task!`);
          }
          else {
            alert(`Unable to update task. Reason: ${err.message}`);
          }
        }

        // Reset form after submission
        setFormData(initialValues);

        navigate(`/tasks/${taskId}/details`);
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Edit Task
            </h2>
          </div>
    
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="edit-title" className="block text-sm/6 font-medium text-gray-900">
                  Title
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="title"
                    id="edit-title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
    
              <div>
                <label htmlFor="edit-assignee" className="block text-sm/6 font-medium text-gray-900">
                  Assignee
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="assignee"
                    id="edit-assignee"
                    value={formData.assignee}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
    
              <div>
                <label htmlFor="edit-createdBy" className="block text-sm/6 font-medium text-gray-900">
                  Created By
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="createdBy"
                    id="edit-createdBy"
                    value={formData.createdBy}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
    
              <div>
                <label htmlFor="edit-originalEstimate" className="block text-sm/6 font-medium text-gray-900">
                  Original Estimate (in hours)
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="originalEstimate"
                    id="edit-originalEstimate"
                    value={formData.originalEstimate}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
    
              <div>
                <label htmlFor="edit-remainingEstimate" className="block text-sm/6 font-medium text-gray-900">
                  Remaining Estimate (in hours)
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="remainingEstimate"
                    id="edit-remainingEstimate"
                    value={formData.remainingEstimate}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
    
              <div>
                <label htmlFor="edit-description" className="block text-sm/6 font-medium text-gray-900">
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    name="description"
                    id="edit-description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  ></textarea>
                </div>
              </div>
    
              <div>
                <label htmlFor="edit-dateCreated" className="block text-sm/6 font-medium text-gray-900">
                  Date Created
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="dateCreated"
                    id="edit-dateCreated"
                    value={formData.dateCreated}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
    
              <div>
                <label htmlFor="edit-status" className="block text-sm/6 font-medium text-gray-900">
                  Status
                </label>
                <div className="mt-2">
                  <select
                    name="status"
                    id="edit-status"
                    value={formData.status}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="Not started">Not Started</option>
                    <option value="In progress">In Progress</option>
                    <option value="Ready for testing">Ready for Testing</option>
                    <option value="In testing">In Testing</option>
                    <option value="Done">Done</option>
                  </select>
                </div>
              </div>
    
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      );
}