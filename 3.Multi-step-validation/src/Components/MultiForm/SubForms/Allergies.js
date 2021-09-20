import "./SubForm.css"
import {useRef} from "react"

const Allergies = (props)=>{

    const allCheckboxes = useRef([])
    
    const preventFunc = e =>{
         e.preventDefault()
        const styleData = {
            allergies : []
        }
        allCheckboxes.current.forEach((element)=>{
                if(element.checked){
                    styleData.allergies.push(element.value)
                }
        })

        props.modifyIndex(5,styleData)
    }
    
    
        //func précedent 
    const handleReturn = ()=>{
        props.modifyIndex(3)
    }

    
    //func verif et push dans mon tableau de ref
    const addChek = el =>{
        
        //on verifie si on a bien une reférence et qu'elle n'est pas dans ma valeur current 
        //qui est mon tableau si oui on push mon element dans mon tableau de reference ref={addChek}
        if (el && !allCheckboxes.current.includes(el))
        allCheckboxes.current.push(el)
        // console.log(allCheckboxes)
    }
    // console.log(allCheckboxes);
    
    return (
        
       
        <form
        className="checkbox-form"
        onSubmit={preventFunc}
        >
            <p>Quelles sont tes cuisines préférées ?</p>
            <span>Choix multiples.</span>

            <label htmlFor="milk">Lait</label>
            <input ref={addChek}
            type="checkbox"
            id="milk"
            value="milk"
            />
            <label htmlFor="pollen">Pollen</label>
            <input ref={addChek}
            type="checkbox"
            id="pollen"
            value="pollen"
            />
            <label htmlFor="nuts">Noix</label>
            <input ref={addChek}
            type="checkbox"
            id="nuts"
            value="nuts"
            />
            <label htmlFor="eggs">Oeufs</label>
            <input
            type="checkbox"
            id="eggs"
            value="eggs"
            />
            <label htmlFor="shellfish">Fruits de mer</label>
            <input ref={addChek}
            type="checkbox"
            id="shellfish"
            value="shellfish"
            />

            <div className="container-nav-btns">
                <button onClick={handleReturn}type="button" className="prev">Précédent</button>
                <button onClick={preventFunc} type="button" className="prev">Valider</button>
            </div>
        </form>


        )
}

export default Allergies;