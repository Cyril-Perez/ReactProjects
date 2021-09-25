import { useContext } from "react";
import FrenchFlag from "../../assets/france.svg"
import SpanishFlag from "../../assets/spain.svg"
import EnglishFlag from "../../assets/united-kingdom.svg"
import { useReducer,useState } from "react";


import "./ToggleLangs.css"

import { Context } from "../../context/LangContext";
const ToggleLangs = ()=>{
    const changeLang = useContext(Context)
    // console.log(changeLang);

//-----------------------------------------------------TEST useReducer FORM---------------------------------------------------------------------
//     const [valid,setValid]= useState(true)


//     const reducer = (state,action)=>{
//         // console.log(state);
//         return{...state , [action.nom] : action.valeur}

        
//     }

//         const inistialeState = {
//             name : "",
//             age : ""
//         }
//     const [data , dispatch] = useReducer(reducer,inistialeState)


//     const handleSaveData = (e)=>{
//         let infos = {
//             nom : e.target.name,
//             valeur : e.target.value
//         }
//         dispatch(infos)
    
// }
//     const handleClickData = ()=>{
//         setValid(false)
//     }

    

    

    return(
        <div className="container-langs">
            <img onClick={()=>{ changeLang.toggleLang("FR")}} src={FrenchFlag}/>
            <img onClick={()=>{ changeLang.toggleLang("EN")}} src={EnglishFlag}/>
            <img onClick={()=>{ changeLang.toggleLang("ES")}} src={SpanishFlag}/>

            {/**TEST useReducer FORM */}

            {/* <input onChange={handleSaveData} name="nom" type="text" style={{ backgroundColor : "white", color : "black" , fontSize : "15px" , padding : "20px"}}/>
            <input onChange={handleSaveData} age="age" type="text" style={{ backgroundColor : "white", color : "black" , fontSize : "15px" , padding : "20px"}}/> */}
{/* 
            <button onClick={handleClickData} style={{marginTop : "25px"}}>Send</button> */}

            {/* <button onClick={()=>{ dispatch({type : "increment"})}}>Increment</button>
            <button onClick={()=>{ dispatch({type : "decrement"})}}>Décrement</button>
            <div>{valid ? "mentionnez-vos informations": data.nom}</div> */}
        </div>
    )
}

export default ToggleLangs;