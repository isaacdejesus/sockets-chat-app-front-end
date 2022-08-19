import './InfoBar.css';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
const InfoBar = ({room}: {room: string}) => {
    return(
        <div className="InfoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon}  alt="online img"/>
                <h3> {room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt=" close image" /></a>
            </div>
        </div>
    )
};

export default InfoBar;