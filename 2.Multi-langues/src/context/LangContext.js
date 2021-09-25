import { createContext, useState } from "react";

export const Context = createContext()
//Langue du navigateur 
const multiLangages = ["EN","FR","ES"]
let nav = navigator.language.slice(0,2).toUpperCase()

if (multiLangages.indexOf(nav) === -1){
    console.log("langue non supporté");
    nav = "EN"
}

const ContextProvider = props =>{
    const [lang , setLang] = useState(nav)
    // console.log(lang);
    const toggleLang = (changeLang)=>{
        setLang(changeLang)
    }
    return (
        <Context.Provider value={{lang,toggleLang}}>
            {props.children}
        </Context.Provider>

    )
}

export default ContextProvider;