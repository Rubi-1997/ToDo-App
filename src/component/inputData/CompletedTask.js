import React from "react";
import "./Tasklist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const CompletedTask = (props) => {
    console.log(props);
    let { complete, tasklist, undoTask,deleteCompleteTask } = props;
    return (
        <>
            <div className="container">
                <div className="item">
                    <h1>Completed Task</h1>
                    {complete.map((ele, index) => {
                        return (
                            <div className="eatchitem">
                    
                                <FontAwesomeIcon icon={faUndo} className=" icons" onClick={() => undoTask(index)} />
                                <p type="text" className="taskitem">
                                    {ele}
                                </p>
                                <FontAwesomeIcon icon={faTrashAlt} className="trash icons" onClick={()=>deleteCompleteTask(index)}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default CompletedTask;
