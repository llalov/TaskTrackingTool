export default function TaskDetails() {
    const task = {
      id: "1",
      title: "Implement user authentication",
      remainingTime: "2d 4h",
      assignee: { name: "John Doe", avatar: "https://i.pravatar.cc/40?img=1" },
      statuts: 'In Progress',
      originalEstimate: '12h',
      remainingEstimate: '4h',
      description: "Create user authentication using social media profiles, FB, Gmail or in site registration",
      createdBy: { name: "Lachezar Lalov", avatar: "https://i.pravatar.cc/40?img=33" },
  };

    return (
      <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
        <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900">{task.title}</h1>
          <p className="text-gray-600 text-sm">Created on: {task.dateCreated}</p>
  
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src={task.assignee.avatar}
                alt={task.assignee.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="text-gray-800">Assignee: {task.assignee.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={task.createdBy.avatar}
                alt={task.createdBy.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="text-gray-800">Created by: {task.createdBy.name}</span>
            </div>
          </div>
  
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mt-1 
              ${task.status === 'Not Started' ? 'bg-gray-300 text-gray-800' : ''}
              ${task.status === 'In Progress' ? 'bg-blue-200 text-blue-800' : ''}
              ${task.status === 'Ready for Testing' ? 'bg-yellow-200 text-yellow-800' : ''}
              ${task.status === 'In Testing' ? 'bg-purple-200 text-purple-800' : ''}
              ${task.status === 'Done' ? 'bg-green-200 text-green-800' : ''}`}> 
              {task.status}
            </span>
          </div>
  
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Original Estimate</label>
              <p className="text-gray-900 font-semibold">{task.originalEstimate}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Remaining Estimate</label>
              <p className="text-gray-900 font-semibold">{task.remainingEstimate}</p>
            </div>
          </div>
  
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <p className="text-gray-900 mt-1">{task.description}</p>
          </div>
  
          <div className="mt-6 flex gap-4">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500">
              Edit Task
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500">
              Delete Task
            </button>
          </div>
        </div>
      </div>
    );
  }
  