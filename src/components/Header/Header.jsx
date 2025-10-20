export default function Header({notifications}) {

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
        <section className="header">
            <span>Notifications <button>{counter}</button></span>
            <p onClick={markAllAsRead}>mark all as read</p>
        </section>
    )
}