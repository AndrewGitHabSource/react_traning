import React, {useEffect, useRef, useState} from 'react';
import {TaskContext} from "../context";
import Task from "./Task";

const MenuStyle = {
    color: "white",
    fontSize: "19px",
    listStyle: "none",
    textAlign: "left",
    width: "30%"
}

const Menu = (props) => {
    const ref = useRef(null);
    const context = React.useContext(TaskContext);
    let tasks = context.taskArray;

    useEffect(() => {

    }, []);

    return (

        <ul className={'menu'} style={MenuStyle} ref={ref}>
            {
                tasks.map((element) => {
                    return <li key={element.id}>{element.title}</li>
                })
            }
        </ul>
    );
}

export default Menu;