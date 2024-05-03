import React from 'react';
import { onSnapshot, doc ,collection } from "firebase/firestore";
import { auth, usersCollection, db } from "../firebase"
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function MainCont(props){
    const [dId, setDId] = React.useState();
    const [docRef, setDocRef] = React.useState();
    const [myData, setMyData] = React.useState();
    
    React.useEffect(() => {
        const unSubscribe = onSnapshot(usersCollection, (snapshot) => {
            snapshot.docs.map((doc) => (
                (doc.data().uid === auth.currentUser.uid) && setDId(doc.id)
            ))
        })
        return unSubscribe;
    }, [])
    React.useEffect(()=> {
        dId && setDocRef(doc(db, 'users', dId))
    }, [dId])

    React.useEffect(()=> {
        // docRef && setDataCollection(collection(docRef, 'mgperdL'));
        if(docRef){
            const coll = collection(docRef, 'mgperdL');
            const unSubscribe = onSnapshot(coll,(snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }));
                const getUnixTimestamp = timestampString => {
                    const [datePart, timePart] = timestampString.split(' ');
                    const [year, month, day] = datePart.split('-').map(Number);
                    const [hour, minute, second] = timePart.split(':').map(Number);

                    return new Date(year, month - 1, day, hour, minute, second).getTime();
                };
            
                const sortByTimestamp = () => {
                    const sortedData = [...data].sort((a, b) => getUnixTimestamp(b.time) - getUnixTimestamp(a.time));
                    setMyData(sortedData);
                };
                sortByTimestamp();
            });
            return unSubscribe;
        }
    }, [docRef])

    const getLabels = () => {
        const labels = myData?.map((obj) => {
            const [datePart, timePart] = obj.time.split(' ');
            const [year, month, day] = datePart.split('-').map(Number);
            const [hour, minute, second] = timePart.split(':').map(Number);
            // return `${day}th ${month} \n${hour} : ${minute}`
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const monthName = monthNames[month - 1]; // Adjust month index to match monthNames array
            return `${day}th ${monthName}\n${hour}:${minute < 10 ? '0' : ''}${minute}`;
        }).slice(0,5);
        return labels;
    }

    const getVals = () => {
        const vals =  myData?.map(obj => obj.value)
        return vals;
    }
    // console.log(getLabels());

    const sugarLevelsData = {
        labels: getLabels(),
        datasets: [
        {
            label: 'Sugar Levels',
            data: getVals(), // Example sugar levels data
            fill: true,
            backgroundColor :['#9e5533','rgb(197,158,140)', 'rgb(197,158,140)', 'rgb(197,158,140)', 'rgb(197,158,140)', 'rgb(197,158,140)', 'rgb(197,158,140)','rgb(197,158,140)'],
            borderColor: '#f5f5f5)',
            borderRadius : 10,
            tension: 0.2
        }
        ]
    };
    const options = {
        scales: {
          x: {
            display: true, 
            grid: {
              display: false 
            }
          },
          y: {
            display: true,
            grid: {
              display: false
            },
            ticks: {
                stepSize: 20
              }
          }
        },
        plugins: {
            legend: {
              display: false 
            }
        },
        barPercentage: 0.8, 
        categoryPercentage: 0.9, 
        maintainAspectRatio: false, 
        responsive: true
      };
    return(
        <div className="main--container">
            <div className="welcome">
                Welcome ,
            </div>
            <div className="question">
                Did you get your Gluco-sensed today ?
            </div>
            <div className="latest--container">
                <div className="latest--title">
                    Latest Record
                </div>
                <div className="latest--reading--box">
                    <span className="num--reading">{myData ? myData[0].value : ' '}</span>
                    <span className="reading--unit">mg/dl</span>
                </div>
            </div>
            <div className="history--graph--container">
                <div className="graph--top">
                    <div className="graph--title">
                        BGL Statistics
                    </div>
                    {myData ?
                    <button className="full--history">
                        Check Full History
                    </button> :
                    <div className="no--history">
                        No Readings Found
                    </div>
                    }
                </div>
                <div className="graph">
                    <Bar data={sugarLevelsData} options={options} />
                </div>
            </div>
        </div>
    )
}