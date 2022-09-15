import React, { useEffect } from 'react';
import Xarrow from "react-xarrows";
import { useSelector } from "react-redux";
import { getRelation } from "../store/reducers/reduser";
import { useDispatch } from "react-redux";
import { setDragTaskStart, setDragTaskEnd, setCoordsTask } from "../store/reducers/reduser";

const Task = (props) => {
    const space = 40;
    const dispatch = useDispatch();
    const show = useSelector((state) => getRelation(state, props.value.relation));
    let style;

    let start = props.value.drag;
    let x = props.value.x;
    let y = props.value.y;

    const mouseDown = (event) => {
        start = true;
        dispatch(setDragTaskStart(props.value.id));
    }

    const mouseUp = (event) => {
        dispatch(setDragTaskEnd(props.value.id));
        dispatch(setCoordsTask([props.value.id, props.coords.x - space, props.coords.y - space]));
        start = false;
    }

    if (start === true) {
        x = props.coords.x - space;
        y = props.coords.y - space;
    }

    style = {
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