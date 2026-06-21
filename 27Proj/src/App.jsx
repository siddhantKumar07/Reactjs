import React from 'react'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import Todo from './pages/Todo'
import DailyPlanner from './pages/DailyPlanner'
import Pomodoro from './pages/Pomodoro'
import Motivational from './pages/Motivational'
import DailyGoals from './pages/DailyGoals'
const App = () => {
  return (
    <div>
      {/*  */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/dailyplanner' element={<DailyPlanner/>}/>
        <Route path='/pomodoro' element={<Pomodoro/>}/>
        <Route path='/motivational' element={<Motivational/>}/>
        <Route path='/dailygoal' element={<DailyGoals/>}/>

      </Routes>
    </div>
  )
}

export default App