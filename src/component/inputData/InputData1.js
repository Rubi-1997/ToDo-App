import { text } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";
import CompletedTask from "./CompletedTask";
import "./InputData1.css";
import Tasklist from "./Tasklist";

const InputData1 = () => {
    const [inputVal, setInputVal] = useState("");
    const [task, setTask] = useState([]);
    const [complete, setComplete] = useState([]);
    const [edit, setEdit] = useState(false);
    const [selectedit, setSelectedit] = useState("");
    const [inputeEditValue, setInputEditValue] = useState("");

    const handleChange = (event) => {
        setInputVal(event.target.value);
    };

    const handleClick = () => {
        if (inputVal === "") {
            alert("enter your task");
        } else {
            setTask([...task, inputVal]);
            setInputVal("");
        }
    };

    const deleteTask = (id) => {
        let newlist = task.filter((ele, index) => {
            return index !== id;
        });
        setTask(newlist);
    };

    const toggleEdit = (id, taskName) => {
        setSelectedit(id);
        setEdit(true);
        setInputEditValue(taskName)
    };

    const editItem = (id) => {
        let item = [...task];
        console.log(item)
        item[id] = inputeEditValue;
        console.log(item[id]);
        setSelectedit(id);
        setTask(item);
        setInputEditValue(item[id]);
        setEdit(false);
    };

    const StorenewInputValue = (event) => {
        setInputEditValue(event.target.value);

    };

    const completeTask = (id) => {
        deleteTask(id);
        let completelist = task.filter((ele, index) => {
            return index === id;
        });
        setComplete([...complete, ...completelist]);
    };

    const undoTask = (id) => {
        let undoele = complete.filter((ele, index) => {
            return index !== id;
        });
        setComplete(undoele);

        let undoItem = complete.filter((ele, index) => {
            return index === id;
        });

        setTask([...task, ...undoItem]);
    };

    const deleteCompleteTask = (id) => {
        let deleteItem = complete.filter((ele, index) => {
            return index !== id;
        });
        setComplete(deleteItem);
    };

    return (
        <>
            <div className="container">
                <div className="box">
                    <div className="addlist">
                        <input
                            type="text"
                            value={inputVal}
                            className="inputfield"
                            placeholder="enter your list....✍"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button className="addbutton" onClick={handleClick}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
            <div className="box1">
                <Tasklist
                    tasklist={task}
                    deleteTask={deleteTask}
                    editItem={editItem}
                    completeTask={completeTask}
                    edit={edit}
                    toggleEdit={toggleEdit}
                    selectedit={selectedit}
                    StorenewInputValue={StorenewInputValue}
                />
                <CompletedTask
                    complete={complete}
                    tasklist={task}
                    undoTask={undoTask}
                    deleteCompleteTask={deleteCompleteTask}
                />
            </div>
        </>
    );
};

export default InputData1;
