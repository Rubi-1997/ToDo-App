import React, { useState } from "react";
import "./Tasklist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";

const Tasklist = (props) => {
    const { tasklist, deleteTask, editItem, completeTask,edit,toggleEdit,selectedit,StorenewInputValue } = props;
    console.log(props);

    return (
        <>
            <div className="container">
                <div className="item">
                    <h1>Tasks</h1>
                    {tasklist.map((ele, index) => {
                        return (
                            <div className="eatchitem">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={false}
                                    onClick={() => completeTask(index)}
                                ></input>
                                {edit===true&&selectedit===index ? (
                                    <div className="editfield">
                                        <input type="text" className="taskitem edit inputStyle" defaultValue={ele} onChange={StorenewInputValue}></input>
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="edit"
                                            onClick={() => editItem(index)}
                                        />
                                    </div>
                                ) : (
                                    <div className="editfield">
                                        <p type="text" className="taskitem">
                                            {ele}
                                        </p>
                                        <FontAwesomeIcon
                                            icon={faEdit}
                                            className="edit"
                                            onClick={() => toggleEdit(index, ele)}
                                        />
                                    </div>
                                )}

                                <div className="icons">
                                    <FontAwesomeIcon
                                        icon={faTrashAlt}
                                        className="trash"
                                        onClick={() => deleteTask(index)}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Tasklist;
