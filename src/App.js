import { onAuthStateChanged } from 'firebase/auth'
import React from 'react';
import {auth} from './components/firebaseConfig'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
class App extends React.Component{
  state={
     authUser:''
  }
  componentDidMount(){
    onAuthStateChanged(auth,(currentUser)=>{
      this.setState({
        authUser:currentUser
      })
    }
  )}
  render(){
    return(
      <div>
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
    )
    
  }
}

export default App;
