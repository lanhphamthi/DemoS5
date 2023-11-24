import { useParams } from 'react-router-dom';

function UserDetail({users}) {
    const {id} = useParams();
    //console.log(id);
    //console.log(typeof(id));
    //console.log(users[id]);  //users[0]
    const user = users[id];
    return ( 
        <div className="user-detail-container">
            <img src={user.pic} alt={user.name} className="user-profile-pic" />
            <div className='detail-info'>
                <h2 className="user-name">{user.name}</h2>
                <h3>{user.address}</h3>
            </div>
            
        </div>
     );
}

export default UserDetail;