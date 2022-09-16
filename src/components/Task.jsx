import React from 'react';
import Xarrow from "react-xarrows";
import { useDragTask } from "../hooks/dragTask";

const Task = (props) => {
    const {x, y, show, mouseDownTask, mouseUpTask} = useDragTask(props);

    const mouseDown = () => {
        mouseDownTask();
    }

    const mouseUp = () => {
        mouseUpTask();
    }

    let style = {
        left: x + 'px',
        top: y + 'px',
    }

    return (
        <React.Fragment>
            <div className="task" onMouseDown={mouseDown} onMouseUp={mouseUp}  style={style} id={props.value.id}>
                <h3>{ props.value.title }</h3>
            </div>

            {
                show && props.value.relation ? <Xarrow start={String(props.value.id)} end={String(props.value.relation)} /> : ''
            }
        </React.Fragment>
    );
}

export default Task;