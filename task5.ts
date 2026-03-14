// fifth challenge
interface NotificationObj{
    title: string;
    body: string;
}
type Notification= string | NotificationObj

function formatNotification (notification: Notification): string{
return typeof notification === "string" ? "Notification: " + notification : "title" in notification? notification.title +":" + notification.body:"operation failed"
}

/*
function formatNotification(notification: Notification): string {
    if (typeof notification === "string") {
        return "Notification: " + notification;
    }
    return notification.title + ": " + notification.body;
}
*/

const notify= formatNotification("Hello, world!")
const notify2= formatNotification({
    title: "URGENT",
    body:"Server is down"
})

console.log(notify)
console.log(notify2)