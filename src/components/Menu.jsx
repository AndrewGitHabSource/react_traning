import React, {useEffect, useRef, useState} from 'react';
import {TaskContext} from "../context";
import Task from "./Task";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const MenuStyle = {
    color: "white",
    fontSize: "19px",
    listStyle: "none",
    textAlign: "left",
    width: "30%"
}

const Menu = (props) => {
    const tasks = useSelector((state) => state.task.tasks);

    return (

        <ul className={'menu'} style={MenuStyle}>
            {
                tasks.map((element) => {
                    return <li key={element.id}>{element.title}</li>
                })
            }
        </ul>
    );
}

export default Menu;