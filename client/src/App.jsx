import {Routes, Route} from 'react-router-dom'

import Header from "./components/header/Header"
import Home from './components/home/Home'
import Login from './components/login/Login'
import About from './components/about/About'
import TasksList from './components/tasks-list/TasksList'
import TaskCreate from './components/task-create/TaskCreate'
import TaskEdit from './components/task-edit/TaskEdit'
import TaskDetails from './components/task-details/TaskDetails'
import NotFound from './components/not-found/NotFound'

function App() {
  return (
    <div>
      <main>
        <Header/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/tasks-list' element={<TasksList/>}/>
          <Route path='/tasks/create' element={<TaskCreate/>}/>
          <Route path='/tasks/:taskId/edit' element={<TaskEdit/>}/>
          <Route path='/tasks/:taskId/details' element={<TaskDetails/>}/>
          <Route path='/not-found' element={<NotFound/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
