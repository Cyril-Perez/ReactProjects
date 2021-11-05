import { useEffect, useState} from "react"
import './App.css';
//test : try catch , then catch , config headers , test navigateurs , test ordinateur 

function App() {
  //affichage conditionnel
  const [valid, setValid] = useState(false)
  // search url id
  const [data, setData] = useState(null)
  //data city
  const [weathers, setWeathers] = useState(null)
  //gestion error
  const [fail, setFail] = useState()
  //config img weathers
  const [img, setImg] = useState()


 async function handleSearchCity (e){
              e.preventDefault()
         try{
          const save = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${data}&lang=fr&units=metric&appid=${process.env.REACT_APP_API_KEY}`,{method : "GET",})
          let response = await save.json()
          if(response.cod === "404"){
              console.log("mauvaise ville");
              setFail("Nom de ville incorrect")
              setValid(false)
          }else {
              let send = {...response}
              console.log(response);
              setFail(response.sys.country)
              setWeathers(send)
              setValid(true)
          }        
         }catch (err){
           console.log({err});
          //  if(err.cod === '404'){
          //    console.log("ahhh");
          //  }
           setFail("Nom de ville incorrect")
            setValid(false)
         }
    }        

      const handleChangeName = (e)=>{
        let search = e.target.value       
        setData(search)
        console.log(data);
      }

      useEffect(()=>{
        if(weathers === null){
          setImg("soleil")
        }else if(weathers.weather[0].id === 800){
          setImg("soleil")
        } else if (weathers.weather[0].id <= 321 || weathers.weather[0].id >= 701 && weathers.weather[0].id <= 781){
          setImg("nuage")
        }else if (weathers.weather[0].id >= 500 && weathers.weather[0].id <= 531){
          setImg("pluie")
        } else if (weathers.weather[0].id >= 600 && weathers.weather[0].id <= 622){
          setImg("neige")
        }else if (weathers.weather[0].id >= 801 ){
          setImg("nuagesSoleil")
        }
      },[weathers])

  
  return (
    <div className="App">
        <p className="city">Ville</p>
        <form onSubmit={handleSearchCity}>
          <input type="text" onChange={handleChangeName}/>
        </form>
        <p id={fail === "Nom de ville incorrect" ? "fail" : ""}>{fail}</p>
        <div className="content-infos">
              <p>{valid ? weathers.name : "recherchez votre ville"}</p>
              <img id="img-weathers" src={process.env.PUBLIC_URL + `/img/${img}.png`} style={{height : "100px" , width: "100px"}}/>
              <p>{valid ? `Degrés : ${weathers.main.temp}°C` : "Degrés : "}</p>
              <p className="description">{valid ? `Temps : ${weathers.weather[0].description}` : "Temps : "}</p>
        </div>
    </div>
  );
}

export default App;
