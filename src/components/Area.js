import React, {useRef} from 'react';
import { TaskContext } from "../context";
import Task from "./Task";
import { useEffect, useState } from 'react';
import Xarrow from "react-xarrows";

const Area = () => {
    const context = React.useContext(TaskContext);
    let tasks = context.taskArray;
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const area = useRef(null);

    const move = (e) => {
        setCoords({
            x: e.clientX - area.current.getBoundingClientRect().x,
            y: e.clientY - area.current.getBoundingClientRect().y,
        });
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