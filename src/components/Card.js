import React from 'react'
import {Link} from "react-router-dom";

class Card extends React.Component{
    constructor(props){
        super(props);

        this.state={
            like:this.props.card.like
        };

        this.likeClick=this.likeClick.bind(this);
    }



    render(){
        const {card}=this.props;
        const {id, title, text}=card;
        return(
            <div style={{margin:'2%', float:'left', border: '1px black solid', width:250, height:200}}>
                <h2 style={{textAlign:'center'}}>{title}</h2>
                <div style={{margin: 'auto', width: '90%'}}>
                    <textarea readOnly rows="4" cols="29" style={{resize:'none'}} value={text}/>
                </div>
                <br/>
                <div style={{float:'left', margin:'4%'}}>
                    <Link to={{pathname:"/EditCard/"+id}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M18 14.45v6.55h-16v-12h6.743l1.978-2h-10.721v16h20v-10.573l-2 2.023zm1.473-10.615l1.707 1.707-9.281 9.378-2.23.472.512-2.169 9.292-9.388zm-.008-2.835l-11.104 11.216-1.361 5.784 5.898-1.248 11.103-11.218-4.536-4.534z"/>
                        </svg>
                    </Link>
                </div>

                <div onClick={this.likeClick} style={{float:'right', margin:'4%'}}>
                    {this.state.like?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/>
                </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/>
                </svg>}
                </div>
            </div>
        )
    }

    likeClick=()=>{
        const {id}=this.props.card;
        this.setState({like:!this.state.like});
        const restoredLocal = JSON.parse(localStorage.getItem('Local'));
        restoredLocal.cards.forEach(card=>{
            if(card.id===id){
                card.like=!card.like;
            }
        });
        localStorage.setItem('Local',JSON.stringify(restoredLocal));
};
}

export default Card