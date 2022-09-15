import { createSlice } from '@reduxjs/toolkit';

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
            "date": '08.09.2022',
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
            "date": '08.09.2022',
        },
    ],
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        moveTask(state, {payload}) {
            const [clientX, clientY, mousePositionX, mousePositionY] = payload;
            const space = 20;
            const areaPositionX = mousePositionX + space;
            const areaPositionY = mousePositionY + space;

            if (clientX > areaPositionX && clientY > areaPositionY) {
                state.coords = {
                    x: clientX - mousePositionX,
                    y: clientY - mousePositionY,
                }
            }
        },

        setCoordsTask(state, {payload}) {
            const [id, x, y] = payload;
            console.log(id);
            console.log(x);
            console.log(y);

            state.tasks.filter(element => element.id === id).shift().x = x;
            state.tasks.filter(element => element.id === id).shift().y = y;
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
    },
});

export const getRelation = (state, relation) => {
    const task = state.task.tasks.filter(elem => elem.id === relation);
    if (task.length) {
        return task.shift().show;
    } else {
        return false;
    }
};

export const getTaskById = (state, id) => {
    return state.task.tasks.filter(elem => elem.id === id);
};

export const { addTask, editTask, moveTask, setDragTaskStart, setDragTaskEnd, setCoordsTask } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;