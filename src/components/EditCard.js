import React from 'react'
import {Link} from 'react-router-dom'



class EditCard extends React.Component{
    constructor(props) {
        super(props);

         this.state = {
            restoredLocal : JSON.parse(localStorage.getItem('Local')),
            id:this.props.match.params.id
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.btnClick=this.btnClick.bind(this);
    }

    componentWillMount(){
        this.state.restoredLocal.cards.forEach(card=> {
            if (card.id === this.state.id) {
                this.setState({title:card.title});
                this.setState({text:card.text});
            }
        });
    }

    render(){
        return(
            <div>
                <h1 style={{textAlign:'center'}}>Card Info</h1>
                <div style={{border:'1px black solid', width:'fit-content', height:'fit-content', margin:'auto', paddingBottom:'50px'}}>
                    <form>
                        <div style={{padding:'30px 30px'}}>
                            <input
                                style={{width:'100%'}}
                                maxLength="19"
                                name="title"
                                type="text"
                                value={this.state.title}
                                onChange={this.handleInputChange} />
                        </div>
                        <div style={{padding:'0px 30px'}}>
                            <textarea
                                style={{width:'100%'}}
                                rows="4"
                                name="text"
                                value={this.state.text}
                                onChange={this.handleInputChange} />
                        </div>
                        <br/>
                        <div style={{float:'left', padding:'0px 30px'}}>
                            <Link to="/">
                                <button onClick={this.btnClick}>
                                    Save
                                </button>
                            </Link>
                        </div>
                        <div style={{float:'right', padding:'0px 25px'}}>
                            <Link to="/">
                                <button onClick={this.delClick}>
                                    Delete
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    btnClick=()=>{
       const {title,text, id, restoredLocal}=this.state;
       restoredLocal.cards.forEach(card=>{
           if(card.id===id){
            card.title=title;
            card.text=text;
           }
       });
       localStorage.setItem('Local',JSON.stringify(restoredLocal));
    };

    delClick=()=>{
        const {id, restoredLocal}=this.state;
        const delIndex=restoredLocal.cards.findIndex(card=>card.id===id);
        restoredLocal.cards.splice(delIndex,1);
        localStorage.setItem('Local',JSON.stringify(restoredLocal));
    };

    handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
}

export default EditCard;