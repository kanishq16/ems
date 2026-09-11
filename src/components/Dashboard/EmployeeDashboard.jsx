import React from 'react'
import TaskListNumber from '../../others/TaskListNumber'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = () => {
    return (
        <div>
            <div className='p-10 bg-[#1C1C1C] h-'>
                <Header />
                <TaskListNumber />
                <TaskList />
            </div>
        </div>
    )
}

export default EmployeeDashboard