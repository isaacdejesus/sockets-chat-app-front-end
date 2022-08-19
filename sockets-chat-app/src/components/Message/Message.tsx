import './Message.css';
const Message = ({message, name}: {message: any, name: string}) => {
    let iseSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();
    if(message.user === trimmedName)
        iseSentByCurrentUser = true;
    return(
        iseSentByCurrentUser 
        ? (
        <div className="messageContainer justifyEnd">
            <p className="sentText pr-10">{trimmedName}</p>
            <div className="messageBox backgroundBlue">
                <p className="messageText colorWhite">{message.text}</p>
            </div>
        </div>
        )
        : (

            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{message.text}</p>
                </div>
                <p className="sentText pl-10">{message.user}</p>
            </div>
        )
    )
}

export default Message;
