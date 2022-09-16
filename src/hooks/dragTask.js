import {useDispatch, useSelector} from "react-redux";
import {getRelation, setCoordsTask, setDragTaskEnd, setDragTaskStart, getTaskCoordsById, getMouseCoords} from "../store/reducers/reduser";

export function useDragTask(props) {
    const space = 40;
    const dispatch = useDispatch();
    const show = useSelector((state) => getRelation(state, props.value.relation));
    let [x, y, start] = useSelector((state) => getTaskCoordsById(state, props.value.id));
    let [mouseX, mouseY] = useSelector((state) => getMouseCoords(state));


    const mouseDownTask = () => {
        start = true;
        dispatch(setDragTaskStart(props.value.id));
    }

    const mouseUpTask = () => {
        dispatch(setDragTaskEnd(props.value.id));
        dispatch(setCoordsTask([props.value.id, mouseX - space, mouseY - space]));
        start = false;
    }

    if (start === true) {
        x = mouseX - space;
        y = mouseY - space;
    }

    return {
        x,
        y,
        show,
        mouseDownTask,
        mouseUpTask,
    }
}