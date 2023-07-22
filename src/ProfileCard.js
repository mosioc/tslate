function ProfileCard({title, handle, image}) { 

    return (
        <div>
            <img src={image} alt="pda logo"/>
            <div>title: {title}</div>
            <div>handle: {handle}</div>
        </div>
    );
}

export default ProfileCard;