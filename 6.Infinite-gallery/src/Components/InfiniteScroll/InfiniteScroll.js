import "./InfiniteScroll.css"
import {useState,useEffect,useRef} from "react"
import {v4 as uuidv4} from "uuid"

const InfiniteScroll = ()=>{
    const [dataImg, setDataImg] = useState([ [],[],[] ])
    const [pageIndex, setPageIndex] = useState(1)
    const [searchState, setSearchState] = useState("random")
    // ${process.env.REACT_APP_SECRET_API}
   


    const  infiniteFetchData = ()=>{
        fetch(`https://api.unsplash.com/search/photos?page=${pageIndex}&per_page=30&query=${searchState}&client_id=${process.env.REACT_APP_SECRET_API}`).then((response)=>{
        return response.json()
        }).then((data)=>{
            const imgsReceived = []
            data.results.forEach(element => {
                imgsReceived.push(element.urls.regular)
            });
            //mise a jour du state 
            const newFreshState = [
                [...dataImg[0]],
                [...dataImg[1]],
                [...dataImg[2]],

            ]
            //je parcours mes tableaux dans mon tableau
            let index = 0;
            //i<3 correspond a mes trois sous tableau de mon state
            for(let i = 0; i <3 ; i++){

                for(let j = 0; j <10 ; j++){
                    newFreshState[i].push(imgsReceived[index])
                    index++
                }
            }
            setDataImg(newFreshState)
        })
    }
    //permettant d'aller chercher nos donnes
    // useEffect(()=>{
    //     infiniteFetchData()
    // },[pageIndex])

    const handleSearch = e =>{
        e.preventDefault()

        setSearchState(inpRef.current.value)
        setPageIndex(1)
    }
    const inpRef = useRef()

    useEffect(()=>{
        window.addEventListener("scroll", infiniteCheck)
        //clear func
        return ()=>{
            window.removeEventListener("scroll", infiniteCheck)
        }
    })

        //des lors que l'on touche le fond de la page
    const infiniteCheck = ()=>{
        const {scrollTop,scrollHeight , clientHeight} = document.documentElement
        if(scrollHeight - scrollTop === clientHeight){
            setPageIndex(pageIndex => pageIndex +1)
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleSearch}>
                <label htmlFor="search">Votre recherche</label>
                <input type="text" id="search" ref={inpRef}/>
            </form>
            <div className="card-list">
                <div>
                    {dataImg[0].map((img)=>{
                        return <img key={uuidv4()} src={img} alt="image unsplash"/>
                    })}
                </div>
                <div>
                {dataImg[1].map((img)=>{
                        return <img key={uuidv4()} src={img} alt="image unsplash"/>
                    })}
                </div>
                <div>
                {dataImg[2].map((img)=>{
                        return <img key={uuidv4()} src={img} alt="image unsplash"/>
                    })}
                </div>
            </div>


        </div>
    )
}

export default InfiniteScroll