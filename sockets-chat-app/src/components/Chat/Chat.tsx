import './Chat.css';
import { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import Users from '../Users/Users';
import {Box} from '@mui/material';
let socket: any;
interface Message {
    user: string,
    text: string
};
const Chat =( ) => {
    const [name, setName] = useState<string>('');
    const [room, setRoom] = useState<string>('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<any>([]);
    const [users, setUsers] = useState('');
    //const ENDPOINT = 'http://localhost:5000'
    const ENDPOINT = 'https://chat-app-text.herokuapp.com/'
    useEffect(() => {
        //eslint-disable-next-line no-restricted-globals
        const {name, room} = queryString.parse(location.search);
        socket = io(ENDPOINT);
        if(typeof(name) ===  'string' && typeof(room) === 'string'){
            setName(name);
            setRoom(room);
            socket.emit('join', {name, room});
        }
        return () => {
            socket.disconnect();
            socket.off();
        }
        //eslint-disable-next-line no-restricted-globals
    }, [ location.search])
    useEffect(() => {
        socket.on('message', (message: any) => {
            setMessages((messages: any) => [...messages, message]);
        })
        socket.on("roomData", ({users}:{users: any}) => {
            setUsers(users);
        })
    }, [])
    const sendMessage =(e: any) => {
        e.preventDefault();
        if(message)
            socket.emit('sendMessage', message, () => setMessage(''));
    }
    console.log(message, messages);
    return(
            <Box 
                height="100vh"
            >
                <InfoBar room={room} />
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </Box>
    )
};

export default Chat;
