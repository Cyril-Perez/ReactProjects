import "./SubForm.css"
import {useRef} from "react"

const FoodStyle = (props)=>{

    const allCheckboxes = useRef([])
    
    const preventFunc = e =>{
         e.preventDefault()
        const styleData = {
            foodStyle : []
        }
        allCheckboxes.current.forEach((element)=>{
                if(element.checked){
                    styleData.foodStyle.push(element.value)
                }
        })

        props.modifyIndex(4,styleData)
    }
    
    
        //func précedent 
    const handleReturn = ()=>{
        props.modifyIndex(2)
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

            <label htmlFor="italian">Italienne</label>
            <input ref={addChek}
            type="checkbox"
            id="italian"
            value="italian"
            />
            <label htmlFor="japanese">Japonaise</label>
            <input ref={addChek}
            type="checkbox"
            id="japanese"
            value="japanese"
            />
            <label htmlFor="indian">Indienne</label>
            <input ref={addChek}
            type="checkbox"
            id="indian"
            value="indian"
            />
            <label htmlFor="thaî">Thaîlandaise</label>
            <input
            type="checkbox"
            id="thaî"
            value="thaî"
            />
            <label htmlFor="french">Française</label>
            <input ref={addChek}
            type="checkbox"
            id="french"
            value="french"
            />
            <label htmlFor="chinese">Chinoise</label>
            <input ref={addChek}
            type="checkbox"
            id="chinese"
            value="chinese"
            />
            <div className="container-nav-btns">
                <button onClick={handleReturn}type="button" className="prev">Précédent</button>
                <button onClick={preventFunc} type="button" className="prev">Valider</button>
            </div>
        </form>


        )
}

export default FoodStyle;