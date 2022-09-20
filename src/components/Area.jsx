import React, { useRef } from 'react';
import Task from "./Task";
import { useTasksStateManager } from "../hooks/tasksStateManager";
import { TaskContext } from "../context";

const Area = () => {
    const {tasks} = React.useContext(TaskContext);
    const area = useRef(null);
    const {moveTask} = useTasksStateManager();

    const move = (e) => {
        moveTask(e.clientX, e.clientY, area.current.getBoundingClientRect().x, area.current.getBoundingClientRect().y);
    }

    return (
        <div className="place" onMouseMove={move} ref={area}>
            {
                tasks.map((element) => element.show ? <Task value={element} name="task" key={element.id} /> : '')
            }
        </div>
    );
}

export default Area;