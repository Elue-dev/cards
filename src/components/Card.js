import React from 'react'
import '../components/style.css'

function Card(props) {
    let cardData = props.data;
    const cardList = cardData.map((card, i) => {
        return(
            <div key = {i} className = 'container'>
                <div className = 'box'>
                    <div className='image'>
                        <img src = {card.image} />
                    </div>
                    <div className = 'text'>
                        <p>{card.text}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className ='grid'>
            {cardList}
        </div>
    )
}

export default Card
