
import { useEffect } from "react";
import "./Card.css"

const CardEnd = (props)=>{

    useEffect(()=>{
        setTimeout(()=>{
            props.modifyIndex(1)
        },7000)
    },[])
        return(
                <div className="card">
                    <h1>Merci</h1>
                    <p>On peut maintenant te proposer des plats en fonction de tes goûts</p>
                    <p style={{fontWeight:"bold"}}>Attendez quelques secondes vous allez être rediriger vers la page principal.</p>
                </div>
            )
}

export default CardEnd;