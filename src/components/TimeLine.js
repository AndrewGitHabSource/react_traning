import React, { useEffect, useRef, useState } from 'react';
import { UseContext } from "../context";
import moment from "moment";


const TimeLine = (props) => {
    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let days = [];

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
    console.log(days);

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
                            days.map((day) => {
                                return <div className={day.isSame(new Date(), "day") ?  'current' : 'day'} key={day.date()}>{day.date()}</div>
                            })
                        }
                    </div>
                </React.Fragment>
            }
        </div>
    );
}

export default TimeLine;