import {useDispatch, useSelector} from "react-redux";
import {getRelation,
        setCoordsTask,
        setDragTaskEnd,
        setDragTaskStart,
        getMouseCoords,
        calculateCoords} from "../store/reducers/reduser";

export function useDragTask(props) {
    const dispatch = useDispatch();
    const show = useSelector((state) => getRelation(state, props.value.relation));
    const [mouseX, mouseY] = useSelector((state) => getMouseCoords(state));
    const [x, y] = useSelector((state) => calculateCoords(state, props.value.id));

    const mouseDownTask = () => {
        dispatch(setDragTaskStart(props.value.id));
    }

    const mouseUpTask = () => {
        dispatch(setDragTaskEnd(props.value.id));
        dispatch(setCoordsTask([props.value.id, mouseX, mouseY]));
    }

    return {
        x,
        y,
        show,
        mouseDownTask,
        mouseUpTask,
    }
}