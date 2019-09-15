import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Jumbotron, InputGroup, FormControl, Button } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'


class Search extends Component {

    static propTypes ={
        setSearchName: PropTypes.func.isRequired
    }

    search = () => {
        //get input key words
        const searchName = this.input.value.trim()
        if(searchName) {
            //search
            this.props.setSearchName(searchName)
        }
        
    }

    render() {
        return (
            <div>
            <Jumbotron>
                <h1>Search Github Users</h1>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Please input the keywords"
                        aria-label="Please input the keywords"
                        aria-describedby="basic-addon2"
                        ref = {input =>this.input=input}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick = {this.search}>Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Jumbotron>
        </div>
        )
    }
}
export default Search