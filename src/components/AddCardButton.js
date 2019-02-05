import React from 'react'
import {Link} from 'react-router-dom'

class AddCardButton extends React.Component{
    render(){
        return (
                <div style={{margin:'2%', float:'left', border:'1px black solid', width:250, height:200}}>
                            <Link to="/NewCard">
                                <svg xmlns="http://www.w3.org/2000/svg" width="250" height="200" viewBox="-113 -88 250 200">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-5v5h-4v-5h-5v-4h5v-5h4v5h5v4z"/>
                                 </svg>
                            </Link>
                </div>
        )
    }

}

export default AddCardButton