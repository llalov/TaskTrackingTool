import { useState } from "react";
import { useEffect} from "react";
import {Link} from "react-router-dom";

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import tasksAPI from "../../api/tasks-api";

export default function TasksList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        tasksAPI.getAll()
            .then(result => setTasks(result));
    }, []);

    const handleDragEnd = (result) => {
        if (!result.destination) return; // Exit if dropped outside the list

        const newTasks = [...tasks];
        const [movedItem] = newTasks.splice(result.source.index, 1);
        newTasks.splice(result.destination.index, 0, movedItem);

        setTasks(newTasks);
    }; 
      return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Tasks</h1>
        <div className="bg-white shadow rounded-lg p-4">
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="tasks">
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="space-y-2"
                        >
                            {tasks.length > 0    ? tasks.map((task, index) => (
                                <Draggable
                                    key={task._id}
                                    draggableId={task._id}
                                    index={index}
                                >
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="flex items-center justify-between p-4 border-b last:border-none bg-gray-50 shadow-md rounded-md cursor-pointer"
                                        >
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={task.assignee.avatar}
                                                    alt={task.assignee}
                                                    className="w-10 h-10 rounded-full"
                                                />
                                                <div>
                                                    <h2 className="text-lg font-medium text-gray-900">
                                                        <Link to={`/tasks/${task._id}/details`}>{task.title}</Link>
                                                    </h2>
                                                    <p className="text-sm text-gray-600">
                                                        Assigned to: {task.assignee}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                                                {task.remainingEstimate}
                                            </span>
                                        </div>
                                    )}
                                </Draggable>
                            )) : <h1>No pending tasks.</h1>}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    </div>
      );
}