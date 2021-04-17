import React from 'react'
import Header from './components/Header'
import { Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'



const App = () => {
    return(
        <>
            <Header/>
            <Route exact path='/' component={Home} />
            <Redirect to='/'/>
        </>
    )
}



export default App