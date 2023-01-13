import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/forms/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

/*     const changeState = () => {
        console.log('TODO: Cambiar estado de una tare')
    } */

    return (
        <div>
            <div>
                <h1>Your Task :</h1>
            </div>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
