import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container, Row, Col, Image } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import axios from 'axios'


class Main extends Component {
    static propTypes = {
        searchName:PropTypes.string.isRequired
    }
    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null

    }
    // when component receive new props
    componentWillReceiveProps(newProps) {
        const {searchName} = newProps
        //update state
        this.setState({
            initView:false,
            loading:true
        })
        //sending ajax request
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
        .then(response => {
            //get response data
            const result = response.data
            const users = result.items.map(item => (
                {name:item.login, url:item.html_url, avatarUrl: item.avatar_url}))
            //update state(success)
            this.setState({loading:false, users})
        })
        .catch(error => {
            //update state(error)
            this.setState({loading:false, errorMsg:error.message})
        })
    }


    render() {
        const { initView, loading, users, errorMsg } = this.state
        const {searchName} = this.props

        if (initView) {
            return (
                <h2>Please input the key words:{searchName}</h2>
            )
        } else if (loading) {
            return (
                <h2>Loading...</h2>
            )
        } else if (errorMsg) {
            return (
                <h2>{errorMsg}</h2>
            )
        } else {
            return (
                <div>
                    <Container>
                        {
                            users.map((user, index) => {
                                return (
                                    <Row key={index}>
                                        <Col xs={6} md={4} >
                                            <a href={user.url}><Image src={user.avatarUrl} rounded /></a>
                                            <p>{user.name}</p>
                                        </Col>
                                    </Row>
                                )
                            })
                        }

                    </Container>
                </div>
            )
        }
    }
}
export default Main