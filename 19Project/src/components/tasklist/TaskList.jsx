import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  return (
    <div className='tasklist overflow-scroll h-[55%] w-full rounded-xl flex items-center justify-start flex-nowrap gap-2  '>
       {data.loggedInEmployee.tasks.map((task, idx) => {
  const cards = []

  if (task.newTask) {
        cards.push(<NewTask key={`${idx}-new`} task={task} data={data} />)
  }

  if (task.active) {
    cards.push(<AcceptTask key={`${idx}-active`} task={task} />)
  }

  if (task.completed) {
    cards.push(<CompleteTask key={`${idx}-completed`} task={task} />)
  }

  if (task.failed) {
    cards.push(<FailedTask key={`${idx}-failed`} task={task} />)
  }

  return cards
})}
  
    </div>
  )}
export default TaskList