import onlineIcon from '../../icons/onlineIcon.png';
import './Users.css';
const Users = ({ users }: {users: any}) => (
  <div className="textContainer">
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map((user: any) => (
                  <div key={user.name} className="activeItem">
                            {user.name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default Users;
