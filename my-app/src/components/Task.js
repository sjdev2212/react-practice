import {FaTrashAlt } from 'react-icons/fa'

const Task = ({task,onDelete ,onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}
                <FaTrashAlt style={{color: 'green', cursor : 'pointer'}} onClick={() => onDelete(task.id)}/>
                </h3>
            <p>{task.day}</p>

            
        </div>
    )
}

export default Task
