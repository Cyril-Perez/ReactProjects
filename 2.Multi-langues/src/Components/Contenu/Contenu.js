import {useContext} from "react"
import { Context } from "../../context/LangContext"
import "./Contenu.css"
import data from "../../assets/data"

const Contenu = ()=>{
    const langue = useContext(Context)
    // console.log(langue);
return (
    <div className="content">
        <h1  className="title">{data[langue.lang].title}</h1>
        <p className="content-txt">{data[langue.lang].txt}</p>
    </div>
)
}

export default Contenu