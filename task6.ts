//sixth challenge
interface TextMessage{
    type: "text";
    content: string;
}

interface ImageMessage {
    type: "image"
    url: string;
    caption ?:string;
}

interface VideoMessage{
    type: "video";
    url: string;
    duration:number;
}


type ChatMessage = TextMessage | ImageMessage | VideoMessage;

function formatMessage (message: ChatMessage): string{
switch (message.type){
    case "text":return("Text: " + message.content);
    case "image": return( message.caption?  "Image [" + message.caption + "]: " + message.url : "Image: " + message.url);
    case "video": return ("Video (" + message.duration + "s): " + message.url);
    default: return("Operation failed.")
}

}

console.log(formatMessage({type: "text", content: "Hello, world!"}))
console.log(formatMessage({type: "image",url: "<https://example.com/image.jpg>", caption: "Sunset" }))
console.log(formatMessage({type: "video",  url: "<https://example.com/video.mp4>", duration: 120}))
