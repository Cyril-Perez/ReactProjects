import "./SubForm.css"
import { useState } from "react"



const DietForm = (props)=>{
    const preventFunc = e => e.preventDefault();

    const [formData, setFormData]= useState({
        dietForm : "nodiet"
    })
    const handleRadio = (e =>{
        setFormData({
            dietForm : e.target.value
        })
    })


        return (
            <form
            onSubmit={preventFunc}
            className="diet-form"
            >
                <p>Quelle est ton régime alimentaire ?</p>
                <label htmlFor="nodiet">Pas de régime en particulier </label>
                <input 
                onChange={handleRadio}
                type="radio"
                name="diet"
                id="nodiet"
                value="nodiet"
                />
                <label htmlFor="homnivorous">Homnivor </label>
                <input 
                onChange={handleRadio}
                type="radio"
                name="diet"
                id="homnivorous"
                value="homnivorous"
                />
                <label htmlFor="vegetarian">Végétarien </label>
                <input 
                onChange={handleRadio}
                type="radio"
                name="diet"
                id="vegetarian"
                value="vegetarian"
                />
                <label htmlFor="vegan">Vegan</label>
                <input 
                onChange={handleRadio}
                type="radio"
                name="diet"
                id="vegan"
                value="vegan"
                />
                <button onClick={()=>{props.modifyIndex(3, formData)}}>Valider</button>
            </form>
        )
}

export default DietForm