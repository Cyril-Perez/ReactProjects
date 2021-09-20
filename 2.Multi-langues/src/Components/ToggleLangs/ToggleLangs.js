import { useContext } from "react";
import FrenchFlag from "../../assets/france.svg"
import SpanishFlag from "../../assets/spain.svg"
import EnglishFlag from "../../assets/united-kingdom.svg"

import "./ToggleLangs.css"

import { Context } from "../../context/LangContext";
const ToggleLangs = ()=>{
    const changeLang = useContext(Context)
    // console.log(changeLang);

    return(
        <div className="container-langs">
            <img onClick={()=>{ changeLang.toggleLang("FR")}} src={FrenchFlag}/>
            <img onClick={()=>{ changeLang.toggleLang("EN")}} src={EnglishFlag}/>
            <img onClick={()=>{ changeLang.toggleLang("ES")}} src={SpanishFlag}/>
        </div>
    )
}

export default ToggleLangs;