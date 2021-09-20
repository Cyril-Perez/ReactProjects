import { useState } from "react";
import "./SubForm.css"


const HateLove =(props)=>{
    const[formData,setFormData] = useState({
        prefs : {
            love : "",
            hate : ""
        }
    })

    const preventFunc = e =>{
        e.preventDefault()
    }
    const handleReturn = ()=>{
        props.modifyIndex(4)
    }
    const handleTxtArea = (e, pref)=>{
        if(pref === "love"){
            setFormData({
                prefs : {
                    //creation d'un nouvelle objet
                    //je copie l'etat precedent de mon pref pour garder la valeur de ma propriété hate
                    //et je met a jour ma propriété love
                    ...formData.prefs,
                    love : e.target.value
                }
            })
        }
        else if (pref === "hate"){
            setFormData({
                    //creation d'un nouvelle objet
                    //je copie l'etat precedent de mon pref pour garder la valeur de ma propriété love
                    //et je met a jour ma propriété hate 
                prefs : {
                    ...formData.prefs,
                    hate : e.target.value
                }
            })
        }
    }
    return(
        <form className="preference-" onSubmit={preventFunc}>
            <p>Parle-nous des aliments que tu préfères et du détestes !</p>
        
            <label htmlFor="prefered">
                Les aliments préférés, séparés par une virgule :
            </label>
            <textarea 
            id="prefered" 
            placeholder="Un ou plusieurs, si tu en as"
            onChange={(e)=>{handleTxtArea(e,"love")}}
            >
            </textarea>

            <label htmlFor="hated">
                Les aliments détestés, séparés par une virgule :
            </label>
            <textarea 
            id="hated" 
            placeholder="Un ou plusieurs, si tu en as"
            onChange={(e)=>{handleTxtArea(e,"hate")}}
            >
            </textarea>

            <div className="container-nav-btns">
                <button
                type="button"
                onClick={handleReturn}
                className="prev"
                >
                Précédent
                </button>
                <button
                onClick={()=>{props.modifyIndex(6,formData)}}
                >
                Valider</button>
            </div>
        
        
        
        </form>
    )
}
export default HateLove