import React, { useEffect, useRef, useState } from 'react';
import moment from "moment";
import filter from "../helpers/filter";
import { TaskContext } from "../context";


const TimeLine = (props) => {
    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const { taskArray, setTaskArray } = React.useContext(TaskContext);
    let month = moment().month();
    let year = moment().year();
    let days = [];

    const filterDate = (element) => {
        let filteredArray = filter({
            "day": element.target.textContent,
            "month": month,
            "year": year,
        }, taskArray);

        console.log(filteredArray);

        setTaskArray(filteredArray);
    }

    const rangeDates = () => {
        let range = [];
        const weekStart = moment().startOf('month').startOf('isoWeek');
        const weekEnd = moment().endOf('month').endOf('isoWeek');
        let diff = weekEnd.diff(weekStart, 'days')

        for (let i = 0; i < diff; i++) {
            range.push(moment(weekStart).add(i, 'days'))
        }

        return range;
    }

    days = rangeDates();

    return (
        <div className={'time'}>
            {
                <React.Fragment>
                    <div className={'week'}>
                        {
                            week.map((item) => {
                                return <div key={item}>{item}</div>
                            })
                        }
                    </div>

                    <div className={'days'}>
                        {
                            days.map((day, index) => {
                                return <div
                                    className={day.isSame(new Date(), "day") ?  'current' : 'day'}
                                    key={index}
                                    onClick={filterDate}>
                                    {day.date()}
                                </div>
                            })
                        }
                    </div>
                </React.Fragment>
            }
        </div>
    );
}

export default TimeLine;