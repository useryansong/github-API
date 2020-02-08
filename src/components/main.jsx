import React, { useState, useEffect } from 'react'
import './main.css'

import axios from 'axios'


const Main = ({ searchName }) => {

    const [users, setUsers] = useState([]);

    // when component receive new searchName

    useEffect(() => {
        //sending ajax request
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
            .then(response => {
                //get response data
                const result = response.data
                const users = result.items.map(item => (
                    {
                        name: item.login,
                        url: item.html_url,
                        avatarUrl: item.avatar_url
                    }))
                setUsers(users)
            })
    }, [searchName]);


    return (
        <div className='mainOuter'>
            {
                users.map((user, index) => {
                    return (
                        <div 
                            key={index}
                            className ='mainDiv'
                            >
                            <div className='profiles'>
                                <a href={user.url} ><img className='imgDiv' src={user.avatarUrl} /></a>
                            </div>
                            <div className='usernameDiv'>{user.name}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Main