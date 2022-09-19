import { createSlice } from '@reduxjs/toolkit';
import moment from "moment";

const initialState = {
    week: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

const timeSlice = createSlice({
    name: 'time',
    initialState,
    reducers: {
    },
});

export const rangeDates = () => {
    let range = [];
    const weekStart = moment().startOf('month').startOf('isoWeek');
    const weekEnd = moment().endOf('month').endOf('isoWeek');
    const diff = weekEnd.diff(weekStart, 'days')

    for (let i = 0; i < diff; i++) {
        range.push(moment(weekStart).add(i, 'days'))
    }

    return range;
}

export const { } = timeSlice.actions;
export const timeReducer = timeSlice.reducer;