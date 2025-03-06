import { useEffect, useState } from "react";
import tasksAPI from "../../api/tasks-api";
import commentsAPI from "../../api/comments-api";
import { useParams } from "react-router-dom";

export default function TaskDetails() {
    const [task, setTask] = useState({}); 
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const { taskId } = useParams();

    useEffect(() => {
        (async () => {
            const result = await tasksAPI.getOne(taskId);
            setTask(result);
            setComments(Object.values(result?.comments) || []);
        })();
    }, [taskId]);

    const handleAddComment = async () => {
        if (!newComment.trim()) return;
        const dateCreated = new Date().toLocaleString();
        const updatedComments = [...comments, { text: newComment, dateCreated: dateCreated }];
        setComments(updatedComments);
        setNewComment("");
        await commentsAPI.create(task.id, 'anonymous', newComment, dateCreated)
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
            <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-900">{task?.title}</h1>
                <p className="text-gray-600 text-sm">Created on: {task?.dateCreated}</p>

                <div className="mt-4 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <img 
                          src={task.assignee?.avatar} 
                          alt={task.assignee} 
                          className="w-10 h-10 rounded-full" 
                          />
                        <span className="text-gray-800">Assignee: {task.assignee}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img 
                        src={task.createdBy?.avatar} 
                        alt={task.createdBy} 
                        className="w-10 h-10 rounded-full" 
                        />
                        <span className="text-gray-800">Created by: {task.createdBy}</span>
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mt-1 
                        ${task?.status === 'Not Started' ? 'bg-gray-300 text-gray-800' : ''}
                        ${task?.status === 'In Progress' ? 'bg-blue-200 text-blue-800' : ''}
                        ${task?.status === 'Ready for Testing' ? 'bg-yellow-200 text-yellow-800' : ''}
                        ${task?.status === 'In Testing' ? 'bg-purple-200 text-purple-800' : ''}
                        ${task?.status === 'Done' ? 'bg-green-200 text-green-800' : ''}`}> 
                        {task?.status}
                    </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Original Estimate</label>
                        <p className="text-gray-900 font-semibold">{task?.originalEstimate }</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Remaining Estimate</label>
                        <p className="text-gray-900 font-semibold">{task?.remainingEstimate}</p>
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

                {/* Comment Section */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-900">Comments</h2>
                    <div className="mt-4">
                        <textarea
                            className="w-full p-3 border rounded-md focus:ring focus:ring-indigo-300"
                            rows="2"
                            placeholder="Add a comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                        <button
                            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
                            onClick={handleAddComment}
                        >
                            Add Comment
                        </button>
                    </div>
                    <div className="mt-4 space-y-4">
                        {comments.map((comment, index) => (
                            <div key={index} className="p-4 bg-gray-200 rounded-md">
                                <p className="text-gray-900">{comment.text}</p>
                                <p className="text-xs text-gray-600">{comment.dateCreated}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
