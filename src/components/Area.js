import React, { useRef } from 'react';
import { TaskContext } from "../context";
import Task from "./Task";
import { useState } from 'react';

const Area = () => {
    const context = React.useContext(TaskContext);
    let tasks = context.taskArray;
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const area = useRef(null);

    const move = (e) => {
        const space = 20;
        const areaPositionX = area.current.getBoundingClientRect().x + space;
        const areaPositionY = area.current.getBoundingClientRect().y + space;


        if (e.clientX > areaPositionX && e.clientY > areaPositionY) {
            setCoords({
                x: e.clientX - area.current.getBoundingClientRect().x,
                y: e.clientY - area.current.getBoundingClientRect().y,
            });
        }
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