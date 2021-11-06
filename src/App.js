
import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import { BrowserRouter as Router , Routes , Route , Link } from "react-router-dom";
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';




function App() {
  const sendMsgIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    
    <Router>
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
    </Router>
  );
}

export default App;
