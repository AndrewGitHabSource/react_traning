import { createSlice } from '@reduxjs/toolkit';
import moment from "moment";

const WTF_THE_SPACE = 40;

const initialState = {
    coords: [{ x: 0, y: 0 }],
    tasks: [
        {
            "id": 1,
            "title": "Start last task today",
            "x": 0,
            "y": 0,
            "drag": false,
            "relation": 3,
            "selected": false,
            "active": true,
            "show": true,
            "date": '16.09.2022',
        },
        {
            "id": 2,
            "title": "Complete task #4789",
            "x": 200,
            "y": 200,
            "drag": false,
            "relation": 1,
            "selected": false,
            "active": true,
            "show": true,
            "date": '16.09.2022',
        },
    ],
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        moveTask(state, {payload}) {
            const [clientX, clientY, mousePositionX, mousePositionY] = payload;
            const areaPositionX = mousePositionX + WTF_THE_SPACE;
            const areaPositionY = mousePositionY + WTF_THE_SPACE;

            if (clientX > areaPositionX && clientY > areaPositionY) {
                state.coords = {
                    x: clientX - mousePositionX,
                    y: clientY - mousePositionY,
                }
            }
        },
        setCoordsTask(state, {payload}) {
            const [id, x, y] = payload;

            state.tasks.filter(element => element.id === id).shift().x = x - WTF_THE_SPACE;
            state.tasks.filter(element => element.id === id).shift().y = y - WTF_THE_SPACE;
        },
        setDragTaskStart(state, {payload}) {
            state.tasks.filter(element => element.id === payload).shift().drag = true;
        },
        setDragTaskEnd(state, {payload}) {
            state.tasks.filter(element => element.id === payload).shift().drag = false;
        },
        addTask(state, user) {
            state.tasks.push(user);
        },
        filter(state, {payload}) {
            const [day, month, year] = payload;

            state.tasks = state.tasks.map((element) => {
                return moment({day, month, year}).isSame(moment(moment(element.date,
                    'DD.MM.YYYY').toDate()),
                    'day')
                    ? {...element, "show": true}
                    : {...element, "show": false};
            });
        }
    },
});

export const getRelation = (state, relation) => {
    const task = state.task.tasks.filter(elem => elem.id === relation);

    return task.length ? task.shift().show : false;
};

export const getMouseCoords = (state) => {
    const coords = state.task.coords;

    return [coords.x, coords.y];
};

export const calculateCoords = (state, id) => {
    const task = state.task.tasks.find(elem => elem.id === id);

    return [
        task.drag === true ? state.task.coords.x - WTF_THE_SPACE : task.x,
        task.drag === true ? state.task.coords.y - WTF_THE_SPACE : task.y
    ];
};

export const { addTask, editTask, moveTask, setDragTaskStart, setDragTaskEnd, setCoordsTask, filter } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;