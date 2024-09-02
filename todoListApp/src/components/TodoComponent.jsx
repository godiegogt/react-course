import React, { useState } from 'react';


const TodoComponent = () => {
    const [tasks, setTasks] = React.useState([]);
    const [newTask, setNewTask] = React.useState('');

    React.useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/tasks');
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const addTask = async () => {
        if (newTask.trim() === '') return;

        try {
            const response = await fetch('http://localhost:5000/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: newTask })
            });
            const newTaskData = await response.json();
            setTasks([...tasks, newTaskData]);
            setNewTask('');
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const deleteTask = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/tasks/${id}`, {
                method: 'DELETE'
            });
            setTasks(tasks.filter(task => task._id !== id));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Lista de Tareas</h1>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Nueva tarea"
                />
                <button className="btn btn-primary" onClick={addTask}>
                    Agregar
                </button>
            </div>
            <ul className="list-group">
                {tasks.map((task) => (
                    <li key={task._id} className="list-group-item d-flex justify-content-between align-items-center">
                        {task.title}
                        <button className="btn btn-sm btn-danger" onClick={() => deleteTask(task._id)}>
                            ✖
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default TodoComponent