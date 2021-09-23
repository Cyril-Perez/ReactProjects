import "./Chrono.css"
import PauseImg from "../Images/pause.svg"
import PlayImg from "../Images/play.svg"
import ResetImg from "../Images/reset.svg"
import {useEffect, useReducer, useState} from "react"


const Chrono = ()=>{
    //1500/60 = 25 minutes 
    //session time = le temp en cour
    const [sessionTime, setSessionTime] = useState(1500)
    //session time fixed = le temp par defaut reglage du temp
    const [sessionTimeFixed, setSessionTimeFixed] = useState(1500)
    //breakTime = le temp de pause en cour  (300=5minutes)
    const [breakTime, setBreakTime] = useState(300)
    //breakTime fixed = le temp de pause par defaut reglage
    const [breakTimeFixed,setBreakTimeFixed] = useState(300)
    //wordkingChrono l'etat permettant de faire play pause reset..
    const [workingChrono,setWorkingChrono] = useState(false)

    //useReducer pour acceder au state 'neuf' et non l'ancien
    const[state,dispatch]= useReducer (reducer)
    
    function reducer (state,action){
        switch(action.type){
            case"Tick" :
            console.log(action)
            if(sessionTime >=0){
                setSessionTime(sessionTime-1)
            } else if (breakTime >=1) {
                setBreakTime(breakTime -1)
            } else if (breakTime <=0 && breakTime <= 0){
                setSessionTime(sessionTimeFixed)
                setBreakTime(breakTimeFixed)
            }
        }
    }
    
    useEffect(()=>{
        let id;
        if(workingChrono){
            id = window.setInterval(()=>{
                //je renvoie un nouvelle objet chaque seconde
               dispatch({type : "Tick"})
            },1000)
        }
        //if pause alors on clear setIntervall
        return ()=>{
            window.clearInterval(id)
        }
    },[workingChrono])

    //est le declancheur de mon chrono et permet de lancer mon useEffect
    const playPause = ()=>{
        setWorkingChrono(!workingChrono)
    }
    //reglage session chrono
    const handleSession = e => {
        // if(e.target.includes("minus"))
        // console.log(e.target.classList);

            if(e.target.classList.contains("minus")){
                if(sessionTime /60 > 1){
                    //60 pour 1 minutes
                    setSessionTime(sessionTime - 60)
                    setSessionTimeFixed(sessionTimeFixed - 60)

                }
            } else if (e.target.classList.contains("plus")){
                setSessionTime(sessionTime + 60)
                setSessionTimeFixed(sessionTimeFixed + 60)
            }
    }
    //reglage temp de pause
    const handleBreak = e => {
        if(e.target.classList.contains("minus")){
            if(breakTime /60 > 1){
                //60 pour 1 minutes
                setBreakTime(breakTime - 60)
                setBreakTimeFixed(breakTimeFixed - 60)

            }
        } else if (e.target.classList.contains("plus")){
            setBreakTime(breakTime + 60)
            setBreakTimeFixed(breakTimeFixed + 60)
        }
    }

        const resetFunc = ()=>{
            //si le workingChrono = true (est en cours)
            if (workingChrono){
                setWorkingChrono(!workingChrono)
            }
            setSessionTime(sessionTimeFixed)
            setBreakTime(breakTimeFixed)
        }

    return(
        <div className={ workingChrono ? "container-chrono anim-glow" : "container-chrono" }>
            <div className="container-config">
                <div className="box-btns session">
                    <button className="minus"  onClick={handleSession}>
                        -
                    </button>
                    <span>{sessionTimeFixed /60 }</span>
                    <button className="plus"  onClick={handleSession}>
                        +
                    </button>
                </div>
                <div className="box-btns break">
                    <button className="minus" onClick={handleBreak}>
                        -
                    </button>
                    <span>{breakTime/60}</span>
                    <button className="plus" onClick={handleBreak}>
                        +
                    </button>
                </div>

            </div>
            <h1>
                {
                    sessionTime >= 0 ?
                    (
                        <span>{`${Math.trunc(sessionTime / 60)}: ${sessionTime % 60 < 10 ? `0${sessionTime % 60}` : `${sessionTime % 60}`}`}</span>
                    )  
                    //(fin chrono) session time -1 alors on lance imédiattement le break et on l'affiche si dessous
                    :  <span>{`${Math.trunc(breakTime / 60)}: ${breakTime % 60 < 10 ? `0${breakTime % 60}` : `${breakTime % 60}`}`}</span>
                       
                    
                }
            </h1>
            <div className="container-controllers">
                <button onClick={playPause}>
                    <img src={workingChrono? PauseImg : PlayImg}/>
                </button>
                <button onClick={resetFunc}>
                    <img src={ResetImg}/>
                </button>
            </div>

        </div>
    )
}
export default Chrono