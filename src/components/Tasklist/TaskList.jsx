import React from 'react' 
import NewTask from './Newtask'
import CompleteTask from './Completetask'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    return (
        <div id='tasklist'className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
            {data.tasks.map((elem, idx) => {
              
              if(elem.active){

                return <AcceptTask  />
              }
              if(elem.newTask) {
                return <NewTask />
              }
              if(elem.completed) {
                return <CompleteTask />
              }
              if(elem.failed) {
                return <FailedTask/>
              }

            })}
        </div>
    )
}

export default TaskList