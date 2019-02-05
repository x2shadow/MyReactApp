import React from 'react'
import CardList from "./CardList"

class App extends React.Component{
    render(){
        return(
            <div style={{width:'860px', margin:'auto'}}>
                <h1 style={{textAlign:'center'}}>Card List</h1>
                <CardList/>
            </div>
        )
    }
}

export default App