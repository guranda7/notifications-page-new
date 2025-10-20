import './Notification.css'

export default function Notification({notifications, setNotifications}) {
     const read = (id) => {
        const updatedNotifications = notifications.map(notification => {
          if(notification.id === id){
            return {...notification, isRed: true};
          }
    
          return notification;
        })
    
        setNotifications(updatedNotifications)
     }
    
    return(
        <main className="notifications">
       {notifications.map((notification) => (
        <div 
        key={notification.id} 
        className='notification' 
        style={!notification.isRed ? {backgroundColor : "aliceblue"} : {}}
        onClick={() => read(notification.id)}
        >
          <img src={notification.profilePic} alt="profile-picture" className='profilePicture'/>
          <span className="userName">{notification.username}</span>
          <span>{notification.action}</span>
          {notification.post ? <span>{notification.post}</span> : null}
          {notification.groupName ? <span>{notification.groupName}</span> : null}
          {notification.text ? <span>{notification.text}</span> : null}
          {notification.userPicture ? <img src={notification.userPicture} className='userPicture'/> : null}
            {!notification.isRed ? <div className="redCircle"></div> : null}
            <span>{notification.time}</span>
        

        </div>
       ))}
      </main>
    )
}