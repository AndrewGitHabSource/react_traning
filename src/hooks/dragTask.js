import { useTasksStateManager } from "./tasksStateManager";
import React from "react";
import { TaskContext } from "../context";

export function useDragTask(props) {
    const {getRelation, calculateCoords, setDragTaskStart, setDragTaskEnd, setCoordsTask} = useTasksStateManager();
    const {coords} = React.useContext(TaskContext);
    const show = getRelation(props.value.relation);
    const [x, y] = calculateCoords(props.value.id);

    const mouseDownTask = () => {
        setDragTaskStart(props.value.id);
    }

    const mouseUpTask = () => {
        setDragTaskEnd(props.value.id);
        setCoordsTask(props.value.id, coords.x, coords.y);
    }

    return {
        x,
        y,
        show,
        mouseDownTask,
        mouseUpTask,
    }
}