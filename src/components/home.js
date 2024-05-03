import React from 'react'
// import "../styles/home.css" 
// import Navbar from './Navbar';
// import Main from './Main';
import Sidebar from './Sidebar';
import MainCont from './MainCont';
// import { onSnapshot, doc ,collection } from "firebase/firestore";
// import { auth, usersCollection, db } from "../firebase"


export default function Home(){
    // const [username, setUsername] = React.useState("");
    // const [gender, setGender] = React.useState("");
    // const [userage, setUserage] = React.useState("");
    // const [logged, setLogged] = React.useState(false);
    // const [userInfo, setUserInfo] = React.useState();
    // const [dId, setDId] = React.useState();
    // const [docRef, setDocRef] = React.useState();
    // const [dataCollection, setDataCollection] = React.useState();
    // const [myData, setMyData] = React.useState();
    
    // React.useEffect(() => {
    //     const unSubscribe = onSnapshot(usersCollection, (snapshot) => {
    //         snapshot.docs.map((doc) => (
    //             (doc.data().uid === auth.currentUser.uid) && setDId(doc.id)
    //         ))
    //     })
    //     return unSubscribe;
    // }, [])
    // React.useEffect(()=> {
    //     dId && setDocRef(doc(db, 'users', dId))
    // }, [dId])

    // React.useEffect(()=> {
    //     // docRef && setDataCollection(collection(docRef, 'mgperdL'));
    //     if(docRef){
    //         const coll = collection(docRef, 'mgperdL');
    //         const unSubscribe = onSnapshot(coll,(snapshot) => {
    //             const data = snapshot.docs.map((doc) => ({
    //                 ...doc.data(),
    //                 id: doc.id
    //             }));
    //             const getUnixTimestamp = timestampString => {
    //                 const [datePart, timePart] = timestampString.split(' ');
    //                 const [year, month, day] = datePart.split('-').map(Number);
    //                 const [hour, minute, second] = timePart.split(':').map(Number);
    //                 return new Date(year, month - 1, day, hour, minute, second).getTime();
    //             };
            
    //             const sortByTimestamp = () => {
    //                 const sortedData = [...data].sort((a, b) => getUnixTimestamp(a.time) - getUnixTimestamp(b.time));
    //                 setMyData(sortedData);
    //             };
    //             sortByTimestamp();
    //         });
    //         return unSubscribe;
    //     }
    // }, [docRef])
    // console.log(myData);

    return(
        <div className="home--container">
            <Sidebar />
            <MainCont />
        </div>
    )
}