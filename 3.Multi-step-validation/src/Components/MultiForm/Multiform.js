import {useState} from  "react"
import "./MultiForm.css"
import Indicator from "./Indicator/Indicatior"
import CardBegin from "./Infos/CardBegin"
import CardEnd from "./Infos/CardEnd"
import DietForm from "./SubForms/DietForm"
import FoodStyle from "./SubForms/FoodStyle"
import Allergies from "./SubForms/Allergies"
import HateLove from "./SubForms/HateLove"

const MultiForm = ()=>{

    const [formIndex, setFormIndex] = useState(1)
    const [allFormData, setAllFormData] = useState({
        dietForm : "",
        foodStyle : [],
        allergies : [],
        prefs : {       
        }
    })
    //function me servant de nav avec l'index et de transfert de données avec data
    const modifyIndex = (index , data)=>{
            setFormIndex(index)
            if(data){
                const newData = {...allFormData}
                const firstPropNewData = Object.keys(data)[0];
                //Object.keys(data) renvoie un tableau avec les proprités d'un objet (data)
                //au deuxieme form il y a seulement une valeur donc [0]
                //on troisieme form on envoie un seul objet avec une propriété foodStyle aussi pour simplifier nos envoies de données
                newData[firstPropNewData] = data[firstPropNewData]
                setAllFormData(newData)
            }
    }
console.log(allFormData);
    return (
        <div className="container-multiform">
            {/* COMPOSANT INDCATOR =  IMAGES AU DESSUS */}
            <Indicator formIndex={formIndex}/>
            {  formIndex === 1 ? <CardBegin modifyIndex={modifyIndex}/>
             : formIndex === 2 ? <DietForm modifyIndex={modifyIndex}/> 
             : formIndex === 3 ? <FoodStyle modifyIndex={modifyIndex}/>
             : formIndex === 4 ? <Allergies modifyIndex={modifyIndex}/>
             : formIndex === 5 ? <HateLove modifyIndex={modifyIndex}/>
             : formIndex === 6 ? <CardEnd modifyIndex={modifyIndex}/>
             :""}
        </div>
    )
}

export default MultiForm