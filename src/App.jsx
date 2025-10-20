import { useState } from 'react'
import './App.css'
import data from "./data.json"
import  Header  from './components/Header/Header'
import Notification from './components/Notificatio/Notification'
function App() {
 const [notifications, setNotifications] = useState(data)

 



  return (
    <>
    <div className='container'>
      <Header notifications={notifications}/>
      <Notification notifications={notifications} setNotifications={setNotifications}/>
      
    </div>
     
    </>
  )
}

export default App
