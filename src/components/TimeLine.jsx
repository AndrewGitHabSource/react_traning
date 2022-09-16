import React from 'react';
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { rangeDates } from "../store/reducers/time"
import { filter } from "../store/reducers/reduser";

const TimeLine = () => {
    const dispatch = useDispatch();
    const week = useSelector(state => state.time.week);
    let days = useSelector(rangeDates);

    const filterTasks = (element) => {
        dispatch(filter([element.target.textContent, moment().month(), moment().year()]));
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
                    days.map(
                        (day, index) =>
                        <div className={day.isSame(new Date(), "day") ?  'current' : 'day'} key={index} onClick={filterTasks}>
                            {day.date()}
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default TimeLine;