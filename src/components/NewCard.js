import React from 'react';
import {Link} from 'react-router-dom'

class NewCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title:'Title',
            text:'Text'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.btnClick=this.btnClick.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign:'center'}}>New Card</h1>
                <div style={{border:'1px black solid', width:250, height:200, margin:'auto'}}>
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
                        <div style={{margin:'auto', width:'55px', padding:'2px'}}>
                            <Link to="/">
                                <button
                                    onClick={this.btnClick}
                                    style={{padding:'10px'}}>
                                    Save
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    btnClick=()=>{
        console.log('click');
        const id = this.makeId();
        const {title,text}=this.state;
        if(!localStorage.length)localStorage.setItem('Local', JSON.stringify({'cards':[]}));
        const restoredLocal = JSON.parse(localStorage.getItem('Local'));
        restoredLocal.cards.push({'id':id,'title':title,'text':text,'like':false});
        localStorage.setItem('Local',JSON.stringify(restoredLocal));
    };

    makeId=()=>{
       let text = "";
       const possible = "abcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

}

export default NewCard