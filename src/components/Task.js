import React from 'react';
import { TaskContext } from "../context";

const Task = (props) => {
    let style;
    const { taskArray, setTaskArray } = React.useContext(TaskContext);
    let start = props.value.drag;
    let x = props.value.x;
    let y = props.value.y;

    const mouseDown = (event) => {
        start = true;
        taskArray.filter(element => element.id === props.value.id).shift().drag = true;
        setTaskArray(taskArray);
    }

    const mouseUp = (event) => {
        let elem = taskArray.filter(element => element.id === props.value.id).shift();
        elem.drag = false;
        elem.x = x;
        elem.y = y;
        setTaskArray(taskArray);
        start = false;
    }

    if (start === true) {
        const space = 40;
        x = props.coords.x - space;
        y = props.coords.y - space;
    }

    style = {
        left: x + 'px',
        top: y + 'px',
    }

    return (
        <div className="task" onMouseDown={mouseDown} onMouseUp={mouseUp}  style={style}>
            <h3>{ props.value.title }</h3>
        </div>
    );
}

export default Task;