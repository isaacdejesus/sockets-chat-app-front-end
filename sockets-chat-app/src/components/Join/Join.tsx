import { useState } from 'react';
import {Link} from 'react-router-dom';
import {Box, Stack, Typography, Button} from '@mui/material';
import './Join.css';
import { width } from '@mui/system';
const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return(
        <Box
            justifyContent= "center" 
            alignItems="center"
            sx={{backgroundColor: "#293462"}}
            height="100vh"
        >
            <Stack
                margin= "auto"
                pt="30px"
                sx={{width: { xs: "50%", sm: "30%" }}}
            >
                <Typography
                   variant="h3"  
                   align='center'
                   noWrap
                   pb="2rem"
                   color="#fff"
                > 
                   Sockets 
                </Typography>
                <div><input placeholder="Enter your name..." className="joinInput" type="text" onChange={(e) => setName(e.target.value)}/></div>
                <div><input placeholder="Enter a room name..." className="joinInput mt-20" type="text" onChange={(e) => setRoom(e.target.value)}/></div>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null}to={`/chat?name=${name}&room=${room}`}>
                    <Box textAlign="center">
                    <Button  
                        type="submit"
                        size="large"
                        color='secondary'
                        sx={{bgcolor: "#42a5f5", color: "#fff", mt: "1.5rem", width: "40%"  }}
                    >
                        Sign in
                    </Button>
                    </Box>
                </Link>
            </Stack>
        </Box>
    )
};

export default Join;
