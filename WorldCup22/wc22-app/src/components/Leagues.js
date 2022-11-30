import React, {useState, useEffect} from "react";
import '../App.css';
import axios from "axios";

const Leagues = () => {
    const [Data,setData] = useState([]);

    useEffect(() => {
        axios('https://worldcupjson.net/matches').then(
            (res) => {
                console.log(res.data)
                setData(res.data)
            }
        )
    },[])

    return ( 
        <div className="leagues-container">
            {Data.map((data) => (
                <div key={data.id} className="leagues-div">
                    <h1>{data.stage_name}</h1>
                    <p>{data.home_team.name} {data.home_team.goals} X {data.away_team.goals} {data.away_team.name}</p>
                    <p>{data.datetime}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Leagues;