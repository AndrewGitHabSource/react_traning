import React from 'react';
import moment from "moment";
import { useDateTime } from "../hooks/time";
import { useTasksStateManager } from "../hooks/tasksStateManager";

const TimeLine = () => {
    const {week, rangeDates} = useDateTime();
    const {filter} = useTasksStateManager();

    const days = rangeDates();

    const filterTasks = (element) => {
        filter(element.target.textContent, moment().month(), moment().year());
    }

    return (
        <div className={'time'}>
            <div className={'week'}>
                {
                    week.map((item) => <div key={item}>{item}</div>)
                }
            </div>

            <div className={'days'}>
                {
                    days.map((day, index) =>
                        <div className={day.isSame(new Date(), "day") ?  'current' : 'day'} key={index} onClick={filterTasks}>
                            {day.date()}
                        </div>)
                }
            </div>
        </div>
    );
}

export default TimeLine;