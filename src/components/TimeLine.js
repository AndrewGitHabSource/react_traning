import React, { useEffect, useRef, useState } from 'react';
import { UseContext } from "../context";


const TimeLine = (props) => {
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <div className={'time'}>
            {
                <div className={'week'}>
                    {
                        week.map((item) => {
                            return <div key={item}>{item}</div>
                        })
                    }
                </div>
            }
        </div>
    );
}

export default TimeLine;