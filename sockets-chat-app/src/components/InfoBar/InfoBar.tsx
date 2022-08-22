import './InfoBar.css';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
import { width } from '@mui/system';
import {Box, Stack} from '@mui/material';
import {AiOutlineWifi, AiOutlineClose} from "react-icons/ai";
const InfoBar = ({room}: {room: string}) => {
    return(
        <Box
            display="flex"
            flex-direction= "row"
            align-content="space-between"
        >
            <Box 
                flex="1"
                display="flex"
                flex-direction="row"
            sx={{backgroundColor: "#80558C"}} 
                >
                <AiOutlineWifi color="white" className='onlineIcon'/> 
                <h3 className='roomName'> Currently in: {room}</h3>
            </Box>
            <Box
                flex="1" 
                position= "relative"
                sx={{backgroundColor: "#80558C"}} 
            >
                <a  className= "x" href='/'><AiOutlineClose  color="white" className='x'/></a>
            </Box>
        </Box>
    )
};

export default InfoBar;
