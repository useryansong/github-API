import React, { Component } from 'react'
import Search from './search'
import Main from './main'

import '../../node_modules/bootstrap/dist/css/bootstrap.css'


class App extends Component {
    state = {
        searchName:''
    }

    setSearchName = (searchName) => {
        this.setState ({searchName})
        
    }

    render() {
        return (
            <div>
                <Search setSearchName={this.setSearchName}/>
                <Main searchName={this.state.searchName}/>

            </div>
        )
    }
}
export default App