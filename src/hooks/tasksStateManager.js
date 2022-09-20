import { TaskContext } from "../context";
import React from "react";
import moment from "moment";

const WTF_THE_SPACE = 40;

export function useTasksStateManager(props) {
    const {coords, setCoords} = React.useContext(TaskContext);
    const {tasks, setTasks} = React.useContext(TaskContext);

    const moveTask = (clientX, clientY, mousePositionX, mousePositionY) => {
        const areaPositionX = mousePositionX + WTF_THE_SPACE;
        const areaPositionY = mousePositionY + WTF_THE_SPACE;

        if (clientX > areaPositionX && clientY > areaPositionY) {
            setCoords({
                x: clientX - mousePositionX,
                y: clientY - mousePositionY,
            });
        }
    };

    const setDragTaskStart = (id) => {
        tasks.find(element => element.id === id).drag = true;
        setTasks(tasks);
    };

    const setDragTaskEnd = (id) => {
        tasks.find(element => element.id === id).drag = false;
        setTasks(tasks);
    };

    const setCoordsTask = (id, x, y) => {
        tasks.find(element => element.id === id).x = x - WTF_THE_SPACE;
        tasks.find(element => element.id === id).y = y - WTF_THE_SPACE;
        setTasks(tasks);
    };

    const calculateCoords = (id) => {
        const task = tasks.find(elem => elem.id === id);

        return [
            task.drag === true ? coords.x - WTF_THE_SPACE : task.x,
            task.drag === true ? coords.y - WTF_THE_SPACE : task.y
        ];
    };

    const getRelation = (relation) => {
        const task = tasks.find(elem => elem.id === relation);

        return task ? task.show : false;
    };

    const filter = (day, month, year) => {
        const filteredTasks = tasks.map((element) => {
            return moment({day, month, year}).isSame(moment(element.date,
                'DD.MM.YYYY').toDate(),
                'day')
                ? {...element, "show": true}
                : {...element, "show": false};
        });

        setTasks(filteredTasks);
    }

    return {
        moveTask,
        setDragTaskStart,
        setDragTaskEnd,
        setCoordsTask,
        calculateCoords,
        getRelation,
        filter,
    }
}