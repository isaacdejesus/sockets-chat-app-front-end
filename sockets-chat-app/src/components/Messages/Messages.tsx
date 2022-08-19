import './Messages.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';

const Messages = ({messages, name} : {messages: any, name: string}) => {
    return(
        <ScrollToBottom className="messages">
        {messages.map((message: any, index: number) => (
            <div key={index}>
                <Message message={message} name={name} />
            </div>
        ))}
        </ScrollToBottom>
    )
}

export default Messages;
