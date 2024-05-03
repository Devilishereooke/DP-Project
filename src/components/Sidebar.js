import React from 'react'
import girl from "../images/Profile-01.png"
import boy from "../images/Profile-02.png"
import { onSnapshot } from "firebase/firestore";
import { auth, usersCollection } from "../firebase"


export default function Sidebar(props){
    const [userInfo, setUserInfo] = React.useState({
        name : "Loading...",
        age : "Loading...",
        gender : "Loading..."
    });
    React.useEffect(() => {
        const unSubscribe = onSnapshot(usersCollection, (snapshot) => {
            snapshot.docs.map((doc) => (
                (doc.data().uid === auth.currentUser.uid) && setUserInfo(prevData => {
                    return ({
                        ...doc.data(),
                        id : doc.id
                    })
                })
            ))
        })
        return unSubscribe;
    }, [])

    const image = userInfo.gender === 'female' ? girl : boy;
    return(
        <div className="sidebar--container">
            <div className="profile--pic">
                <img src={image} alt="" />
            </div>
            <div className="user--details--container">
                <div className="user--name">
                    {userInfo.name}
                </div>
                <div className="user--gender user--details">
                    <span className="user--label">Gender : </span>
                    <span className='info--val'>{userInfo.gender}</span>
                </div>
                <div className="user--age user--details">
                    <span className="user--label">Age : </span>
                    <span className='info--val'>{userInfo.age}</span>
                </div>
            </div>
            <div className="user--id">
                User ID : {userInfo.id}
            </div>
        </div>
    )
}