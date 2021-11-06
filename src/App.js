
import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import { BrowserRouter as Router , Routes , Route , Link } from "react-router-dom";
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';




function App() {
  const sendMsgIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        dispatch(login({
          displayName:user.displayName,
          email:user.email,
          photoUrl:user.photoURL
        }))
      }
    })

  } ,[])
  return (
    
    <Router>
      {!user? <Login></Login> : 
    <div className="App">
      <Header/> 
      <div className="app_body">
      <SideBar/>
      <Routes>
        <Route path='/mail' element={<Mail/>}/>
        <Route path='/' element={<EmailList/>}/>
      </Routes>
     
      </div>
      {sendMsgIsOpen&& <SendMail/>}
      
    </div>
    }
    </Router>
  );
}

export default App;
