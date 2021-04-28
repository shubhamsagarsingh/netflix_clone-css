import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'



const App = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Redirect to='/'/>
        </Switch>
    )
}



export default App