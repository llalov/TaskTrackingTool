import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'

import Header from "./components/header/Header"
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import About from './components/about/About'
import TasksList from './components/tasks-list/TasksList'
import TaskCreate from './components/task-create/TaskCreate'
import TaskEdit from './components/task-edit/TaskEdit'
import TaskDetails from './components/task-details/TaskDetails'
import NotFound from './components/not-found/NotFound'
import { AuthenticationContext } from './contexts/AuthenticationContext'

function App() {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        setAuthState(state);
    };

    const contextData = {
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState
    };
      
    return (
      <AuthenticationContext.Provider value={contextData}>
          <div>
            <main>
              <Header/> 
              <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/tasks-list' element={<TasksList/>}/>
                <Route path='/tasks/create' element={<TaskCreate/>}/>
                <Route path='/tasks/:taskId/edit' element={<TaskEdit/>}/>
                <Route path='/tasks/:taskId/details' element={<TaskDetails/>}/>
                <Route path='/not-found' element={<NotFound/>}/>
              </Routes>
            </main>
          </div>
      </AuthenticationContext.Provider>
    )
}

export default App
