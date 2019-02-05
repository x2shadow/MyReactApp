import React from 'react'
import Card from './Card'
import AddCardButton from './AddCardButton'

if(!localStorage.length)localStorage.setItem('Local', JSON.stringify({'cards':[]}));


class CardList extends React.Component{

    render(){
        const restoredLocal = JSON.parse(localStorage.getItem('Local'));
        const cardElements = restoredLocal.cards.map(card=><Card card={card} key={card.id}/>);

        return (
            <div>
                <AddCardButton/>
                {cardElements}
            </div>
        )
    }

}

export default CardList