import "./StateAnim.css"
import { useState,useRef } from "react"
import {useTransition, animated} from "react-spring"
import {v4 as uuidv4} from "uuid"

const StateAnim = ()=>{

    const [inputData,setInputData] = useState([
        {
            id: uuidv4(),
            txt : "Chopin"
        },
        {
            id: uuidv4(),
            txt : "Mozart"
        },
        {
            id: uuidv4(),
            txt : "Bach"
        }
    ])
    //useRef nous renvoie un objet avec comme proprité current et sa valeur de reference
    const inputRef = useRef()

    //fonction d'ajout de pianiste
    const handleData = e =>{
        e.preventDefault()
        const newObject = {
            id: uuidv4(),
            txt: inputRef.current.value
        }
        setInputData([...inputData,newObject])
        //on vide l' Input a chaque submit juste pour une meilleur
        // expérience utilisateur
        inputRef.current.value = "";
    }
    //animation a l'ajout de mon pianistes
    const listTransitions = useTransition(inputData, {
        from : {opacity : 0 , transform : "translateY(10px)"},
        enter : {opacity : 1 , transform : "translateY(10px)"},
        keys : inputData.map((item)=> item.id)

    })

    return(
        <form onSubmit={handleData}>
            <label htmlFor="piano">Entrez vos pianistes favoris.</label>
            <input ref={inputRef} type="text" id="piano"/>
            <ul>
                {
                    listTransitions((styles,item)=>{
                        return <animated.li style={styles}>
                            {item.txt}
                        </animated.li>
                    })
                }

                {/* simple ajout sans animations classiques
                {
                    inputData.map((element)=>{
                       return <li key={element.id}>{element.txt}</li>
                    })
                } */}
            </ul>
        </form>
    )
}
 export default StateAnim