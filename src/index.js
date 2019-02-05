import React from 'react'
import {render} from 'react-dom'
import {Router, Route} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import  App from './components/App'
import NewCard from './components/NewCard'
import EditCard from './components/EditCard'

const history = createBrowserHistory();



class Navigation extends React.Component{
    render(){
        return(
            <Router history={history}>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/NewCard" component={NewCard}/>
                    <Route exact path="/EditCard/:id" component={EditCard}/>
                </div>
            </Router>
        )
    }
}

render(<Navigation/>, document.getElementById('root'));