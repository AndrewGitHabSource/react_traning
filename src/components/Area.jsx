import React, { useRef } from 'react';
import { TaskContext } from "../context";
import Task from "./Task";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { moveTask } from "../store/reducers/reduser";

const Area = () => {
    const tasks = useSelector((state) => state.task.tasks);
    const dispatch = useDispatch();
    const coords = useSelector((state) => state.task.coords);
    const area = useRef(null);

    const move = (e) => {
        dispatch(moveTask([e.clientX, e.clientY, area.current.getBoundingClientRect().x, area.current.getBoundingClientRect().y]));
    }

    return (
        <div className="place" onMouseMove={move} ref={area}>
            {
                tasks.map((element) => {
                    return element.show ? <Task value={element} coords={coords} name="task" key={element.id} /> : '';
                })
            }
        </div>
    );
}

export default Area;