import { useState } from 'react'
import './App.css'
import data from "./data.json"
function App() {
 const [notifications, setNotifications] = useState(data)
 const read = (id) => {
    const updatedNotifications = notifications.map(notification => {
      if(notification.id === id){
        return {...notification, isRed: true};
      }

      return notification;
    })

    setNotifications(updatedNotifications)
 }

 const counter = notifications.filter((notification) => {
   return !notification.isRed
}).length;

const markAllAsRead =() => {
  const updatedNotifications = notifications.map((notification) => {
    return {...notification, isRed: true};
  })

  setNotifications(updatedNotifications)
}

  return (
    <>
      <section className="header">
        <span>Notifications <button>{counter}</button></span>
        <p onClick={markAllAsRead}>mark all as read</p>
      </section>
      <main className="notifications">
       {notifications.map((notification) => (
        <div 
        key={notification.id} 
        className='notification' 
        style={!notification.isRed ? {backgroundColor : "green"} : {}}
        onClick={() => read(notification.id)}
        >
          <img src={notification.profilePic} alt="" />
          <span className="userName">{notification.username}</span>
          <span>{notification.action}</span>
          {notification.post ? <span>{notification.post}</span> : null}
          {notification.groupName ? <span>{notification.groupName}</span> : null}
          {notification.text ? <span>{notification.text}</span> : null}
          {notification.userPicture ? <img src={notification.userPicture}/> : null}
          <span>{notification.time}</span>
          {!notification.isRed ? <div className="redCircle"></div> : null}

        </div>
       ))}
      </main>
    </>
  )
}

export default App
