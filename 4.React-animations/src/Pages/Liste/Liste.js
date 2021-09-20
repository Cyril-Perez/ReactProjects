import "./Liste.css"
import Card from "../../Components/Card/Card"
import {useTrail, animated} from "react-spring"
import {v4 as uuidv4} from "uuid"
//useTrail permet des de manipuler les elements
//animated permet de realiser l'animation


const Liste = ()=>{
    //trail est un tableau 
    //useTrail prend deux parametre 1:nombre d'element a animer 2: "config"
    const trail = useTrail(9,{
        from:{
            opacity:0,
            x: -50
        },
        to : {
            opacity: 1,
            x: 0
        }
    })
   
    return(
        <div className="list-container">
           {trail.map((cardStyle,index)=>{
               
            return <animated.div 
            key={uuidv4()}
            style={cardStyle}
            >
                <Card/>
               </animated.div>
           })}
           
        </div>
    )
}
 export default Liste