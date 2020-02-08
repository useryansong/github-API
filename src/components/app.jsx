import React, { useState } from 'react'
import Search from './search'
import Main from './main'
import './app.css'

const App = () => {

    const [searchName, setSearchName] = useState('');

    const onSearch = (searchName) => {
        setSearchName(searchName)
    }

    return (
        <div style={styles.outer}>
            <div style={styles.inner}>
                <Search
                    onSearch={onSearch} />
                <Main
                    searchName={searchName} />
            </div>
        </div>
    )

}

const styles ={
    outer: {
        height: '100vh',
        backgroundColor: '#EDEDED',
        display: "flex",
        justifyContent: 'center'
    },
    inner: {
        width: "60%",
        height:"80%",
        overflow: "auto",
        backgroundColor: '#fff',
        borderRadius: '12px',
        marginTop: 40,
        paddingTop: 20,
    }
}

export default App