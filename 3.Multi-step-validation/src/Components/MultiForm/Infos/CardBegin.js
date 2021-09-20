import "./Card.css"

const CardBegin = (props)=>{
        return (
            <div className="card">
                    <h1>🍣 Aide-nous à ravir tes papilles 🌶️ </h1>
                    <button onClick={()=>{props.modifyIndex(2)}}>COMMENCER</button>
            </div>
        )
}

export default CardBegin
