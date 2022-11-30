import React, {useState} from "react";
import "../App.css"
import Banner from "../assets/World-Cup-Banner.png"
import Leagues from "./Leagues";
import Standings from "./Standings";

const  Content = () => {

    const [active,setActive] = useState(true)

    return ( 
    <div>
        <div className="banner"> <img src={Banner}/> </div>
        <div className="content-container">
            <div className="tabs">
                <div className="tab-leagues" onClick={()=>setActive(true)}>
                    <h2 style={{color: active ? 'red' : null}}>Leagues</h2>
                </div>
                <div className="tab-standings" onClick={()=>setActive(false)}>
                    <h2 style={{color: !active ? 'red' : null}}>Standings</h2>
                </div>
            </div>
            { active ? <Leagues /> : <Standings /> }
        </div>
    </div>
    );
}
 
export default Content;