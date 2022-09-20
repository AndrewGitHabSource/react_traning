import React from "react";
import moment from "moment";

export function useDateTime(props) {
    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const rangeDates = () => {
        let range = [];
        const weekStart = moment().startOf('month').startOf('isoWeek');
        const weekEnd = moment().endOf('month').endOf('isoWeek');
        const diff = weekEnd.diff(weekStart, 'days')

        for (let i = 0; i < diff; i++) {
            range.push(moment(weekStart).add(i, 'days'))
        }

        return range;
    }

    return {
       rangeDates,
       week,
    }
}