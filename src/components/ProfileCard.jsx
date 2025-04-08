function ProfileCard(props) {
    return (
    <div className="card">
    <img src={props.image} alt="profile" />
    <h2>{props.name}</h2>
    <p>{props.description}</p>
    </div>
    );
    }
    
    export default ProfileCard;